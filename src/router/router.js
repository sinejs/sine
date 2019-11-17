import * as utils from '../utility';
import { Messenger } from '../utility/message';

class ActiveRoute {
    constructor(route, matched, remaining, parameters) {
        this.route = route;
        this.matched = matched;
        this.remaining = remaining;
        this.parameters = parameters;
    }
}

class Router {
    constructor(routes, options) {
        this.root = '/';
        this.mode = 'history';
        this.routes = routes;
        this.activeRoutes = [];
        this.routeChange = new Messenger();
        this.config(options);
    }

    config(options) {
        this.mode = options && options.mode && options.mode === 'history' && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    }

    getFragment() {
        var fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
        }
        else {
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    }

    clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    add(route) {
        this.routes.push(route);
    }

    remove(route) {
        utils.remove(this.routes, route);
    }

    flush() {
        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    }

    check(f) {
        var fragment = f || this.getFragment(), activeRoutes = [];
        this.matchRoute(this.routes, fragment, activeRoutes);
        this.activeRoutes = activeRoutes;
        this.routeChange.fire();
    }

    matchRoute(routes, fragment, activeRoutes) {
        if (!routes) {
            return;
        }

        var self = this;

        routes.some(function (route) {
            var activeRoute = self.matchPath(route, fragment);
            if (activeRoute) {
                if (self.activeRoutes.length > 0) {
                    var oldActiveRoute = self.activeRoutes.shift();
                    if (oldActiveRoute.matched === activeRoute.matched) {
                        activeRoutes.push(oldActiveRoute);
                    }
                    else {
                        activeRoutes.push(activeRoute);
                    }
                }
                else {
                    activeRoutes.push(activeRoute);
                }
                self.matchRoute(route.children, activeRoute.remaining, activeRoutes);
                return true;
            }
        });
    }

    matchPath(route, fragment) {
        var matches = [],
            parameters = {},
            pathItems = route.path.split('/'),
            fragmentItems = fragment.split('/');

        for (var i = 0; i < pathItems.length; i++) {
            var pathItem = pathItems[i];

            if (i >= fragmentItems.length) {
                return null;
            }

            var fragmentItem = fragmentItems[i];
            if (pathItem === fragmentItem) {
                matches.push(fragmentItem);
            }
            else if (pathItem.startsWith(':')) {
                matches.push(fragmentItem);
                parameters[pathItem.substring(1)] = fragmentItem;
            }
            else {
                return null;
            }
        }

        return new ActiveRoute(route, matches.join('/'), fragmentItems.splice(pathItems.length).join('/'), parameters);
    }

    listen() {
        var self = this;
        var current = self.getFragment();
        var fn = function () {
            if (current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        };
        self.check(current);
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    }

    navigate(path) {
        path = path ? path : '';
        if (this.mode === 'history') {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        }
        else {
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }
        return this;
    }

    stop() {
        clearInterval(this.interval);
    }
}

export { Router }