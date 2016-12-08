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
