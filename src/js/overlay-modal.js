const openButton = document.querySelector("#openOverlay");
const closeElement = document.querySelector('#closeIcon');
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.left = `0`;
})
closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.left = `100%`;
});