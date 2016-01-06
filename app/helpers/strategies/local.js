
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');

passport.use(new LocalStrategy(Async.make(function *(username, password, done) {
    const user = yield User.where({ username }).fetch().catch(console.error);

    if (!user) return done(null, false, { message: 'User is not found' });

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    if (hashedPassword !== user.attributes.password) return done(null, false, { message: 'Incorrect password' });

    return done(null, user.toJSON());
})));
