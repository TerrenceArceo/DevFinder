const avatar = document.getElementById('avatar')

fetch('https://api.github.com/users/octocat')
    .then(res => res.json())
    .then(data => avatar.innerHTML = `
        <img src="${data.avatar_url}" alt="avatar">
    `)