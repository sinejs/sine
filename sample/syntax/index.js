(function (global, sine) {
    'use strict';

    var syntaxApp = 'app.syntax';

    sine.namespace(syntaxApp).component('note', {
        template: '<div *n-bind="content"></div>',
        props: {
            content: ''
        },
        methods: {
            onchange: function(){
                console.log('value changed')
            }
        }
    });

    sine.namespace(syntaxApp).component('app', {
        templateUrl: './syntax.html',
        props: {
            value: 'text holder'
        }
    });

    global.onload = function(){
        sine.bootstrap('app', 'app');
    };

})(window, sine);
