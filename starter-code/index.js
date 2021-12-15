const avatar = document.getElementById('avatar')
const acc_name = document.getElementById('name')
const acc_tag = document.getElementById('tag')
const acc_date = document.getElementById('date-info')
const bio = document.getElementById('bio')
const repo = document.getElementById('repo-num')
const followers = document.getElementById('follower-num')
const following = document.getElementById('following-num')
const acc_location = document.getElementById('location')
const acc_website = document.getElementById('personal-website')
const twitter = document.getElementById('twitter')
const company = document.getElementById('company')

fetch('https://api.github.com/users/bigdinotech')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const myDate = new Date(data.created_at)
        const month = myDate.getMonth()
        const year = myDate.getFullYear();
        const day = myDate.getDay();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
        "September", "October", "November", "December"]
        

        avatar.innerHTML = `<img src="${data.avatar_url}" alt="avatar">`
        acc_name.textContent = `${data.name}`
        acc_tag.textContent = `${data.blog}`
        acc_date.textContent = `${day} ${months[month]} ${year}`
        bio.textContent = `${data.bio ? data.bio : "This Profile has no bio"}`
        repo.textContent = `${data.public_repos}`
        followers.textContent = `${data.followers}`
        following.textContent = `${data.following}`
        acc_location.textContent = `${data.location ? data.location : "Not Available"}`
        acc_website.textContent = `${data.blog ? data.blog : "Not Available"}`
        twitter.textContent = `${data.twitter_username ? data.twitter_username : "Not Available"}`
        company.textContent = `${data.company ? data.company : "Not Available"}`
    })
