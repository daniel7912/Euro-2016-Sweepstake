'use strict';

class TeamPickerCtrl {
  constructor($scope, $http, lodash, socket, Teams, User) {

    var vm = this;
    vm.$http = $http;
    vm.selectingTeam = false;

    Teams.query(function(teams) {
      vm.teams = lodash.chunk(teams, 4);
      socket.syncChunkUpdates('team', vm.teams, function(item) {
        var flat = lodash.flatten(vm.teams);

        var oldItem = _.find(flat, {
          _id: item._id
        });
        var index = flat.indexOf(oldItem);
        var event = 'created';

        // replace oldItem if it exists
        // otherwise just add item to the collection
        if (oldItem) {
          flat.splice(index, 1, item);
          event = 'updated';
        } else {
          flat.push(item);
        }

        vm.teams = _.chunk(flat, 4);
      });
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('team');
    });

    vm.user = User.get();

  }

  selectTeam() {
    var vm = this;
    vm.selectingTeam = true;

    vm.$http.get('/api/users/select-team').then(selection => {
      vm.user.hasSelectedTeam = true;
      vm.user.Team = selection.data;
      window.alert('You picked '+selection.data.name+'. Good luck!');
    });

  }

}

angular.module('euro2016ProblemfinderCoUkApp')
  .controller('TeamPickerCtrl', TeamPickerCtrl);
