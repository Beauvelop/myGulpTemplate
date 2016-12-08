angular.module("myApp", [])

angular.module("myApp").controller("mainCtrl", ['$scope', 'mainService',
    function($scope, mainService) {
        // $scope.chartInfo = mainService.returnThisChart();

        $scope.weather = mainService.returnWeather().then(function(
            response) {
            $scope.data = response;
            $scope.city = response.data.name;
            $scope.clouds = response.data.weather[0].description;
            $scope.wind = function() {
                var windMph = (response.data.wind.speed *
                    1.152);
                wSpeedStr = windMph.toString();
                wSpeedStr = wSpeedStr.substr(0, (wSpeedStr.indexOf(
                    '.')));
                return wSpeedStr;
            }();
            // $scope.windDir = response.data.wind["deg"];
            $scope.windDir = function() { //perhaps you want this in the service(?)
                var direction = '';
                var deg = response.data.wind["deg"];
                if (deg >= 315 || deg <= 45) {
                    direction = "Southerly";
                } else if (deg > 45 && deg < 135) {
                    direction = "Westerly";
                } else if (deg > 135 && deg < 225) {
                    direction = "Northerly";
                } else if (deg > 225 && deg < 315) {
                    direction = "Easterly";
                }

                return direction;
            }();
            $scope.temp = response.data.main.temp;
        });
    }
])

$(document).ready(function() {



}); //zzz master-js container

angular.module('myApp').service('mainService', ['$http', function($http) {

    // this.returnThisChart = function() {
    //     console.log("testing service")
    //     return thisChart;
    // }

    var apiKey = "ee148a39251d4314c86b16c7b0c3034d";

    var openWeatherUrl =
        "http://api.openweathermap.org/data/2.5/weather?lat=40.2181&lon=-111.6133&units=imperial&appid=" +
        apiKey;

    this.returnWeather = function() {
        return $http.get(openWeatherUrl);
    }
}])
