(function (global, sine) {
    'use strict';

    var app = 'app.ui';

    sine.namespace(app).component('app', {
        templateUrl: './app.html',
        construct: function () {
            this.collapsed = true;
        },
        methods: {
            toggle: function() {
                this.proxy.collapsed = !this.collapsed;
            }
        }
    });

    global.onload = function(){
        sine.bootstrap('#app');
    };

})(window, sine);
