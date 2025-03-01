console.log("ficheros forms");

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

//RESET
const listTitleContent = listTitle.innerHTML; //cuando se carga guarda el valor original RESET
const btnReset = document.querySelector(".js-btn-reset");


const firstMovie = document.querySelector(".js-first-movie");
const secondMovie = document.querySelector(".js-second-movie");
const thirdMovie = document.querySelector(".js-third-movie");

// Constantes de Preview //

const namePreview = document.querySelector(".js-name-preview");
const firstMoviePreview = document.querySelector(".js-peli1");
const secondMoviePreview = document.querySelector(".js-peli2");
const thirdMoviePreview = document.querySelector(".js-peli3");

//RESET
const nameContent = namePreview.innerHTML;
const firstMovieContent = firstMoviePreview.innerHTML;
const secondMovieContent = secondMoviePreview.innerHTML;
const thirdMovieContent = thirdMoviePreview.innerHTML;

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

const terrorGenre = document.querySelector(".js-terror-movie");
const romanticGenre = document.querySelector(".js-romantic-movie");
const fictionGenre = document.querySelector("js-fiction-movie");
const genrePreview = document.querySelector(".js-movie-category");
const inputsGenre = document.querySelector(".js-genre");

//RESET
const genreContent = genrePreview.innerHTML;


const handleGenres = (event) => {
    const genreValue = parseInt(event.target.value)
    if (genreValue === 1) {
        genrePreview.innerHTML = "Terror";
    } else if (genreValue === 2) {
        genrePreview.innerHTML = "Ficción";
    } else if (genreValue === 3) {
        genrePreview.innerHTML = "Romántica";
        
    }
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

//RESET 

const resetCard = () => {
    listTitle.innerHTML = listTitleContent; //vuelve al contenido original
    genrePreview.innerHTML = genreContent;
    firstMoviePreview.innerHTML = firstMovieContent;
    secondMoviePreview.innerHTML = secondMovieContent;
    thirdMoviePreview.innerHTML = thirdMovieContent;
    namePreview.innerHTML = nameContent;
}

btnReset.addEventListener("click", resetCard)

