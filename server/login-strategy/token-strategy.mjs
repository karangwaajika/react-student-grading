import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "../models/user.mjs";
import dotenv from "dotenv";
dotenv.config();

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrPrivateKey;

passport.use(
  new Strategy(opts, function (jwt_payload, done) { //payload info from the creation of token with id key

    User.findOne({_id: jwt_payload.id}).then(user=>{
        
        return done(null, user); // return user object when no error

    }).catch(err =>{
        return done(err, null);
    })
            
      
  })
);
