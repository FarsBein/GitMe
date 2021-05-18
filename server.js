const express = require('express');
const cors = require('cors')
const authRoutes = require("./routes/auth-routes")
require('dotenv').config() 

// passport 
const passport = require('passport')
const session = require('express-session')
const passportSetup = require('./config/passport-setup')


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

app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:true,                  // means to not save session on browser only on server
        secure: false,                  // only bc I am testing it on my local env change to true latter
        maxAge: 2 * 24 * 60 * 60 * 1000 // two day (first number is days)
    }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, callBack) {
    callBack(null, user.id) // id from my database can be found as "_id"
})
passport.deserializeUser(function (id, callBack) {
    // check if the id is a real user in my database. If yes retrieve user data
    // User.findById((id)).then((user) => {
    //     callBack(null, user)
    // }) //it is async and returns a promise so it will wait 
    callBack(null, id)
})

// routes 
app.get('/', (req,res)=> {
    res.status(200).send('WE ARE WORKING FROM HOME!')
})

app.use('/auth', authRoutes)

// listener 
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));