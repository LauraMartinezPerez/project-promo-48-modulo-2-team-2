console.log("ficheros forms");

const userNamelist = document.querySelector(".js-name-forms");
const namePreview = document.querySelector(".js-name-preview");
const userListName = document.querySelector(".js-list-name");


userNamelist.addEventListener("input", (event) => {
event.preventDefault();
namePreview.innerHTML = event.target.value;

}) 