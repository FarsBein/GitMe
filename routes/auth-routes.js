const express = require('express')
const router = express.Router()
const passport = require('passport')


// check if user is logged in 
const isLoggedin = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/login');
    }
}  

// steps to take when authenticating user

// 1 make the call to github 
router.get('/github', passport.authenticate('github')) 

// 2 receive and handle the response
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/auth/login' }), //was "/auth/error"
  (req, res) => {
    res.redirect('/auth/dashboard'); //was "/auth/pass"
});

// 3 handle error in connection
router.get('/error', (req, res) => res.send('Unknown Error'))

// 4 handle successful connection
router.get('/pass', (req, res) => res.send('SUCCESSFUL'))

//for testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.get('/dashboard', isLoggedin, (req,res)=> {
    console.log(req.user)
    res.sendFile(__dirname + '/dashboard.html');
})

router.get('/login', (req,res)=> {
    if (req.user) {
        res.redirect('/auth/dashboard');
    } else {
        res.sendFile(__dirname + '/login.html');
    }
})

router.get('/logout', isLoggedin, (req, res) => {
    req.logOut();
    res.redirect('/auth/login');
});
//for testing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = router