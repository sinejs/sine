import { httpGet } from '../utility/http';
import { Service } from '../view/service';
import { service } from '../decorator/service';

@service({
    namespace: 'sine',
    selector: '$templateCache'
})
class TemplateCacheService extends Service {
    constructor() {
        super();
        this.tplCache = {};
        this.promiseCache = {};
    }

    getTplByUrl(url) {
        var self = this;

        if (this.tplCache[url]) {
            return new Promise(function (resolve) {
                resolve(self.tplCache[url]);
            });
        }

        if (!this.promiseCache[url]) {
            this.promiseCache[url] = httpGet(url).then(function (res) {
                self.promiseCache[url] = null;
                self.tplCache[url] = res.data || '';
                return self.tplCache[url];
            });
        }

        return this.promiseCache[url];
    }
}