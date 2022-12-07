const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
