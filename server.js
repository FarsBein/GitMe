const express = require('express');
require('dotenv').config() 
var cors = require('cors')

//set up ports 
const app = express();
const PORT = process.env.PORT || 8000;

//allow external requests
app.use(cors()) 

//parse json data
app.use(express.json());
app.use(express.urlencoded({extended: true})); // true for any type of data

//connect to mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true // to avoid annoying pop ups asking for upgrade
}, (err) => {
    if (err) throw err
    console.log('MongoDB connection is established')
})

//Github OAuth (checked out https://www.npmjs.com/package/passport-github)
const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport')
const session = require('express-session')
const Auth = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/login');
    }
}  

app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:true, // don't save on browser only on server
        secure: false, // only bc I am testing it on my local env change to true latter
        maxAge: 2 * 24 * 60 * 60 * 1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, cb) {
    cb(null, user.id)
})
passport.deserializeUser(function (id, cb) {
    cb(null, id)
})

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // for mongodb 
    // User.findOrCreate({ githubId: profile.id }, 
    //     function (err, user) {
    //         return cb(err, user);
    //     }
    // );
    // console.log('profile:',profile);
    return cb(null, profile);
  }
));

// steps to take when authenticating user

// 1 make the call to github 
app.get('/auth/github', passport.authenticate('github')) 

// 2 receive and handle the response
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/auth/error' }), //was "/login"
  (req, res) => {
    res.redirect('/auth/pass'); //was "/dashboard"
});

// 3 handle error in connection
app.get('/auth/error', (req, res) => res.send('Unknown Error'))

// 4 handle successful connection
app.get('/auth/pass', (req, res) => res.send('SUCCESSFUL'))

// route 
app.get('/', (req,res)=> {
    res.status(200).send('WE ARE WORKING FROM HOME!')
})

//for testing <<<
app.get('/dashboard', Auth, (req,res)=> {
    console.log(req.user)
    res.sendFile(__dirname + '/dashboard.html');
})

app.get('/login', (req,res)=> {
    if (req.user) {
        res.redirect('/dashboard');
    } else {
        res.sendFile(__dirname + '/login.html');
    }
})

app.get('/logout', Auth, (req, res) => {
    req.logOut();
    res.redirect('/login');
});
//for testing >>>

// listener 
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));