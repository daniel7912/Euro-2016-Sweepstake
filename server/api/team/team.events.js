/**
 * Team model events
 */

'use strict';

import {EventEmitter} from 'events';
var Team = require('../../sqldb').Team;
var TeamEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeamEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Team.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    TeamEvents.emit(event + ':' + doc._id, doc);
    TeamEvents.emit(event, doc);
    done(null);
  }
}

export default TeamEvents;
