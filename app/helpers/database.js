'use strict';

const promise = require('bluebird');
const options = {
    promiseLib: promise,
};
const pgp = require('pg-promise')(options);

global.db = pgp(config.postgres);
global.knex = require('knex')(config.knex);
global.bookshelf = require('bookshelf')(knex);
