(function (global, sine) {
    'use strict';

    var syntaxApp = 'app.syntax';

    sine.namespace(syntaxApp).component('note', {
        template: '<div *n-bind="content"></div>',
        construct: function () {
            this.content = '';
        },
        methods: {
            onchange: function(){
                console.log('value changed');
            }
        }
    });

    sine.namespace(syntaxApp).component('app', {
        templateId: 'syntax',
        construct: function () {
            this.value = 'text holder';
            this.on = true;
            this.view = 'cmp1';
        },
        methods: {
            changeView: function () {
                if(this.view === 'cmp1'){
                    this.$.view = 'cmp2';
                }
                else{
                    this.$.view = 'cmp1';
                }
            }
        }
    });

    sine.namespace(syntaxApp).component('cmp1', {
        template: '<div>this is cmp 1</div><div>this is cmp 1</div><div>this is cmp 1</div><div>this is cmp 1</div><div>this is cmp 1</div>',
        construct: function () {

        }
    });

    sine.namespace(syntaxApp).component('cmp2', {
        template: '<div>this is cmp 2</div><div>this is cmp 2</div><div>this is cmp 2</div><div>this is cmp 2</div><div>this is cmp 2</div>',
        construct: function () {

        }
    });

    global.onload = function(){
        sine.bootstrap('#app');
    };

})(window, sine);
