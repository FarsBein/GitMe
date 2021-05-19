const axios = require('axios')
const {fetchImage} = require('./image-scraper')

const filterRepo = (repo) => {
    return {
        name: repo.name,
        url: 'https://github.com/' + repo.full_name,
        description: repo.description,
        image: fetchImage(repo.owner.login,repo.name)
    }
}

const getRepos = async (username) => {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`)
    
    return Array.from(repos).forEach(repo => {
        filterRepo(repo);
    });
}

exports.getRepos = getRepos