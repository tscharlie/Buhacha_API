(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {

        var api = {};

        // Base Url
        api.baseUrl = 'http://localhost:8000/';
        
        
        api.accounts = {
            list: $resource(api.baseUrl + 'accounts'),
            one: $resource(api.baseUrl + 'accounts/:accountId', {accountId:'@id'})
        };

        return api;
    }

})();