// a service that depends on the other service.
var app = angular.module('myApp', []);

app.factory('myService', ['backendService', function($backend) {
    return {
        test: function(msg) {
            return "Returned message:" + $backend.echo(msg);
        }
    };
}]);
