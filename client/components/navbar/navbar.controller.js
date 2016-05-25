'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
      state: 'team-picker',
      title: 'Team Picker'
    }];
  }

}

angular.module('euro2016ProblemfinderCoUkApp')
  .controller('NavbarController', NavbarController);
