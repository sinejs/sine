(function (global, sine) {
    'use strict';

    var app = 'app.ui';

    sine.namespace(app).component('app', {
        templateUrl: './app.html',
        construct: function () {
            this.entity = {
                name: 'sine',
                email: '123@sine.com',
                password: '123456',
                description: 'this is description'
            };

            this.config = {
                groups: [
                    {
                        title: 'User',
                        items: [
                            {field: 'name', type: 'text', label: 'Name'},
                            {field: 'email', type: 'email', label: 'Email', help: 'Fill valid email address'},
                            {field: 'password', type: 'password', label: 'Password'}
                        ],
                        collapsed: true
                    },
                    {
                        title: 'Other',
                        items: [
                            {field: 'description', type: 'text', label: 'Description'}
                        ]
                    }
                ]
            }
        },
        methods: {
            onInit: function () {
                this.$watch(this.entity, 'name', function () {

                });
            }
        }
    });

    global.onload = function(){
        sine.bootstrap('#app');
    };

})(window, sine);
