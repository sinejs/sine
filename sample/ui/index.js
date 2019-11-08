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
                            {
                                field: 'name', type: 'text', label: 'Name', validator: function (value) {
                                if (value.length > 10) {
                                    return {
                                        valid: false,
                                        feedback: 'text length must less than 10.'
                                    };
                                }
                            }
                            },
                            {field: 'email', type: 'email', label: 'Email', help: 'Fill valid email address'},
                            {field: 'password', type: 'password', label: 'Password'}
                        ]
                        // collapsed: true
                    },
                    {
                        title: 'Other',
                        items: [
                            {field: 'description', type: 'text', label: 'Description'}
                        ]
                    }
                ]
            };
        },
        methods: {
            next: function () {
                this.$proxy.entity = {
                    name: 'sine2',
                    email: '123456@sine.com',
                    password: '12345678',
                    description: 'this is description'
                }
            },
            show: function () {
                this.modalService.show('modal-content');
            }
        },
        inject: {
            modalService: 'modalService'
        }
    });

    sine.namespace(app).component('modal-content', {
        templateUrl: './modal.html'
    });

    global.onload = function(){
        sine.bootstrap('#app');
    };

})(window, sine);
