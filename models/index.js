const Sequelize = require('sequelize');
const config = require('../config/db_config')
const sequelize = new Sequelize(config)

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });