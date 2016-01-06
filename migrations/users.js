'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.bigIncrements('id').primary();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.string('roles').notNullable().defaultTo('user');
        table.string('email').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
