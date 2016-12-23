(function () {
    'use strict';

    angular
        .module('app.accounts')
        .controller('ÂccountsController', ÂccountsController);

    /** @ngInject */
    function ÂccountsController($scope, api, $mdDialog, $document) {
        var vm = this;

        // Data
        vm.accounts = null;


        // Methods
        vm.showAccountDialog = showAccountDialog;


        init();

        /////////////////////////////

        function init() {

            api.accounts.list.get({}, function (response) {
                vm.accounts = response.data;
            });

        }

        function showAccountDialog($event, account) {
            $mdDialog.show({
                controller: 'AccountDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/accounts/dialogs/account/account-dialog.html',
                parent: angular.element($document.body),
                targetEvent: $event,
                clickOutsideToClose: true,
                locals: {
                    Account: account
                }
            }).then(function(updated) {
                if(updated) {
                    init();
                }
            })
        }
    }
})();