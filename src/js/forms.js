console.log("ficheros forms");

const userNamelist = document.querySelector(".js-name-forms");
const namePreview = document.querySelector(".js-name-preview");
const userListName = document.querySelector(".js-list-name");
const listTitle = document.querySelector(".js-list-movies-title"); 

userNamelist.addEventListener("input", (event) => {
event.preventDefault();
namePreview.innerHTML = event.target.value;

}) 

userListName.addEventListener("input", (event) => {
    event.preventDefault();
    listTitle.innerHTML = event.target.value;
})


const firstMovie = document.querySelector(".js-first-movie");
const secondMovie = document.querySelector(".js-second-movie");
const thirdMovie = document.querySelector(".js-third-movie");

const firstMoviePreview = document.querySelector(".js-peli1")
const secondMoviePreview = document.querySelector(".js-peli2")
const thirdMoviePreview = document.querySelector(".js-peli3")

firstMovie.addEventListener("input", (event) => {
    event.preventDefault();
    firstMoviePreview.innerHTML = event.target.value;
});

secondMovie.addEventListener("input", (event) => {
    event.preventDefault();
    secondMoviePreview.innerHTML = event.target.value;
});

thirdMovie.addEventListener("input", (event) => {
    event.preventDefault();
    thirdMoviePreview.innerHTML = event.target.value;
});