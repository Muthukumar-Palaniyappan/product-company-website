/// <reference path="../../app.module.js" />

(function () {
    var homeController = function ($scope) {
        $scope.numberOfProds = 5;
    };
    webModule.controller('homeController', ['$scope', homeController]);


})();