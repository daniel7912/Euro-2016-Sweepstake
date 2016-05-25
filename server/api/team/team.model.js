'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Team', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    seed: DataTypes.INTEGER
  });
}
