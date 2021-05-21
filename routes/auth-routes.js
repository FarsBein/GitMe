const express = require('express')
const router = express.Router()
const passport = require('passport')


// check if user is logged in 
const isLoggedin = function (req,res,next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/login');
    }
}  

router.get('/isLoggedin', (req, res) => {
    if (req.user) {
        console.log('req.user:',true)
        res.send('true');
    } else {
        console.log('req.user:',false)
        res.send('');
    }
});

// steps to take when authenticating user

// 1 make the call to github 
router.get('/github', passport.authenticate('github'));

// 2 receive and handle the response after github authenticating user
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/auth/login' }), //was "/auth/error"
    (req, res) => {
        console.log('successfully logged in')
        res.redirect('http://localhost:3000/dashboard'); //was "/auth/pass"
});

// 3 handle error in connection
router.get('/error', (req, res) => res.send('Unknown Error'));

// 4 handle successful connection
router.get('/pass', (req, res) => res.send('SUCCESSFUL'));



//for testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.get('/dashboard', isLoggedin, (req,res)=> {
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
    console.log('successfully logged out')
    res.redirect('http://localhost:3000');
});
//for testing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



module.exports = router