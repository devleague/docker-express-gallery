// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.POSTGRES_HOSTNAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
};
