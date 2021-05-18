var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required:true,
    },
    githubId: {
        type: String,
        required:true,
    },
})

const User = mongoose.model('user', userSchema); // make a new database entry to save userSchema

module.exports = User;