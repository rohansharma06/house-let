const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const Seller = require("../models/seller");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "rentingwebsite",
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    Seller.findById(jwtPayLoad._id, function (err, seller) {
      if (err) {
        console.log("Error in finding Sellor!");
        return;
      }

      if (seller) {
        return done(null, seller);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
