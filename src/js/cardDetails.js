"use strict";

const nameCard = document.querySelector(".js-name-preview");

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

fetch(`https://dev.adalab.es/api/info/${id}`)
.then (response => {response.json()})
.then (data => {
    console.log(data);
})