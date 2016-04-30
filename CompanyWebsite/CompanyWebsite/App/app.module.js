/// <reference path="B:\GitHub\TestRepo\CompanyWebsite\CompanyWebsite\Scripts/angular.min.js" />

//Use IIFE Immediately Invoked Function Expression , nothing is global unless it is necessary. 
var webModule;
(function () {
    //var webModule = angular.module("webModule"); This statement wil retrieve the already loaded module to the variable.
    //the other method with dependency [] argument is a function which will create and return a new angular module. 
    webModule = angular.module("webModule", ['ngRoute']);



    //config for executing http requests by having the input data as Json  and enabling cross domain requesting. 
    webModule.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.withCredentials = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.common["Accept"] = "application/json";
        //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
    ]);
})();