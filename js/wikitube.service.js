'use strict'

const API_KEY = 'AIzaSyCwAaZlWvcszKEQu8xzVVyHMNehdeaw7pw'
let searchTxt = 'css grid'


//GET FUNCTIONS

function getYData(searchTxt) {
    let gData = loadFromStorage(searchTxt) || null

    if (gData) {
        console.log('FROM CASH!');
        return Promise.resolve(gData)
    }

    const tubeAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchTxt}`

    return fetch(tubeAPI)
        .then(res => res.json())
        .then(data => {
            saveToLocaleStorage(searchTxt, data)
            return data
        })

}

function getWData(searchTxt) {
    const wikiAPI = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchTxt}&format=json`

    return fetch(wikiAPI)
        .then(res => res.json())
}

function getSearchTxt() {
    return searchTxt
}

//CHANGE FUNCTIONS

function changeSearchTxt(txt) {
    searchTxt = txt
}
