// Require the dotenv module to load environment variables
// Require the Sequelize module
require('dotenv').config();

const Sequelize = require('sequelize');

// Create a new instance of Sequelize and connect to the database using the 
// JAWSDB_URL environment variable if available, otherwise use the DB_NAME, DB_USER, and DB_PASSWORD environment variables to connect to a local MySQL database

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
