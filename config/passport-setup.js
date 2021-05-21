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
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, callBack) => {    
    // check if user is in the database
    User.findOne({ githubId: profile.id }).then( async (currentUser) => {
      // console.log('_json.location:', profile._json.location)
      // if not object create a new one
      if (!currentUser) { 
        const newUser = await new User({
          username: profile.username,
          githubId: profile.id
        }).save()
        
        const repos = await getRepos(profile.username)
        const newWebsiteDetails = await new WebsiteDetails({
          username: profile.username,
          github: profile.profileUrl,
          location: profile._json.location,
          repos: repos,
          linkedin: '',
          aboutMe:'',
          shortAboutMe:''
        }).save()
        
        console.log('newUser:', newUser)
        console.log('newWebsiteDetails:', newWebsiteDetails)
        return callBack(null, newUser); // return to serialize
      } else {
        return callBack(null, currentUser); // return to serialize
      }
    })
    // return profile data
    // return callBack(null, profile);
  }
));