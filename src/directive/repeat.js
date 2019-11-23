import { Directive, Component } from '../view';
import { directive } from '../decorator';
import * as utils from '../utility';

@directive({
    namespace: 'sine',
    selector: 'n-repeat'
})
class RepeatDirective extends Directive {
    constructor() {
        super();
        this.scope = null;
        this.itemExp = '';
        this.itemsExp = '';
        this.itemTemplate = '';
        this.dataItems = [];
        this.cmpItems = [];
        this.header = null;
        this.footer = null;
    }

    onCompile() {
        var arg = this.$attr.nodeValue;
        var element = this.$element;
        var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error('n-repeat: parameter is not valid');
        }

        this.itemExp = result[1];
        this.itemsExp = result[2];

        element.removeAttribute(this.$attr);
        this.itemTemplate = element.getOuterTpl();

        var self = this;
        var connection = element.createConnection('n-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            var items = scope.$eval(self.itemsExp);

            self.scope = scope;
            self.setDataItems(items);
            self.header = document.createComment('start: n-repeat');
            self.footer = document.createComment('end: n-repeat');

            fragment.appendChild(self.header);
            fragment.appendChild(self.footer);
            return fragment;
        });

        element.parentNode.replaceChild(element, connection);
        element.destroy();

        connection.onInsert = function () {
            self.render();
        };

        connection.onDetect = function () {
            var items = self.scope.$eval(self.itemsExp);

            if (self.dataItems !== items) {
                self.setDataItems(items);
                self.render();
            }
            else {
                self.cmpItems.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        connection.onDestroy = function () {
            self.$destroy();
            element = null;
            connection = null;
        };
    }

    onDestroy() {
        this.cmpItems.forEach(function (cmpItem) {
            cmpItem.$destroy();
        });
        this.cmpItems = null;
        this.scope = null;
        this.dataItems = null;
        this.header = null;
        this.footer = null;
    }

    setDataItems(value) {
        var self = this;

        if (utils.isArray(value)) {
            this.dataItems = value;
        }
        else {
            this.dataItems = [];
        }

        this.scope.$watch(this.dataItems, 'length', function () {
            self.render();
        });
    }

    getCmpItem(dataItem) {
        var self = this, filters = this.cmpItems.filter(function (item) {
            return item[self.itemExp] === dataItem;
        });

        if (filters.length === 0) {
            return null;
        }

        var target = filters[0];

        this.cmpItems = this.cmpItems.filter(function (item) {
            return item[self.itemExp] !== dataItem;
        });

        return target;
    }

    render() {
        var self = this;
        var fragment = document.createDocumentFragment();
        var newCmpItems = [];
        var index = 0;

        utils.forEach(self.dataItems, function (item, key) {
            var cmpItem = self.getCmpItem(item);

            if (cmpItem == null) {
                cmpItem = new Component({
                    template: self.itemTemplate
                });
                cmpItem[self.itemExp] = item;
                cmpItem.$inheritCmp(self.scope);
            }

            cmpItem['$index'] = index;
            fragment.appendChild(cmpItem.$render(true));
            newCmpItems.push(cmpItem);
            index++;
        });

        if (self.cmpItems.length > 0) {
            self.cmpItems.forEach(function (repeatItem) {
                repeatItem.$destroy();
            });
        }

        self.cmpItems = newCmpItems;
        utils.removeNodeBetween(self.header, self.footer);
        self.footer.parentNode.insertBefore(fragment, self.footer);
    }
}
