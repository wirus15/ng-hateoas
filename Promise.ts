module hateoas {
    'use strict';

    class Promise implements ng.IPromise {

        private promise: ng.IPromise;
        private object: Object = {};

        get $object() {
            return this.object;
        }

        constructor(promise: ng.IPromise) {
            this.promise = promise;
            this.object = {};
            this.promise.then((resource: Resource) => {
                 angular.copy(resource, this.object);
            });
        }

        then(successCallback: Function, errorCallback?: Function, notifyCallback?: Function) {
            return new Promise(this.promise.then.apply(this.promise, arguments));
        }

        catch(errorCallback: Function) {
            return new Promise(this.promise.catch.apply(this.promise, arguments));
        }

        finally(callback: Function, notifyCallback?: Function) {
            return new Promise(this.promise.finally.apply(this.promise, arguments));
        }
    }
}