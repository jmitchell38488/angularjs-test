/// <reference path='../../../_all.ts' />

namespace app.phones {

    var module: angular.IModule = angular.module('app.phones');

    module.filter('checkmark', () => {
        return (input: string) => {
            return input ? '\u2713' : '\u2718';
        };
    });

}