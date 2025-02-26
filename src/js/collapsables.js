console.log("fichero colapsables");

const userName = document.querySelector(".js-name");
const listName = document.querySelector("js-list-name");
const img = document.querySelector("js-img");

const designTitle = document.querySelector(".js-design-title");
const designForm = document.querySelector(".js-design-form");

function showAndHiddenForm() {    
    designForm.classList.toggle("collapsed");
}

designTitle.addEventListener("click", (event) => {
    event.preventDefault();
    showAndHiddenForm();
})


