(function () {
    'use strict';

    angular
        .module('app.accounts')
        .controller('AccountDialogController', AccountDialogController);

    /** @ngInject */
    function AccountDialogController(Account, $scope, api, $mdDialog, $http) {
        var vm = this;

        // Data
        vm.originalAccount = Account;
        vm.account = angular.copy(Account);


        // Methods
        vm.close = close;
        vm.submit = submit;


        init();

        /////////////////////////////

        function init() {


        }

        function close() {
            $mdDialog.cancel();
        }

        function submit() {

            $http.put('http://localhost:8000/accounts/1', vm.account)
                .then(function (response) {
                    if (response.data) {
                        $mdDialog.hide(response.data.data);
                    } else {
                        console.error(response);
                    }
                });

        }

    }
})();