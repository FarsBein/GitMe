// default imports
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config() 

// db models import
const User = require('./models/user-model')
const WebsiteDetails = require('./models/websiteDetails-model')

// passport imports
const passport = require('passport')
const session = require('express-session')
const passportSetup = require('./config/passport-setup')

// routes import 
const authRoutes = require("./routes/auth-routes")
const editWebsite = require("./routes/edit-website-routers")

//set up ports 
const app = express();
const PORT = process.env.PORT || 8000;

//allow external requests CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//parse json data
app.use(express.json());
app.use(express.urlencoded({extended: true})); // true for any type of data

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, {
    //for the annoying pop ups
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) throw err
    console.log('MongoDB connection is established')
})

//Github OAuth (checked out https://www.npmjs.com/package/passport-github)
app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:true,                  // means to not save session on browser only on server
        secure: false,                  // only bc I am testing it on my local env change to true later
        maxAge: 2 * 24 * 60 * 60 * 1000 // two days (first number is days)
    }
}))

// Passport 
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, callBack) {
    callBack(null, user.id) // id from my database can be found as "_id"
})
passport.deserializeUser(function (id, callBack) {
    // check if the id is a real user in my database. If yes retrieve user data
    User.findById((id)).then((user) => {
        callBack(null, user);
    })  
})

// routes 
app.get('/', (req,res)=> {
    res.send('WE ARE WORKING FROM HOME')
})

app.use('/auth', authRoutes)

app.use('/edit', editWebsite)

app.get('/profile', (req, res) => {
    if (req.user) {
        WebsiteDetails.find({ username: req.user.username }).then(
            (user) => {
                return res.status(200).send(user[0])
        })
    } else {
      return res.status(403).send({ message: 'you are not logged in' })
    }
})

// listener 
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));