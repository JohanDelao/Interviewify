const GoogleStrategy = require('passport-google-oauth20');
const passport = require('passport');
const dotenv = require('dotenv');
const User = require('./Models/userModel');

dotenv.config()

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: ['profile', 'email']
  },
    async (_accessToken, _refreshToken, profile, done) => {
      const user = await User.findById(profile.id);
      if (user) return done(null, user);
      else {
        const newUser = await User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          _id: profile.id,
        });
        console.log(newUser)
        return done(null, newUser);
      }
    }

  )

);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})