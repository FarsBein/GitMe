const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required:true,
    },
    githubId: {
        type: String,
        required:true,
    },
    repos: [{               // it is here because the website repos can change according to what user specifies we need to save all repos somewhere
        name:String,
        url:String,
        description:String,
        image:String
    }]
})

const User = mongoose.model('user', userSchema); // make a new database entry to save userSchema

module.exports = User;