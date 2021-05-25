const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteDetailsSchema = new Schema({
    username: {
        type: String,
        required:true,
        unique: true,
        lowercase: true
    },
    aboutMe: {
        type: String,
    },
    headline: {
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