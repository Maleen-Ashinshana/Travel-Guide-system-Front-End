const AreaPaneOpenButton=document.getElementById("add-area-pane");
const AreaOverlay = document.getElementById("areaOverlay");
const newAreaPage = document.getElementById("newAreaPage");
const AreaNewPageCloseButton = document.getElementById("vehicleNewPageCloseButton");

AreaPaneOpenButton.addEventListener("click", () => {
    AreaOverlay.style.display = "block";
    newAreaPage.style.display = "block";
});
AreaNewPageCloseButton.addEventListener("click", () => {
    AreaOverlay.style.display = "none";
    newAreaPage.style.display = "none";
});


const fileInput = document.getElementById('fileInput');
const imageForm = document.getElementById('imageForm');
const imageGallery = document.getElementById('imageGallery');


fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.className = 'image-preview';
            img.src = URL.createObjectURL(file);
            imageGallery.appendChild(img);
        }
    }

    // Clone the file input element to allow adding another image
    const newFileInput = fileInput.cloneNode(true);
    fileInput.parentNode.replaceChild(newFileInput, fileInput);
    newFileInput.addEventListener('change', handleFileSelect);

    // Reset the current file input to clear the selected files
    fileInput.value = "";
}