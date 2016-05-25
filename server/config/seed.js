/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
import q from 'q';
var Team = sqldb.Team;
var User = sqldb.User;

function createUsers() {

  var deferred = q.defer();

  User.sync()
    .then(() => User.destroy({ where: {} }))
    .then(() => {
      User.bulkCreate([{
        name: 'Daniel Hutton',
        email: 'dhutton@test.com',
        password: 'hutton'
      }])
      .then(() => {
        console.log('finished populating users');
        deferred.resolve();
      });
    });

  return deferred.promise;

}

function createTeams() {

  var deferred = q.defer();

  Team.sync()
    .then(() => Team.destroy({ where: {} }))
    .then(() => {
      Team.bulkCreate([{
        name: 'Albania',
        seed: 24
      }, {
        name: 'Austria',
        seed: 9
      }, {
        name: 'Belgium',
        seed: 5
      }, {
        name: 'Croatia',
        seed: 8
      }, {
        name: 'Czech Republic',
        seed: 18
      }, {
        name: 'England',
        seed: 4
      }, {
        name: 'France',
        seed: 1
      }, {
        name: 'Germany',
        seed: 2
      }, {
        name: 'Hungary',
        seed: 22
      }, {
        name: 'Iceland',
        seed: 17
      }, {
        name: 'Italy',
        seed: 6
      }, {
        name: 'Northern Ireland',
        seed: 23
      }, {
        name: 'Poland',
        seed: 10
      }, {
        name: 'Portugal',
        seed: 7
      }, {
        name: 'Republic of Ireland',
        seed: 19
      }, {
        name: 'Romania',
        seed: 21
      }, {
        name: 'Russia',
        seed: 12
      }, {
        name: 'Slovakia',
        seed: 20
      }, {
        name: 'Spain',
        seed: 3
      }, {
        name: 'Sweden',
        seed: 16
      }, {
        name: 'Switzerland',
        seed: 11
      }, {
        name: 'Turkey',
        seed: 13
      }, {
        name: 'Ukraine',
        seed: 15
      }, {
        name: 'Wales',
        seed: 14
      }])
      .then(() => {
        console.log('finished populating teams');
        deferred.resolve();
      });
    });

  return deferred.promise;

}

createUsers().then(function() {
  return createTeams();
}).then(function() {
  console.log('FINISHED');
});
