angular.module('app',[])
    .directive('myAwesomeSite', function(){
        return{
            strict:"E",
            templateUrl: "app.html",
            replace: true
        }
    });