'use strict'

function onInit() {

    getYData(getSearchTxt())
        .then(renderVideoResults)
        .then(data => {
            const videoId = data.items[0].id.videoId
            renderMainVideo(videoId)
        })

    getWData(getSearchTxt())
        .then(renderWikResults)
}

function renderMainVideo(id) {
    const elMainVideo = document.querySelector('iframe')
    elMainVideo.src = `https://www.youtube.com/embed/${id}`
}


function renderVideoResults(data) {
    const elResult = document.querySelector('.video-results')
    let strHTML = ''


    data.items.forEach(item => {


        strHTML += `
        <article onclick="onCardClick('${item.id.videoId}')" class="video-card">
        <img class="card-img" src="${item.snippet.thumbnails.high.url}">
        <div class="card-info">
        <h3 class="card-title">${item.snippet.title}</h3>
        <p class="card-dis">${item.snippet.description}</p>
        </div>
        </article>
        `
    })


    elResult.innerHTML = strHTML
    return data
}

function renderWikResults(data) {
    const elResult = document.querySelector('.wiki-results')
    let strHTML = ''

    data.query.search.slice(0, 2).forEach(item => {
        strHTML += `
            <article class="card-wik">
            <a href="https://en.wikipedia.org/wiki/${item.title}">${item.title}</a>
            <div>${item.snippet}</div>
            </article>
        `

    })

    elResult.innerHTML = strHTML

}




function onSearchClick(ev) {
    ev.preventDefault()

    const searchValue = document.querySelector('.search.input').value

    getYData(searchValue)
        .then(renderVideoResults)
        .then(data => {
            const videoId = data.items[0].id.videoId
            renderMainVideo(videoId)
        })

    getWData(searchValue)
        .then(renderWikResults)
    // console.log(getData('nba'));


}

function onCardClick(id) {
    renderMainVideo(id)

    const targetElement = document.getElementById('header');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
