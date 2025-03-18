"use strict";

/* 
1) Recoger el id de la tarjeta de la url de la pagina
2) Hacer una peticion al servidor para conseguir los datos de la tarjeta con el id de la tarjeta    
    - guardo los datos de la tarjeta
    - introduzco esos datos en el html de la tarjeta
*/

const titleCard = document.querySelector(".js-list-movies-title");
const nameCard = document.querySelector(".js-name-preview");
const genreCard = document.querySelector(".js-movie-category");
const movieOneCard = document.querySelector(".js-peli1");
const movieTwoCard = document.querySelector(".js-peli2");
const movieThreeCard = document.querySelector(".js-peli3");
const userPhotoCard = document.querySelector(".js-user-photo");

//Para coger la info de la url de una pagina:

//me creo una variable:
 const ulrParam = new URLSearchParams(window.location.search);
 //ahora me cojo el id:
 const id = ulrParam.get("id");

fetch(`https://dev.adalab.es/api/info/${id}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
    const targetData = data.data;
    titleCard.innerHTML = targetData.field3
    nameCard.innerHTML = targetData.field2
    genreCard.innerHTML = targetData.field1
    movieOneCard.innerHTML = targetData.field4
    movieTwoCard.innerHTML = targetData.field5
    movieThreeCard.innerHTML = targetData.field6
    userPhotoCard.src = targetData.photo
})
