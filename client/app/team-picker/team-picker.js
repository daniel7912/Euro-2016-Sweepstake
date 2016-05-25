'use strict';

angular.module('euro2016ProblemfinderCoUkApp')
  .config(function ($stateProvider) {
	$stateProvider
	  .state('team-picker', {
  		url: '/team-picker',
  		templateUrl: 'app/team-picker/team-picker.html',
  		controller: 'TeamPickerCtrl',
  		controllerAs: 'vm',
      authenticate: true
	  });
  });
