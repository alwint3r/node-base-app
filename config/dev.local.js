
var path = require('path');

module.exports = {

    port: process.env.PORT || 8000,
    hostname: 'localhost',
    get fullHostname() {
        return `${this.hostname}:${this.port}`;
    },

    // main database
    postgres: {
        host: 'localhost',
        port: 5432,
        database: 'baseapp',
        user: 'postgres',
        password: '',
        get connectionUri() {
            return `postgres://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`;
        },
    },

    // put knexfile config here because we don't want to accidentally publish database credentials on git
    knex: {
        client: 'postgresql',
        connection: {
            database: 'baseapp',
            user: 'postgres',
            password: '',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    // dir
    appDir: path.join(__dirname, '..'),
    uploadDir: path.join(__dirname, '..', '/assets/upload'),

    // locale
    i18n: {
        defaultLocale: 'en_US',
    },

    // swig
    swig: {
        cache: 'memory',
    },

    // nodemailer
    emailer: {
        service: 'emailService',
        user: 'username',
        pass: 'password',
    },

    cookie: {
        secret: 'thisisnotsecret',
    },
};
