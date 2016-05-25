'use strict';

angular.module('euro2016ProblemfinderCoUkApp.auth', ['euro2016ProblemfinderCoUkApp.constants',
    'euro2016ProblemfinderCoUkApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
