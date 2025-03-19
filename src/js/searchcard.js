"use strict";

const createCardBtn = document.querySelector(".js-btn-create");
const linkCard = document.querySelector(".js-link-created");
const linkWhatsapp = document.querySelector(".js-link-whatsapp");

function handleCreateCard (ev) {
    ev.preventDefault();
    // Función para pintar nombre de usuario y nombre de lista //
//endpoint de tipo POST
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST", // si quiero que sea POST, es obligatorio, por default es GET
        body: JSON.stringify(FormData), // Los datos que quiero recogger
        headers: { "Content-type": "application/json" }
    })
        .then(response => response.json())
        .then(data => {
            const idCard = data.infoID;
            linkCard.classList.remove("hidden");
            linkCard.href = `./card.html?id=${idCard}`
            linkWhatsapp.href += encodeURI(linkCard.href)
        })
}

createCardBtn.addEventListener("click", handleCreateCard);


