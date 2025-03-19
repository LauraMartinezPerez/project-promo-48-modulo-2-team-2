"use strict";

const createCardBtn = document.querySelector(".js-btn-create");
const linkCard = document.querySelector(".js-link-created");
const linkWhatsapp = document.querySelector(".js-link-whatsapp");
const socialMedia = document.querySelector(".js-social-media");

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
            if (data.success) {
                const cardId = data.infoID;
                linkCard.classList.remove("hidden");
                socialMedia.classList.remove("collapsed");
                linkCard.href = `./card.html?id=${cardId}`;
                linkWhatsapp.href += encodeURI(linkCard.href);
                document.querySelector("form").reset();
            }
        });
}

createCardBtn.addEventListener("click", handleCreateCard);
