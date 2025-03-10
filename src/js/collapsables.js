
const designTitle = document.querySelector(".js-design-title");
const designForm = document.querySelector(".js-design-form");
const fillTitle = document.querySelector(".js-fill-title");
const fillForm = document.querySelector(".js-fill-form");
const shareTitle = document.querySelector(".js-share-title");
const shareForm = document.querySelector(".js-share-form"); 

/* //Mostrar form design
function showFormDesign () {
    hideFormFill();
    hideFormShare();
    designForm.classList.remove("collapsed");
}
//Ocultar form Design
function hideFormDesign () {
    designForm.classList.add("collapsed");
}
//Mostrar form fill
function showFormFill () {
    hideFormDesign ();
    hideFormShare ();
    fillForm.classList.remove("collapsed");
}
//Ocultar form fill
function hideFormFill () {
    fillForm.classList.add("collapsed");
}
//Mostrar form share
function showFormShare () {
    hideFormDesign ();
    hideFormFill();
    shareForm.classList.remove("collapsed");
}
//Ocultar form share
function hideFormShare () {
    shareForm.classList.add("collapsed");
}

const collapsableHeaders = document.querySelectorAll(".js-design-header");

const handleClick = (event) => {
    if (event.currentTarget.classList.contains("js-design-title")) {
        showFormDesign ()
    } else if (event.currentTarget.classList.contains("js-fill-title")) {
        showFormFill ()
    } else {showFormShare ()}
    
}
for (const title of collapsableHeaders) {
    title.addEventListener("click", handleClick);
} */

//Mostrar form design
function showFormDesign () {
    hideFormFill();
    hideFormShare();
    designForm.classList.toggle("collapsed");
}
//Ocultar form Design
function hideFormDesign () {
    designForm.classList.add("collapsed");
}
//Mostrar form fill
function showFormFill () {
    hideFormDesign ();
    hideFormShare ();
    fillForm.classList.toggle("collapsed");
}
//Ocultar form fill
function hideFormFill () {
    fillForm.classList.add("collapsed");
}
//Mostrar form share
function showFormShare () {
    hideFormDesign ();
    hideFormFill();
    shareForm.classList.toggle("collapsed");
}
//Ocultar form share
function hideFormShare () {
    shareForm.classList.add("collapsed");
}

const collapsableHeaders = document.querySelectorAll(".js-design-header");

const handleClick = (event) => {
    if (event.currentTarget.classList.contains("js-design-title")) {
        showFormDesign ()
    } else if (event.currentTarget.classList.contains("js-fill-title")) {
        showFormFill ()
    } else {showFormShare ()}
    
}
for (const title of collapsableHeaders) {
    title.addEventListener("click", handleClick);
}


