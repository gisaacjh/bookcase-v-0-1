const devConfig = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'jedi',
    password: 'MarDirac',
    database: 'bookcase_dev'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
};

const prodConfig = Object.assign(
  {},
  devConfig,
  { client: 'pg', connection: process.env.DATABASE_URL}
)

module.exports = {
  development: devConfig,
  production: prodConfig
}

module.exports = {
  development: devConfig,
  production: {}
}
