/// <reference path='../../../_all.ts' />

namespace app.phones {

    export interface IPhoneDetailsAndroid {
        os?: string;
        ui?: string;
    }

    export interface IPhoneDetailsCamera {
        features?: string[];
        primary?: string;
    }

    export interface IPhoneDetailsConnectivity {
        bluetooth?: string;
        cell?: string;
        gps?: boolean;
        infrared?: boolean;
        wifi?: string;
    }

    export interface IPhoneDetailsDisplay {
        screenResolution?: string;
        screenSize?: string;
        touchScreen?: boolean;
    }

    export interface IPhoneDetailsHardware {
        accelerometer?: boolean;
        audioJack?: string;
        cpu?: string;
        fmRadio?: string;
        physicalKeyboard?: boolean;
        usb?: string;
    }

    export interface IPhoneDetailsSizeAndWeight {
        dimensions?: string[];
        weight?: string;
    }

    export interface IPhoneDetailsStorage {
        flash?: string;
        ram?: string;
    }

    export interface IPhoneList {
        age: number;
        id: string;
        imageUrl: string;
        name: string;
        snippet: string;
        carrier?: string;
    }

    export interface IPhoneListDef extends ng.resource.IResource<IPhoneList> {}

    export interface IPhoneListResource extends ng.resource.IResourceClass<IPhoneListDef> {}

    export interface IPhoneDetails {
        additionalFeatures?: string;
        description: string;
        id: string;
        name: string;
        availability?: string[];
        images: string[];
        android?: IPhoneDetailsAndroid;
        camera?: IPhoneDetailsCamera;
        connectivity?: IPhoneDetailsConnectivity;
        display?: IPhoneDetailsDisplay;
        hardware?: IPhoneDetailsHardware;
        sizeAndWeight?: IPhoneDetailsSizeAndWeight;
        storage?: IPhoneDetailsStorage;
    }

    export interface IPhoneDetailsDef extends ng.resource.IResource<IPhoneDetails> {}

    export interface IPhoneDetailsResource extends ng.resource.IResourceClass<IPhoneDetailsDef> {}

}