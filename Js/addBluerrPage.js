

const openButton=document.getElementById("btn-add-guider-page")
const vehiclePaneOpenButton=document.getElementById("add-vehicle-pane")
/*const guideUpdateOpenButton=document.getElementById("btn-guide-pane")*/
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const newPage = document.getElementById("newPage");
const vehicleOverlay = document.getElementById("vehicleOverlay");
const newVehiclePage = document.getElementById("newVehiclePage");
const vehicleNewPageCloseButton = document.getElementById("vehicleNewPageCloseButton");


const HotelOverlay = document.getElementById("hotelOverLay");
const HotelOpenButton=document.getElementById("btn-add-hotel-page")
const newHotelPage = document.getElementById("newHotelPage");
const HotelCloseButton = document.getElementById("hotelNewPageCloseButton");

const UpdateVehicleOpenButton=document.getElementById("btn-update")
const UpdateVehicleCloseButton = document.getElementById("closeButton");
const UpdateVehicleOverlay = document.getElementById("overlay");
const UpdateVehicleNewPage = document.getElementById("newPage");


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

/*Vehicle*/
/*vehiclePaneOpenButton.addEventListener("click", () => {
    vehicleOverlay.style.display = "block";
    newVehiclePage.style.display = "block";
});
vehicleNewPageCloseButton.addEventListener("click", () => {
    vehicleOverlay.style.display = "none";
    newVehiclePage.style.display = "none";
});*/

/*hotelOverlay.style.display = "none";*/
/*Hotel*/
HotelOpenButton.addEventListener("click", () => {
    HotelOverlay.style.display = "block";
    newHotelPage.style.display = "block";
});
HotelCloseButton.addEventListener("click", () => {
    HotelOverlay.style.display = "none";
    newHotelPage.style.display = "none";
});



$/*(document).on("click", "#btn-update", function () {
    overlay.style.display = "block";
    newPage.style.display = "block";
})*/