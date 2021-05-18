const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/user-model')
require('dotenv').config() 

// console.log(process.env.GITHUB_CLIENT_ID)


passport.use(
    new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, callBack) => {    
    // check if user is in the database
    User.findOne({ githubId: profile.id }).then((currentUser) => {
      // if not object create a new one
      if (!currentUser) {
        new User({
          username: profile.username,
          githubId: profile.id
        }).save()
      } 
    })

    // return profile data
    return callBack(null, profile);
  }
));