const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;

const User = require('../models/user-model')
const WebsiteDetails = require('../models/websiteDetails-model')

const {getRepos} = require('./repo-request')

require('dotenv').config() 


passport.use(
    new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://git-me-to.herokuapp.com/auth/github/callback",
    scope: [ 'user:email' ], // fetches non-public emails as well (Doesn't work)
  },
  (accessToken, refreshToken, profile, callBack) => {
    // check if user is in the database
    User.findOne({ githubId: profile.id }).then( async (currentUser) => {
      
      // if not object create a new one
      if (!currentUser) { 
        const repos = await getRepos(profile.username)

        const newUser = await new User({
          username: profile.username,
          githubId: profile.id,
          repos
        }).save()
        
        const newWebsiteDetails = await new WebsiteDetails({
          username: profile.username,
          name:  profile._json.name,
          email:  profile._json.email,
          github: profile.profileUrl,
          location: profile._json.location,
          repos: repos,
          linkedin: '',
          aboutMe:'',
          headline:''
        }).save()
        
        console.log('profile._json.name:', profile._json.name)
        console.log('profile._json.email:', profile._json.email)
        // console.log('newWebsiteDetails:', newWebsiteDetails)
        return callBack(null, newUser); // return to serialize
      } else {
        return callBack(null, currentUser)
      }
    })
  }
));