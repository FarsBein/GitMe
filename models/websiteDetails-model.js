var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var websiteDetailsSchema = new Schema({
    username: {
        type: String,
        required:true,
    },
    aboutMe: {
        type: String,
        required:true,
    },
    shortAboutMe: {
        type: String,
        required:true,
    },
    github: {
        type: String,
        required:true,
    },
    linkedin: {
        type: String,
        required:false,
    }, 
    resume: {
        type: String,
        required:false,
    }, 
    location: {
        type: String,
        required:false,
    }
})

const WebsiteDetails = mongoose.model('websiteDetails', websiteDetailsSchema);
module.exports = WebsiteDetails;