// Update with your config settings.

module.exports = {

  production: {
    client: 'mssql',
    connection: {
      database: 'bcrypt_db',
      user:     'sa',
      password: 'sqlServer2017',
      server: 'Inspiron-3583'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
