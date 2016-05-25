'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
    }

  }

  angular.module('euro2016ProblemfinderCoUkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
