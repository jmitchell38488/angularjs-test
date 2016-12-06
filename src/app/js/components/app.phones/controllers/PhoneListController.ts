/// <reference path='../../../_all.ts' />

namespace app.phones {

    import IResourceArray = angular.resource.IResourceArray;
    export class PhoneListController {

        public phones: IResourceArray<IPhoneListDef>;
        public orderProp: string;
        public query: string;

        constructor(private PhoneListResource : IPhoneListResource) {
            this.orderProp = 'age';
            this.query = '';
            this.createPhonesList(PhoneListResource);
        }

        private createPhonesList(PhoneListResource: IPhoneListResource) {
            this.phones = PhoneListResource.query();
        }

        public getPhoneList() : IResourceArray<IPhoneListDef> {
            return this.phones;
        }

        public getOrderProp() : string {
            return this.orderProp;
        }

        public getQuery() : string {
            return this.query;
        }

    }

}