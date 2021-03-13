const e = require("express");

var items = document.getElementsByClassName('gif-card');

var currentItem

for (const item of items) {
    item.firstElementChild.addEventListener('click', (item) => {
        currentItem = item.target.getAttribute('src')
        document.getElementById('modalbtn').click()
    })
}

document.getElementById('add').addEventListener('click' , (event) => {
    addTofavortie(currentItem)
    event.preventDefault()
})

function addTofavortie(itemSrc) {
    $.ajax({
        type: "post",
        url: "http://localhost:8080/fav/add/" + itemSrc,
        success: function (response) {
            document.getElementById('closeproc').click()
        },
        beforesend: () => {
            document.getElementById('procbtn').click()
        },
        error: (err) => {
            console.error(err);
        }
    });
}