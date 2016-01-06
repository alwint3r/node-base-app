'use strict';

// model
global.User = bookshelf.Model.extend({
    tableName: 'users',
});

// collections
global.Users = bookshelf.Collection.extend({
    model: User,
});
