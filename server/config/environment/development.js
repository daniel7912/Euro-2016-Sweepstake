'use strict';

// Development specific configuration
// ==================================
module.exports = {
  sequelize: {
    connection: {
      database: 'sweepstake_euro2016',
      username: 'user',
      password: 'pass'
    },
    options: {
      host: 'localhost',
      dialect: 'mariadb',
      logging: false,
      define: {
        timestamps: true
      }
    }
  },

  seedDB: true
};
