require('dotenv').config();

module.exports = {
  development: {
    username: 'markivan',
    password: '123',
    database: 'pets_db',
    host: '127.0.0.1',

    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
