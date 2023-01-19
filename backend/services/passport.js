const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJWT } = require("passport-jwt");
const bcrypt = require("bcrypt");
const models = require("../src/models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (formMail, formPassword, done) => {
      try {
        models.user.findByMail(formMail).then(([result]) => {
          if (!result.length) {
            return done(null, false, { msg: "Wrong username" });
          }
          const user = result[0];
          const isPasswordOk = bcrypt.compareSync(formPassword, user.password);
          if (!isPasswordOk) {
            return done(null, false, { msg: "Wrong password" });
          }
          delete user.password;
          return done(null, user);
        });
      } catch (err) {
        console.error(err);
        return done(err);
      }
      return null;
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
