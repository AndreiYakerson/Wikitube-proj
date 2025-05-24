'use strict'

function saveToLocaleStorage(key,arr) {
    localStorage.setItem(key,JSON.stringify(arr))
}

function loadFromStorage(key) {
    return  JSON.parse(localStorage.getItem(key))
}
