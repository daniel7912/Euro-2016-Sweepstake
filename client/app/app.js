'use strict';

angular.module('euro2016ProblemfinderCoUkApp', [
  'euro2016ProblemfinderCoUkApp.auth',
  'euro2016ProblemfinderCoUkApp.admin',
  'euro2016ProblemfinderCoUkApp.constants',
  'ngCookies',
  'ngLodash',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
