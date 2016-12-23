(function ()
{
    'use strict';

    angular
        .module('app.accounts', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.accounts', {
                url     : '/accounts?:account',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/accounts/accounts.html',
                        controller : 'ÂccountsController as vm'
                    }
                },
                params   : {
                    account: {
                        value : null
                    }
                },
                bodyClass: 'accounts'
            });

        // Translation
        //$translatePartialLoaderProvider.addPart('app/main/apps/mail');


        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title      : 'Applikationen',
            
            state      : 'appsss',
            group: true,
            weight     : 4
        });
        
        msNavigationServiceProvider.saveItem('apps.accounts', {
            title      : 'Konten',
            icon       : 'icon-wallet-travel',
            state      : 'app.accounts',
            weight     : 4
        });
    }
})();