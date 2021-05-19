const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteDetailsSchema = new Schema({
    username: {
        type: String,
        required:true,
        unique: true
    },
    aboutMe: {
        type: String,
    },
    shortAboutMe: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    }, 
    repos: [{
        name:String,
        url:String,
        description:String,
        image:String
    }],
    resume: {
        type: String,
    }, 
    location: {
        type: String,
    }
})

const WebsiteDetails = mongoose.model('websiteDetails', websiteDetailsSchema);
module.exports = WebsiteDetails;