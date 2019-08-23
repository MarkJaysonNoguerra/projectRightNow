(function() {
    angular
        .module("app")
        .controller("mainPageController", mainPageController)

    // mainPageController.$inject = [
    //     "$scope",
    //     "apiService"
    // ];

    function mainPageController() {
        console.log("helloWorld");

    }
})();