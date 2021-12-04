const html = document.getElementById('github-info')

fetch('https://api.github.com/users/TerrenceArceo')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        html.innerHTML = `
            <a href="${data.html_url}" target="_blank">URL</a>
        `
    })

