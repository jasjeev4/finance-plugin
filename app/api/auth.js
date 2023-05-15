import nextConnect from 'next-connect';
import session from 'express-session';
import passport from 'passport';
import { OAuth2Strategy } from 'passport-oauth2';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

// Passport setup code goes here...

const handler = nextConnect();

handler.use(
  session({
    secret: 'Cc40AWKHjfSRJmyzzURu',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

handler.use(passport.initialize());
handler.use(passport.session());

handler.get(
  '/auth',
  passport.authenticate('oauth2', {
    scope: scope,
  })
);

handler.get(
  '/auth/callback',
  passport.authenticate('oauth2', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    // Successful authentication, redirect to your desired page.
    res.redirect('/');
  }
);

handler.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default handler;