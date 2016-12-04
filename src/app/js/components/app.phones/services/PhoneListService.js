'use strict';

angular.module('app.phones').factory('PhoneListService',[
    '$resource',
    function ($resource) {
        return $resource('src/app/res/phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {
                    phoneId: 'phones'
                },
                isArray: true
            }
        });
    }
]);
