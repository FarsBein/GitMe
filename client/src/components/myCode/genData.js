export const genData = (profile) => {
    const data = 
    {
        projects: profile.repos,
        aboutMe: {
            name: profile.username,
            headline: profile.headline,
            description: profile.aboutMe,
            email: "test@ryerson.ca"
        },
        links: {
            GitHub: profile.github,
            LinkedIn: profile.linkedin,
            Resume: profile.resume
        }
    }
    return data
}