/// <reference path="app.module.js" />
(function() {
    debugger;
    webModule.config(['$routeProvider', function ($routeProvider) {
        debugger;
        alert("hello");
        $routeProvider
            .when('/Home',
            {
                templateUrl: 'App/Components/Home/homeView.html',
                controller: 'homeController'

            })
            .when('/Products',
            {
                templateUrl: 'App/Components/Products/productsView.html',
                controller: 'productsController'

            })
        .otherwise(
        {
            redirectTo: '/Home'
        });

    }]);
})();