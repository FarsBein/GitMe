const express = require('express')
const router = express.Router()

const WebsiteDetails = require('../models/websiteDetails-model')
const User = require('../models/user-model')

// check if user is logged in 
const isLoggedin = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('http://localhost:8000/auth/login');
    }
}  

router.post('/linkedin', isLoggedin, async (req,res) => {
    try {
        const linkedin = req.body.linkedin
        const username = req.user.username
        console.log('received linkedin:',linkedin)
        const updatedUser = await WebsiteDetails.findOneAndUpdate(username,
            {   
                linkedin: `https://www.linkedin.com/in/${linkedin}/`
            },{
                new: true // return the updated post
            })
        
        res.json(updatedUser)
    } catch (err) {
        res.json({err: err.message})
    }
})

router.post('/about-me', async (req,res) => {
    try {
        const aboutMe = req.body.aboutMe
        const headline = req.body.headline
        const username = req.user.username
        console.log('received about-me: <',aboutMe, "> and <", headline,">")
        const updatedUser = await WebsiteDetails.findOneAndUpdate(username,
            {   
                aboutMe,
                headline,
            },{
                new: true // return the updated post
            })
        
        res.json(updatedUser)
    } catch (err) {
        res.json({err: err.message})
    }
})

const findReposByUrl = (reposUrl) => {

}

router.post('/repos', async (req,res) => {
    try {
        const reposUrl = req.body.reposUrl
        const username = req.user.username
        const profile = await User.findOne({username})
        console.log('received reposUrl:',reposUrl)
        if (reposUrl == 'all') { 
            const updatedUser = await WebsiteDetails.findOneAndUpdate(username,
                {   
                    repos: profile.repos
                },{
                    new: true // return the updated user
            })
            res.json(updatedUser)
        } else {
            const updatedUser = await WebsiteDetails.findOneAndUpdate(username,
                {   
                    repos: profile.repos.filter((repo) => {
                        return reposUrl.includes(repo.url)
                    })
                },{
                    new: true // return the updated user
            })
            res.json(updatedUser)
        }
    } catch (err) {
        res.json({err: err.message})
    }
})

module.exports = router