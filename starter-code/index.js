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
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#light-dark')


const enableDarkMode = () => {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    document.body.classList.add('dark-mode')

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.getElementById('sun').style.display = 'none';
    document.getElementById('moon').style.display = 'block';
    document.body.classList.remove('dark-mode')

    localStorage.setItem('darkMode', null)
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})


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

    acc_website.innerHTML = `<p class="personal-website"><img src="assets/icon-website.svg" alt="link icon" class="links-img"><a href="${info.blog}" id="personal-website">${info.blog ? info.blog : "Not Available"}</a></p>`

    twitter.innerHTML = `<p class="twitter"><img src="assets/icon-twitter.svg" alt="twitter" class="links-img"><a href="${info.twitter_username}" id="twitter">${info.twitter_username ? info.twitter_username : "Not Available"}</a></p>`

    company.innerHTML = `<p class="company"><img src="assets/icon-company.svg" alt="building icon" class="links-img"><a href="${info.company}" id="company">${info.company ? info.company : "Not Available"}</a></p>`
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
            if (data.message === 'Not Found') {
                inputVal.style.color = 'red'
                inputVal.style.textAlign = 'right'
                inputVal.value = "Not Found"
                return false
            }else {
                getInfo(data)
            }
        })
})

inputVal.addEventListener('click', () => {
    inputVal.style.color = '#697c9a'
    inputVal.style.textAlign = 'left'
    inputVal.value = 'Search GitHub username...'
})