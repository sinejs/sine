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
        templateUrl: './syntax.html',
        construct: function () {
            this.value = 'text holder';
        }
    });

    global.onload = function(){
        sine.bootstrap('#app');
    };

})(window, sine);
