/*import {VehicleController} from "./vehicleService/controller/vehicleController.js";

new VehicleController()*/
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById('profilePicture').addEventListener('change', function() {
    previewImage(this, 'profilePicturePreview');
});

document.getElementById('idImage').addEventListener('change', function() {
    previewImage(this, 'idImagePreview');
});

document.getElementById('nicImage').addEventListener('change', function() {
    previewImage(this, 'nicImagePreview');
});

document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission here
    // You can use JavaScript or a backend script to handle form data
});