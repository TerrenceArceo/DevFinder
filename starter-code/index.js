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
const btn = document.getElementById('search')
const inputVal = document.querySelector('#input')


const getInfo = (info) => {
    const myDate = new Date(info.created_at)
    const month = myDate.getMonth()
    const year = myDate.getFullYear();
    const day = myDate.getDay();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"]
    

    avatar.innerHTML = `<img src="${info.avatar_url}" alt="avatar">`
    acc_name.textContent = `${info.name}`
    acc_tag.textContent = `@${info.login}`
    acc_date.textContent = `${day} ${months[month]} ${year}`
    bio.textContent = `${info.bio ? info.bio : "This Profile has no bio"}`
    repo.textContent = `${info.public_repos}`
    followers.textContent = `${info.followers}`
    following.textContent = `${info.following}`
    acc_location.innerHTML = `<img src="assets/icon-location.svg" alt="pin" class="links-img"> ${info.location ? info.location : "Not Available"}`
    acc_website.textContent = `${info.blog ? info.blog : "Not Available"}`
    twitter.textContent = `${info.twitter_username ? info.twitter_username : "Not Available"}`
    company.textContent = `${info.company ? info.company : "Not Available"}`
}

fetch('https://api.github.com/users/octocat')
    .then(res => res.json())
    .then(data => getInfo(data))


btn.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${inputVal.value}`)
        .then(res => res.json())
        .then(data =>  {
            console.log(data)
            getInfo(data)
        })
})



