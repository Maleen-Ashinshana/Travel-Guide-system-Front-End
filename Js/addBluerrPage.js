const openButton=document.getElementById("btn-add-guider-page")
const guideUpdateOpenButton=document.getElementById("btn-guide-pane")
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const newPage = document.getElementById("newPage");

openButton.addEventListener("click", () => {
    overlay.style.display = "block";
    newPage.style.display = "block";
});
guideUpdateOpenButton.addEventListener("click", () => {
    overlay.style.display = "block";
    newPage.style.display = "block";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    newPage.style.display = "none";
});
