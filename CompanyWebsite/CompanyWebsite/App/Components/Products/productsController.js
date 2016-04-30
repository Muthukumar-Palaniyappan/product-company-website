/// <reference path="../../app.module.js" />

(function () {
    var productsController = function ($scope) {
        $scope.prods = ['prod1', 'prod2'];
    };
    webModule.controller('productsController',['$scope',productsController])


})();