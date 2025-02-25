/* console.log("fichero colapsables");




const userName = document.querySelector(".js-name");
const listName = document.querySelector(".js-list-name");
const img = document.querySelector(".js-img");

const designTitle = document.querySelector(".js-design-title");
const designForm = document.querySelector(".js-design-form");

function handleClickFormDesign () {
    if (designForm.classList.contains ("collapsed")) {
        designForm.classList.remove ("collapsed");
    }
    else {
        designForm.classList.add ("collapsed");
    }
}  

designTitle.addEventListener ("click", handleClickFormDesign);

 */