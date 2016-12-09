/// <reference path='../../../_all.ts' />

namespace app.phones {

    export interface IPhoneRefDataService {
        getPhoneList(): angular.IPromise<IPhoneListResource>;
        getPhoneDetails(config: IPhoneRefDataServiceConfig): angular.IPromise<IPhoneDetailsResource>;
    }

    export interface IPhoneRefDataServiceConfig {
        id?: string;
    }

    export class PhoneRefDataService implements IPhoneRefDataService {

        private listUrl: string = '/res/phones/phones.json';
        private detailsUrl: string = '/res/phones/{id}.json';

        constructor(private $http : angular.IHttpService, private $q : angular.IQService) {}

        public getPhoneList(): angular.IPromise<IPhoneListResource> {
            var d = this.$q.defer();
            d.resolve(this.$http.get(this.listUrl));
            return d.promise;
        }

        public getPhoneDetails(config: IPhoneRefDataServiceConfig): angular.IPromise<IPhoneDetailsResource> {
            var d = this.$q.defer();
            var uri: string = this.detailsUrl.replace('{id}', config.id);
            d.resolve(this.$http.get(uri));
            return d.promise;
        }
    }
}
