export const genData = (profile) => {
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