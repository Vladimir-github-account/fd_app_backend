require('dotenv/config');

const config = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_USER_PASSWORD,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
        port: 5432,
        migrationStorage: 'json',
        seederStorage: 'json'
    },
    test: {},
    production: {}
};

module.exports = config;