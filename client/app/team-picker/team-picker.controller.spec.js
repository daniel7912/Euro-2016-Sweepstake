'use strict';

describe('Component: TeamPickerComponent', function () {

  // load the controller's module
  beforeEach(module('euro2016ProblemfinderCoUkApp'));

  var TeamPickerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TeamPickerComponent = $componentController('TeamPickerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
