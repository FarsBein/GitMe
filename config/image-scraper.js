const axios = require('axios')
const {parse} = require('node-html-parser')

const images = 'https://opengraph.githubassets.com/1d021b97f3fc09942b58e93fc6a5f67f72a16293e679eb979fdd4d29353891de/FarsBein/GitMe' //for now

const fetchImage = async (user,repo) => {
    const url = `https://github.com/${user}/${repo}`
    try {
        const page = await axios.get(url) //get all the details about the page
        const data = page.data            //get the html of the page that is saved in data
        const parsed = parse(data)        //Translate the data into dictionaries instead of staying as strings
        const meta = parsed.querySelectorAll('meta')                     // get all keys with meta tag
            .filter((acc) => acc.getAttribute("property") == 'og:image') // get only the one with property == 'og:image' (where social preview is saved)
        const imageLink = meta[0]['_attrs']['content']                  // get the content which contains the url                                     
        return imageLink
    } catch (err) {
        return images
    }

}

exports.fetchImage = fetchImage