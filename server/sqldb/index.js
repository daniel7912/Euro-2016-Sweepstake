/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(
    config.sequelize.connection.database,
    config.sequelize.connection.username,
    config.sequelize.connection.password,
    config.sequelize.options
  )
};

// Insert models below
db.Team = db.sequelize.import('../api/team/team.model');
db.User = db.sequelize.import('../api/user/user.model');

db.User.hasOne(db.Team);
db.Team.belongsTo(db.User);

module.exports = db;
