import * as utils from './utils';

var readyStateEnum = {
    start: 0,
    opened: 1,
    sent: 2,
    received: 3,
    finish: 4
};

function createXHR() {
    return new XMLHttpRequest();
}

function createPromise(resolve, reject) {
    return new Promise(resolve, reject);
}

function addUrlParam(url, name, value) {
    url += (url.indexOf('?') === -1 ? '?' : '&');
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}

function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) {
        return parsed;
    }

    utils.forEach(headers.split('\n'), function parser(line, index) {
        i = line.indexOf(':');
        key = line.substr(0, i).trim().toLowerCase();
        val = line.substr(i + 1).trim();

        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });

    return parsed;
}

function buildUrl(url, config) {
    if (config.data != null && config.method.toLowerCase() === 'get') {
        utils.forEach(config.data, function (value, name) {
            addUrlParam(url, name, value);
        });
    }
    return url;
}

function request(config) {
    return createPromise(function (resolve, reject) {
        var xhr = createXHR();

        if (utils.isFormData(config.data)) {
            delete config.data['Content-Type']; // Let the browser set it
        }

        xhr.onreadystatechange = function () {
            if (!xhr || xhr.readyState !== readyStateEnum.finish) {
                return;
            }

            if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) {
                return;
            }

            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in xhr ? parseHeaders(xhr.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? xhr.responseText : xhr.response;
            var response = {
                data: responseData,
                status: xhr.status,
                statusText: xhr.statusText,
                headers: responseHeaders,
                config: config,
                request: xhr
            };

            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                // successfully
                resolve(response);
            }
            else {
                // unsuccessfully
                reject(response);
            }

            xhr = null;
        };
        xhr.open(config.method.toLowerCase(), buildUrl(config.url, config), true);
        xhr.send(config.data);
    });
}

function httpGet(url, data, options) {
    var config = {
        method: 'get',
        url: url,
        data: data
    };

    if (options != null) {
        utils.extend(config, options);
    }

    return request(config);
}

function httpPost(url, data, options) {
    var config = {
        method: 'post',
        url: url,
        data: data
    };

    if (options != null) {
        utils.extend(config, options);
    }

    return request(config);
}

export { httpGet, httpPost }
