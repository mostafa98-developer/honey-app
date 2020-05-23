const jwtStrategy = require("passport-jwt").Strategy;
const jwtextract = require('passport-jwt').ExtractJwt;
const JWT_SECRET='HGSFKHSDGKHDFGJHG'
const user = require('../models/userModels');

module.exports = (passport) => {
    let config = {};
    config.secretOrKey = JWT_SECRET;
    config.jwtFromRequest = jwtextract.fromAuthHeaderAsBearerToken();
    passport.use(new jwtStrategy(config, async (jwtpayload, done) => {

        try {
            const user = await user.findById(jwtpayload._id);
            if(user){
                return done(null,user);
            } else {
                return done(null,false);
            }
        } catch (err) {
            return done(err);
        }

    }));
}