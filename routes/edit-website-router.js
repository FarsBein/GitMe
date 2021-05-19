const express = require('express')
const router = express.Router()

const WebsiteDetails = require('../models/websiteDetails-model')

// check if user is logged in 
const isLoggedin = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/login');
    }
}  

router.post('/linkedin', isLoggedin, (req,res) => {
    const linkedin = req.body.linkedin
})

router.post('/about-me', isLoggedin, (req,res) => {

})