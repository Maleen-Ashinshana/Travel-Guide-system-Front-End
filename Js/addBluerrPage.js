const openButton=document.getElementById("btn-add-guider-page")
const vehiclePaneOpenButton=document.getElementById("btn-add-vehicle-page")
/*const guideUpdateOpenButton=document.getElementById("btn-guide-pane")*/
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const newPage = document.getElementById("newPage");
const vehicleOverlay = document.getElementById("vehicleOverlay");
const newVehiclePage = document.getElementById("newVehiclePage");
const vehicleNewPageCloseButton = document.getElementById("vehicleNewPageCloseButton");

openButton.addEventListener("click", () => {
    overlay.style.display = "block";
    newPage.style.display = "block";
});
/*guideUpdateOpenButton.addEventListener("click", () => {
    overlay.style.display = "block";
    newPage.style.display = "block";
});*/

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    newPage.style.display = "none";
});
vehiclePaneOpenButton.addEventListener("click", () => {
    vehicleOverlay.style.display = "block";
    newVehiclePage.style.display = "block";
});
vehicleNewPageCloseButton.addEventListener("click", () => {
    vehicleOverlay.style.display = "none";
    newVehiclePage.style.display = "none";
});