console.log("ficheros forms");

const resetBtn = document.querySelector(".js-reset-btn");






// Objeto para enviar info al servidor //
const FormData =
{
    field1: 0,
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    photo: ""
  }

// Constantes de Design & Complete //
const userNamelist = document.querySelector(".js-name-forms");
const userListName = document.querySelector(".js-list-name");
const listTitle = document.querySelector(".js-list-movies-title");

const firstMovie = document.querySelector(".js-first-movie");
const secondMovie = document.querySelector(".js-second-movie");
const thirdMovie = document.querySelector(".js-third-movie");

// Constantes de Preview //

const namePreview = document.querySelector(".js-name-preview");
const cardListTitle = document.querySelector(".js-card-list-title");
const firstMoviePreview = document.querySelector(".js-peli1");
const secondMoviePreview = document.querySelector(".js-peli2");
const thirdMoviePreview = document.querySelector(".js-peli3");

// Función para pintar nombre de usuario y nombre de lista //

const inputsFormDesign = document.querySelector(".js-forms-design")
const handleForms = (event) => {
    if (event.target.id === "name") {
        namePreview.innerHTML = event.target.value;
        FormData.field2 = event.target.value;
    } else if (event.target.id === "list") {
        listTitle.innerHTML = event.target.value;
        FormData.field3 = event.target.value;
    }
};
inputsFormDesign.addEventListener("input", handleForms);

// Función para pintar los títulos de las pelis //

firstMovie.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.value === "") {
        secondMoviePreview.innerHTML = "1: peli 1"
    } else {secondMoviePreview.innerHTML = event.target.value;}
    
});

secondMovie.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.value === "") {
        secondMoviePreview.innerHTML = "2: peli 2"
    } else {secondMoviePreview.innerHTML = event.target.value;}

});

thirdMovie.addEventListener("input", (event) => {
    if (event.target.value === "") {
        secondMoviePreview.innerHTML = "3: peli 3"
    } else {secondMoviePreview.innerHTML = event.target.value;}
});

const terrorGenre = document.querySelector(".js-terror-movie");
const romanticGenre = document.querySelector(".js-romantic-movie");
const fictionGenre = document.querySelector("js-fiction-movie");
const genrePreview = document.querySelector(".js-movie-category");
const inputsGenre = document.querySelector(".js-genre");


const handleGenres = (event) => {
  
    const genreValue = parseInt(event.target.value)
    if (genreValue === 1) {
        genrePreview.innerHTML = "Terror";
    } else if (genreValue === 2) {
        genrePreview.innerHTML = "Ficción";
    } else if (genreValue === 3) {
        genrePreview.innerHTML = "Romántica";}
    else genrePreview.innerHTML = "";
    };

inputsGenre.addEventListener("input", handleGenres);

const moviePhoto = document.querySelector(".js-photo-forms");
const moviePreview = document.querySelector(".js-movie-image")


const changeBackground = (event) => {
    if (event.target.id === "terror") {
        moviePreview.classList.add("info_terror");
    } else if (event.target.id === "fiction") {
        moviePreview.classList.add("info_fiction");
    } else if (event.target.id === "romantic") {
        moviePreview.classList.add("info_romantic");
       
    }
}

moviePhoto.addEventListener("input", changeBackground);

resetBtn.addEventListener("click", () => {
    namePreview.innerHTML = ("Tu nombre");
    genrePreview.innerHTML = ("");
    firstMoviePreview.innerHTML = ("1: peli 1");
    secondMoviePreview.innerHTML = ("2: peli 2");
    thirdMoviePreview.innerHTML = ("3: peli 3");
    listTitle.innerHTML = ("Mis pelis chulas");

})


// -- //
/*
const inputsFormComplete = document.querySelector(".js-complete-titles");
const handleMovies = (event) => {
    if (event.target.id === "peli1") {
        firstMoviePreview.innerHTML === event.target.value;
    } else if (event.target.id === "peli2") {
        secondMoviePreview.innerHTML === event.target.value;
    } else if (event.target.id === "peli3") {
        thirdMoviePreview.innerHTML === event.target.value;
    }
};

inputsFormComplete.addEventListener("input", handleMovies); 
*/

