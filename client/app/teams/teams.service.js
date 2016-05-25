'use strict';

(function() {

function TeamsResource($resource) {
  return $resource('/api/teams/:id/:controller', {
    id: '@_id'
  });
}

angular.module('euro2016ProblemfinderCoUkApp')
  .factory('Teams', TeamsResource);

})();
