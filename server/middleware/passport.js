const GitHubStrategy = require("passport-github").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const passport = require('passport')
const GITHUBUSER = require('../models/githubuser')
//mongoose config
mongoose.set('useCreateIndex', true);




passport.use(
    new GitHubStrategy({
            clientID: keys.github.id,
            clientSecret:  keys.github.clientSecret,
            callbackURL: keys.github.redirectUrl
        },
        (accessToken, refreshToken, profile, done) => {
            GITHUBUSER.findOne({ gitHubId: profile._json.id }).then(user => {
                if (user) {
                    return done(null, user);
                } else {
                    GITHUBUSER.findOne({ username: profile._json.login }).then(usr => {
                        if (usr) {
                            usr.gitHubId = profile._json.id;
                            usr.save().then(u => {
                                return done(null, u);
                            });
                        } else {
                            const newUser = new GITHUBUSER({
                                username: profile._json.login,
                                email: profile._json.email,
                                gitHubId: profile._json.id,
                                image: profile._json.avatar_url
                            });
                            newUser.save().then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                        }
                    });
                }
            });
        }
    )
);
