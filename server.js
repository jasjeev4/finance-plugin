const express = require('express');
const next = require('next');
const passport = require('passport');
const session = require('express-session');
const OAuth2Strategy = require('passport-oauth2');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const {
  authorization_url,
  client_url,
  scope,
  verification_tokens,
} = require('./app/api/weather/manifest.json').auth;

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: authorization_url,
      tokenURL: client_url,
      clientID: 'your_client_id',
      clientSecret: verification_tokens.openai,
      callbackURL: 'your_callback_url',
    },
    function (accessToken, refreshToken, profile, cb) {
      // Handle user authentication and store user data as needed
      cb(null, { accessToken, refreshToken, profile });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

nextApp.prepare().then(() => {
  const app = express();

  app.use(
    session({
      secret: 'your_session_secret',
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    '/auth',
    passport.authenticate('oauth2', {
      scope: scope,
    })
  );

  app.get(
    '/auth/callback',
    passport.authenticate('oauth2', {
      failureRedirect: '/login',
    }),
    function (req, res) {
      // Successful authentication, redirect to your desired page.
      res.redirect('/');
    }
  );

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
