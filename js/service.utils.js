'use strict'

function saveToLocaleStorage(key,arr) {
    console.log(arr);
    
    const arrJSON = JSON.stringify(arr)
    localStorage.setItem(key,arrJSON)
}

function loadFromStorage(key) {
    return  JSON.parse(localStorage.getItem(key))
}
