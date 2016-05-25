'use strict';

var app = require('../..');
import request from 'supertest';

var newTeam;

describe('Team API:', function() {

  describe('GET /api/teams', function() {
    var teams;

    beforeEach(function(done) {
      request(app)
        .get('/api/teams')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teams = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(teams).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/teams', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teams')
        .send({
          name: 'New Team',
          info: 'This is the brand new team!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeam = res.body;
          done();
        });
    });

    it('should respond with the newly created team', function() {
      expect(newTeam.name).to.equal('New Team');
      expect(newTeam.info).to.equal('This is the brand new team!!!');
    });

  });

  describe('GET /api/teams/:id', function() {
    var team;

    beforeEach(function(done) {
      request(app)
        .get('/api/teams/' + newTeam._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          team = res.body;
          done();
        });
    });

    afterEach(function() {
      team = {};
    });

    it('should respond with the requested team', function() {
      expect(team.name).to.equal('New Team');
      expect(team.info).to.equal('This is the brand new team!!!');
    });

  });

  describe('PUT /api/teams/:id', function() {
    var updatedTeam;

    beforeEach(function(done) {
      request(app)
        .put('/api/teams/' + newTeam._id)
        .send({
          name: 'Updated Team',
          info: 'This is the updated team!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeam = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeam = {};
    });

    it('should respond with the updated team', function() {
      expect(updatedTeam.name).to.equal('Updated Team');
      expect(updatedTeam.info).to.equal('This is the updated team!!!');
    });

  });

  describe('DELETE /api/teams/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teams/' + newTeam._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when team does not exist', function(done) {
      request(app)
        .delete('/api/teams/' + newTeam._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
