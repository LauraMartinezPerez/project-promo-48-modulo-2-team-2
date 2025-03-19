"use strict";

const createCardBtn = document.querySelector(".js-btn-create");
const linkCard = document.querySelector(".js-link-created");
const linkWhatsapp = document.querySelector(".js-link-whatsapp");

const titleCard = document.querySelector(".js-list-movies-title");
const cardBackground = document.querySelector(".js-movie-background");
const nameCard = document.querySelector(".js-name-preview");
const genreCard = document.querySelector(".js-movie-category");
const movieOneCard = document.querySelector(".js-peli1");
const movieTwoCard = document.querySelector(".js-peli2");
const movieThreeCard = document.querySelector(".js-peli3");
const userPhotoCard = document.querySelector(".js-user-photo");
let idCard = [];
let targetData = []

//Para pintar el genero correctamente en la card.
const getGenre = (genreId) => {
    switch (genreId) {
        case 1:
            return "Terror";
        case 2:
            return "Ficción";
        case 3:
            return "Romance";
    }
};

const getBackground = (genreId) => {
    switch (genreId) {
        case 1:
            return "terrorbg";
        case 2:
            return "fictionbg";
        case 3:
            return "romancebg";
    }
};

const ulrParam = new URLSearchParams(window.location.search);
//ahora me cojo el id:
const id = ulrParam.get("id");


function handleCreateCard(ev) {
    ev.preventDefault();
    // Función para pintar nombre de usuario y nombre de lista //
//endpoint de tipo POST
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST", // si quiero que sea POST, es obligatorio, por default es GET
        body: JSON.stringify(formData), // Los datos que quiero recogger
        headers: { "Content-type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => {
            idCard = data.infoID;
            linkCard.classList.remove("hidden");
            linkCard.href = `./card.html?id=${idCard}`;
            linkWhatsapp.href += encodeURI(linkCard.href);
        });


        fetch(`https://dev.adalab.es/api/info/${idCard}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const targetData = data.data;
        titleCard.innerHTML = targetData.field3;
        nameCard.innerHTML = targetData.field2;
        genreCard.innerHTML = getGenre(targetData.field1);
        cardBackground.classList.add(getBackground(targetData.field1));
        movieOneCard.innerHTML = targetData.field4;
        movieTwoCard.innerHTML = targetData.field5;
        movieThreeCard.innerHTML = targetData.field6;
        userPhotoCard.src = targetData.photo;
        localStorage.setItem("targetData", JSON.stringify(targetData));
    });

}


createCardBtn.addEventListener("click", handleCreateCard);
