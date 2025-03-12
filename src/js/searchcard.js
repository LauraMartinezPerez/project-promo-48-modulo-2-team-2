"use strict";

/* const createCardBtn = document.querySelector(".js-btn-create");
const linkCard = document.querySelector (".js-link-created");

function handleCreateCard (ev) {
    ev.preventDefault();
    
    fetch("https://dev.adalab.es/api/info/data", {
        method:"POST",
        body: JSON.stringify(FormData),
        headers: {"Content-type": "application/json"}       
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const idCard = data.infoID;
            linkCard.classList.remove("hidden");
            linkCard.href = `./cardDetails.html?id=${idCard}`
            
        })
}

createCardBtn.addEventListener("click", handleCreateCard);
 */

