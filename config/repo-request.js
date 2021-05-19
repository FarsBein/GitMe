const axios = require('axios')
const {fetchImage} = require('./image-scraper')

const filterRepo = async (repo) => {
    return  {
        name: repo.name,
        url: 'https://github.com/' + repo.full_name,
        description: repo.description || 'change description in your repository',
        image: await fetchImage(repo.owner.login,repo.name)
    }
}

const getRepos = async (username) => {
    const filteredRepos = []

    // A list of all public repositories
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`) 
    
    // change the repository array formate
    for (let i=0; i < repos.data.length; i++){
        const filteredRepo = await filterRepo(repos.data[i])
        filteredRepos.push(filteredRepo);
    }
    return filteredRepos;
}

exports.getRepos = getRepos