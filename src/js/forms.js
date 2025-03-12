console.log("ficheros forms");

const resetBtn = document.querySelector(".js-reset-btn");

// Constantes de Design & Complete //
const userNamelist = document.querySelector(".js-name-forms");
const userListName = document.querySelector(".js-list-name");
const listTitle = document.querySelector(".js-list-movies-title");
const userProfilePhoto = document.querySelector(".js__profile-image");

const firstMovie = document.querySelector(".js-first-movie");
const secondMovie = document.querySelector(".js-second-movie");
const thirdMovie = document.querySelector(".js-third-movie");

// Constantes de Preview //

const namePreview = document.querySelector(".js-name-preview");
const cardListTitle = document.querySelector(".js-card-list-title");
const firstMoviePreview = document.querySelector(".js-peli1");
const secondMoviePreview = document.querySelector(".js-peli2");
const thirdMoviePreview = document.querySelector(".js-peli3");
const userPhotoPreview = document.querySelector(".js-user-photo");


// Objeto para enviar info al servidor //


const FormData = {
    field1: 0,
    field2:"",
    field3:"",
    field4:"",
    field5:"",
    field6:"",
    photo: ""
};



// Función para pintar nombre de usuario y nombre de lista //

const inputsFormDesign = document.querySelector(".js-forms-design");
inputsFormDesign.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.id === "name") {
        namePreview.innerHTML = event.target.value;
        FormData.field2 = event.target.value;
    } else if (event.target.id === "list") {
        listTitle.innerHTML = event.target.value;
        FormData.field3 = event.target.value;
    }
})
/* ------SE PUEDE BORRAR------
 const handleForms = (event) => {
    if (event.target.id === "name") {
        namePreview.innerHTML = event.target.value;
        FormData.field2 = event.target.value;
    } else if (event.target.id === "list") {
        listTitle.innerHTML = event.target.value;
        FormData.field3 = event.target.value;
    }
}; 
 inputsFormDesign.addEventListener("input", handleForms);  */

// Función para pintar los títulos de las pelis //

firstMovie.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.value === "") {
        firstMoviePreview.innerHTML = "1: peli 1";        
    } else {
        firstMoviePreview.innerHTML = event.target.value;
        FormData.field4 = event.target.value;
    }
});

secondMovie.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.value === "") {
        secondMoviePreview.innerHTML = "2: peli 2";        
    } else {
        secondMoviePreview.innerHTML = event.target.value;
        FormData.field5 = event.target.value;
    }
});

thirdMovie.addEventListener("input", (event) => {
    if (event.target.value === "") {
        thirdMoviePreview.innerHTML = "3: peli 3";        
    } else {
        thirdMoviePreview.innerHTML = event.target.value;
        FormData.field6 = event.target.value;
    }
});

// Constante y Funcion poner genero en la preview y Pintar fondo de pelicula en card al elegeri genero

const terrorGenre = document.querySelector(".js-terror-movie");
const romanticGenre = document.querySelector(".js-romantic-movie");
const fictionGenre = document.querySelector("js-fiction-movie");
const genrePreview = document.querySelector(".js-movie-category");
const inputsGenre = document.querySelector(".js-genre");
const movieBackground = document.querySelector(".js-movie-background");

const handleGenres = (event) => {
    const genreValue = parseInt(event.target.value);
    FormData.field1 = event.target.value;
    if (genreValue === 1) {
        genrePreview.innerHTML = "Terror";
        movieBackground.classList.add("terrorbg");
        movieBackground.classList.remove("fictionbg");
        movieBackground.classList.remove("romancebg");
    } else if (genreValue === 2) {
        genrePreview.innerHTML = "Ficción";
        movieBackground.classList.add("fictionbg");
        movieBackground.classList.remove("romancebg");
        movieBackground.classList.remove("terrorbg");
    } else if (genreValue === 3) {
        genrePreview.innerHTML = "Romántica";
        movieBackground.classList.add("romancebg");
        movieBackground.classList.remove("fictionbg");
        movieBackground.classList.remove("terrorbg");
    } else genrePreview.innerHTML = "";
};

inputsGenre.addEventListener("input", handleGenres);

// BOTON CREAR LISTA

const btnCreate = document.querySelector(".js-btn-create");
const linkCard = document.querySelector(".js-link-created");
const socialMedia = document.querySelector(".js-social-media");

/* const handleCreateList = (e) => {
    e.preventDefault();
    socialMedia.classList.remove("collapsed");
};

btnCreate.addEventListener("click", handleCreateList); */

function handleCreateList(ev) {
    ev.preventDefault();
    socialMedia.classList.remove("collapsed");
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        body: JSON.stringify(FormData),
        headers: {"Content-type": "application/json",},
    })
    .then(response => response.json())
    .then((data) => {
        
         const idCard = data.infoID;
         
        linkCard.classList.remove("hidden");
        linkCard.href = `./card.html?id=${idCard}` 
        

    })
};


btnCreate.addEventListener("click", handleCreateList);

// Boton Reset

const photoTemplate = "/images/user.png";

resetBtn.addEventListener("click", () => {
    namePreview.innerHTML = "Tu nombre";
    genrePreview.innerHTML = "";
    movieBackground.classList.remove("romancebg");
    movieBackground.classList.remove("fictionbg");
    movieBackground.classList.remove("terrorbg");
    firstMoviePreview.innerHTML = "1: peli 1";
    secondMoviePreview.innerHTML = "2: peli 2";
    thirdMoviePreview.innerHTML = "3: peli 3";
    listTitle.innerHTML = "Mis pelis chulas";
    userPhotoPreview.src = photoTemplate;
    userProfilePhoto.src = photoTemplate;
    socialMedia.classList.add("collapsed");
});
