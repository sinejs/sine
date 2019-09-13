(function (sine) {
    'use strict';

    sine.component('router-view', {
        props: {
            routes: {}
        },
        methods: {

        },
        afterViewInit: function () {
            var scope = this.$getParent();

            if(!scope.routes){
                throw new Error('Define routes in container component!');
            }

            this.routes = scope.routes;
        }
    });

})(sine);