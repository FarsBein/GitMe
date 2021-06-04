console.log(window.location.pathname.slice(1))

const retrieveData = async (username) => {
    const url = 'https://jl9fu2pz4g.execute-api.us-east-2.amazonaws.com/dev/profile'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            username:username
        })
    })
    const profile = await response.json()
    console.log('profile:', profile)

    const data = 
    {
        projects: profile.repos,
        aboutMe: {
            name: profile.name,
            headline: profile.headline,
            description: profile.aboutMe,
            email: profile.email == null ? '' : profile.email
        },
        links: {
            GitHub: profile.github,
            LinkedIn: profile.linkedin,
            Resume: profile.resume
        }
    }
    return data
}

const navbarLinks = (links,aboutMe) => {
    let overlayHtml = ""

    //for the first value in the navbar (your name)
    let navbarHtml = 
    '<li class="nav-item">' +
            aboutMe.name +
    '</li>';
    for (let linkName in links) {

        overlayHtml+=
        '<a href="' + links[linkName] + '">' +
            linkName +
        '</a>';

        navbarHtml+= 
        '<li class="nav-item desktop">' +
            '<a href="' + links[linkName] + '" target="_blank" >' +
                linkName +
            '</a>' +
        '</li>';
    }
    const overlayNavBody = document.querySelector('#overlay-navbar');
    const navbarBody = document.querySelector('#navbar');
    overlayNavBody.innerHTML = overlayHtml;
    navbarBody.innerHTML = navbarHtml;
} 


const aboutMe = (aboutMe) => {
    let html = 
        '<h1>' +
            aboutMe.headline +
        '</h1>' +
        '<p>' +
            aboutMe.description +
        '</p>' +
        '<p>'  +
            '<a href="mailto:' + aboutMe.email + '">'  +
                aboutMe.email +
            '</a>' + 
        '</p>';

    const aboutMeBody = document.querySelector('#aboutMe');
    aboutMeBody.innerHTML = html;
} 


const displayProjects = (projects) => {
    let html = ""
    for (let project of projects) {

        //Build the HTML required to display the cards with the projects.
        html+=
        '<a href="' + project.url + '" target="_blank">' +
            '<div class="card">' +
                '<img src="' + project.image + '" alt="project" >' +
                '<div class="container">' +
                    '<h4><b>' + project.name + '</b></h4>' + 
                    '<p>' + project.description + '</p>' +
                '</div>' +
            '</div>' +
        '</a>';
    }
    const projectsBody = document.querySelector('#projects');
    projectsBody.innerHTML = html;
}   
 
const githubMoreBtn = (links) => {
    let html = 
    '<form style="display: inline" action="' + links.GitHub + '" target="_blank" method="get">' +
        '<button class="button">' +
            'More on Github' +
        '</button>' +
    '</form>';

    const aboutMeBody = document.querySelector('#More-on-Github-btn');
    aboutMeBody.innerHTML = html;
} 


(async () => {
    username = window.location.pathname.slice(1).replace(/\s/g, '')
    let data = await retrieveData(username)
    console.log('data:',data)
    navbarLinks(data.links,data.aboutMe)
    aboutMe(data.aboutMe)
    displayProjects(data.projects)
    githubMoreBtn(data.links)
})()
