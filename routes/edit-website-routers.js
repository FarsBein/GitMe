const express = require('express')
const router = express.Router()

const WebsiteDetails = require('../models/websiteDetails-model')

// check if user is logged in 
const isLoggedin = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('http://localhost:8000/auth/login');
    }
}  

router.post('/linkedin', isLoggedin, (req,res) => {
    const linkedin = req.body.linkedin
    console.log('req.user:',req.user)
    // console.log('received linkedin:',linkedin)
    res.send(linkedin)
})

router.post('/about-me', (req,res) => {
    const aboutMe = req.body.aboutMe
    const headline = req.body.headline
    console.log('received about-me:',aboutMe, "and", headline)
    res.send(headline)
})

router.post('/repos', (req,res) => {
    const repos = req.body.repos
    console.log('received repos:',repos)
    res.send(repos)
})

module.exports = router