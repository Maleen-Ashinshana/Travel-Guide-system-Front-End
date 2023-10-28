const HotelFileInput = document.getElementById('fileInputHotel');
const HotelImageForm = document.getElementById('imageFormHotel');
const HotelImageGallery = document.getElementById('imageGalleryHotel');

HotelFileInput.addEventListener('change', handleFileSelectForHotel);

function handleFileSelectForHotel(event) {
    const HotelFiles = event.target.files;

    for (let i = 0; i < HotelFiles.length; i++) {
        const file = HotelFiles[i];
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.className = 'image-preview';
            img.src = URL.createObjectURL(file);
            HotelImageGallery.appendChild(img);
        }
    }

    // Clone the file input element to allow adding another image
    const newFileInputHotel = HotelFileInput.cloneNode(true);
    HotelFileInput.parentNode.replaceChild(newFileInputHotel, HotelFileInput);
    newFileInputHotel.addEventListener('change', handleFileSelectForHotel);

    // Reset the current file input to clear the selected files
    HotelFileInput.value = "";
}