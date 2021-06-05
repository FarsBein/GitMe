// default imports
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config() 

// http logger 
const morgan = require('morgan')

// functions
const {getRepos} = require('./config/repo-request')

// import cloudinary to save images and pdf 
// changed my mind not sure if I am going to use it now
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

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
app.use(cors({credentials: true, origin: 'https://admiring-bose-672fd3.netlify.app'}))

//parse json data
app.use(express.json());
app.use(express.urlencoded({extended: true})); // true for any type of data

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, {
    //for the annoying pop ups
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false // for findOneAndUpdate() to not default to  useFindAndModify
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

app.use(morgan('tiny')) // logger

app.get('/', (req,res)=> {
    res.send('WE ARE WORKING FROM HOME')
})

// if (process.env.NODE_ENV = "production"){
//     app.use('/',express.static(path.join(__dirname,'/client/build')))
//     const path = require("path")
//     app.get("*", (req,res) => {
//         res.sendFile(path.resolve(dirname, 'client','build','index.html'))
//     })
// }

// app.use('/',express.static(path.join(__dirname,'/client/build')))

app.use('/auth', authRoutes)

app.use('/edit', editWebsite)

app.get('/profile', async (req, res) => {
    const username = req.user.username
    console.log('profile req.user:',username)
    if (req.user) {
        const websiteDetails = await WebsiteDetails.find({username})
        return res.status(200).send(websiteDetails[0])
    } else {
      return res.status(403).send({ message: 'you are not logged in' })
    }
})

app.get('/profile/repos', async (req, res) => {
    try {
        const username = req.user.username
        if (req.user) {
            const repos = await getRepos(username)
            console.log('/profile/repos repos:',repos)
            const updatedUser = await User.findOneAndUpdate(username,
            {   
                repos: repos,
            },{
                new: true // return the updated post
            })
            return res.status(200).send(repos)
        } else {
        return res.status(403).send({ message: 'you are not logged in' })
        }
    } catch (err) {
            res.json({err: err.message})
    }
})

app.post('/profile', async (req, res) => {
    const username = req.body.username
    console.log('POST profile username:',username)
    try {
        const websiteDetails = await WebsiteDetails.find({username})
        console.log('POST websiteDetails:',websiteDetails[0])
        res.json(websiteDetails[0])
    } catch (err) {
        res.json({err: err.message})
    }
})

app.get('/user', async (req, res) => {
    try {
        if (req.user) {
            console.log('/user req.user:', req.user.username)
            return res.status(200).send(req.user)
        } else {
            return res.status(403).send({ message: 'you are not logged in' })
        }
    } catch (err) {
        res.json({err: err.message})
    }
})

app.use(express.static('./themes'));
app.get('/:username', async (req, res) => {
    res.sendFile(__dirname + '/themes/default.html');
})

// listener 
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
