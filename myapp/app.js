(function() {
    angular
        .module("app", [
            "ui.router",
        ])
        .config(function() {
            angular.lowercase = angular.$$lowercase;
        })

    function config($stateProvider) {

        $stateProvider
            .state("mainPage", {
                url: "/",
                templateUrl: "/app_deps/pages/main/mainPage.view.html"
            })
    }
    angular
        .module("app")
        .config(["$stateProvider", "$urlRouterProvider", config])
        .config([
            "$qProvider",
            function($qProvider) {
                $qProvider.errorOnUnhandledRejections(false);
            }
        ])
        .config([
            "$locationProvider",
            function($locationProvider) {
                $locationProvider.html5Mode(true);
            }
        ]);
})();