'use strict';

const Sequelize = require('Sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db={};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.MasterBot = require('./MasterBot')(sequelize, Sequelize);
/*
db.SlaveBot = require('./slaveBot')(sequelize, Sequelize);

db.MasterBot.hasMany(db.SlaveBot);
db.SlaveBot.belongsTo(db.MasterBot);
*/
module.exports = db;