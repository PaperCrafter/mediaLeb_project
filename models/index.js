'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db={};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.MasterBot = require('./masterBot')(sequelize, Sequelize);
db.SlaveBot = require('./slaveBot')(sequelize, Sequelize);

db.MasterBot.hasMany(db.SlaveBot, {foreignKey:'master', sourceKey:'id'});
db.SlaveBot.belongsTo(db.MasterBot, {foreignKey:'master', targetKey:'id'});

module.exports = db;