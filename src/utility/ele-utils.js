
function getChildNodes(node) {
    return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
    getChildNodes(node).forEach(function (child) {
        node.removeChild(child);
    });
}

function replaceNode(refNode, newNode) {
    var parentNode = refNode.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newNode, refNode);
        parentNode.removeChild(refNode);
    }
}

function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(node);
    }
}

function removeNodeBetween(beginNode, endNode) {
    var parentNode = beginNode.parentNode;
    var childNodes = getChildNodes(parentNode);

    childNodes.forEach(function (child) {
        if (child.previousSibling === beginNode && child !== endNode) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === endNode && child !== beginNode) {
            parentNode.removeChild(child);
        }
    });
}

function insertNodeAfter(refNode, newNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

function queryElementLoaded(ele, callback) {
    var cancelToken = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth > 0 && ele.clientHeight > 0) {
            callback();
        }
        else {
            requestAnimationFrame(query);
        }
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}

function queryElementUnloaded(ele, callback) {
    var cancelToken = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth === 0 && ele.clientHeight == 0) {
            callback();
        }
        else {
            requestAnimationFrame(query);
        }
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}

function queryElementState(ele, callbacks) {
    var cancelToken = false, loaded = false;

    function query() {
        if (cancelToken) {
            return;
        }

        if (ele.clientWidth > 0 && ele.clientHeight > 0) {
            if (!loaded) {
                loaded = true;
                if (callbacks.onLoad != null) {
                    callbacks.onLoad.call(callbacks);
                }
            }
        }
        else {
            if (loaded) {
                loaded = false;
                if (callbacks.onUnload != null) {
                    callbacks.onUnload.call(callbacks);
                }
            }
        }

        requestAnimationFrame(query);
    }

    requestAnimationFrame(query);

    return function () {
        cancelToken = true;
    };
}


export { getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState };