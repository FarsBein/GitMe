const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config() 

// console.log(process.env.GITHUB_CLIENT_ID)


passport.use(
    new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, callBack) {
    // for mongodb 
    // User.findOrCreate({ githubId: profile.id }, 
    //     function (err, user) {
    //         return callBack(err, user);
    //     }
    // );
    // console.log('profile:',profile);
    return callBack(null, profile);
  }
));