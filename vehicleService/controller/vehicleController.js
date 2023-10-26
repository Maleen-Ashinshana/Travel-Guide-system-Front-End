import {VehicleModel} from "../model/vehicleModel.js";
import {VehicleImageModel} from "../model/vehicleImageModel.js";
export class VehicleController{

}
document.getElementById('btn-vehicle-save').addEventListener('click',function () {
    console.log("OK")
    const vehicle_type = $('#vehicle-type').val();
    const vehicle_brand = $('#txt-vehicle-brand').val();
    const vehicle_category = $('#vehicle-category').val();
    const fuel_type = $('#vehicle-fuelType').val();
    const fuel_usage = $('#txt-vehicle-fuelUsage').val();
    const hybrid_or_no = $('#vehicle-hybridType').val();
    const seat_capacity = $('#txt-vehicle-seat').val();
    const transmission = $('#vehicle-transmission').val();
    const remark = $('#txt-vehicle-remark').val();
    const driver_name = $('#txt-vehicle-driver').val();
    const driver_contact_number = $('#txt-vehicle-driverContact').val();
    const vehicle_image = $('#vehicle-image-input')[0].files[0];


    const model = new VehicleModel(driver_name, driver_contact_number, vehicle_brand, vehicle_category, vehicle_type, fuel_type, fuel_usage, hybrid_or_no, seat_capacity, transmission, remark);
    const imgModel=new VehicleImageModel(vehicle_image);
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/vehicle/api/v1/vehicle",
        data: JSON.stringify(model),
        contentType: 'application/json', // Set the content type
        success: function(response) {
            console.log("saved"+response)
            const  formData=new FormData();
            formData.append("imgModel",new Blob([JSON.stringify(imgModel)],{type:'application/json'}));
            formData.append("vehicle_image",vehicle_image);
            $.ajax({
                type:"POST",
                url:`http://localhost:8080/vehicle/api/v1/vehicleImage/${response.vehicle_id}`,
                data:formData,
                processData: false,
                contentType: false,
                success:(responses=>{
                    console.log("SavedImage"   +responses.data);
                }),
                error:(error=>{
                    console.log("Not Saved Image"+error);
                })
            })
        },
        error: function(error) {
            // Handle any errors
            console.error('Error:', error);
            console.error("No");
        }

    })

})

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (vehicle) {
                // Create a card for each vehicle
                const card = `
                    <div class="vehicleCard" id="load-vehicle-filed-card">
                          <img src="" id="load-vehicle-image-${vehicle.vehicle_image}" class="vehicleImage">
                          <p>Vehicle Brand: ${vehicle.vehicle_brand}</p>
                          <p>Vehicle Category: ${vehicle.vehicle_category}</p>
                          <p>Vehicle Type: ${vehicle.vehicle_type}</p>
                          <p>Fuel Type: ${vehicle.fuel_type}</p>
                          <p>Fuel Usage: ${vehicle.fuel_usage}</p>
                          <p>Hybrid Type: ${vehicle.hybrid_or_no}</p>
                          <p>Seat capacity: ${vehicle.seat_capacity}</p>
                          <p>Transmission: ${vehicle.transmission}</p>
                          <p>Remark: ${vehicle.remark}</p>
                          <p>Driver Name: ${vehicle.driver_name}</p>
                          <p>Driver Contact Number: ${vehicle.driver_contact_number}</p>
                        <img src="../../icon/garbage-bin_2450285.png" id="load-vehicle-delete-image" class="vehicle-icon">
                        <img src="../../icon/pencil.png" id="load-vehicle-update-image" class="vehicle-icon">
                      </div>
                `;
                $('#vehicleCardContainer').append(card);

                // Make an AJAX request to retrieve the vehicle image
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicle.vehicle_id}`,
                    dataType: 'json',
                    success: function (images) {
                        const imageElement = $(`.vehicleImage[data-vehicle-id="${vehicle.vehicle_id}"]`);
                        if (images.length > 0) {
                            const base64Image = images[0].vehicle_image;
                            imageElement.attr('src', `data:image/jpeg;base64,${base64Image}`);
                        }
                    },
                    error: function (error) {
                        console.log("Failed to load image: " + error);
                    }
                });
            });
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    });
});


/*$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (vehicle) {
                console.log(vehicle.vehicle_id + "Vehicle")
                // Create a card for each vehicle
                console.log(vehicle)
                const card = `
                      <div class="vehicleCard" id="load-vehicle-filed-card">
                          <img src="" id="load-vehicle-image-${vehicle.vehicle_image}" class="vehicleImage">
                          <p>Vehicle Brand: ${vehicle.vehicle_brand}</p>
                          <p>Vehicle Category: ${vehicle.vehicle_category}</p>
                          <p>Vehicle Type: ${vehicle.vehicle_type}</p>
                          <p>Fuel Type: ${vehicle.fuel_type}</p>
                          <p>Fuel Usage: ${vehicle.fuel_usage}</p>
                          <p>Hybrid Type: ${vehicle.hybrid_or_no}</p>
                          <p>Seat capacity: ${vehicle.seat_capacity}</p>
                          <p>Transmission: ${vehicle.transmission}</p>
                          <p>Remark: ${vehicle.remark}</p>
                          <p>Driver Name: ${vehicle.driver_name}</p>
                          <p>Driver Contact Number: ${vehicle.driver_contact_number}</p>
                      </div>
                  `;
                $('#vehicleCardContainer').append(card);
                console.log(vehicle.vehicle_id + "Meda")
                // Make an AJAX request to retrieve the vehicle image and set it in the card
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/vehicle/api/v1/vehicleImage/1b8aaa3b-fa2c-409f-89fa-4c29dd535443`,
                    dataType: 'json',
                    success: function (images) {
                        console.log(images)
                        console.log(vehicle.vehicle_id + "Imagessssssssssss")
                        console.log(images.vehicle_image+"IMAGES")
                      
                        const imageElement = $(`#load-vehicle-image-${vehicle.vehicle_id}`);
                        if (images.length > 0) {
                            const base64Image = images[0].vehicle_image;
                            imageElement.attr('src', `data:image/!**;base64,${base64Image}`);
                        }
                        const  card=`
                        <div class="vehicle-image-card" style="border: 2px solid purple;width: 10%">
                        
                        <img src="data:image/!**;base64,${images.vehicle_image}">
</div>
                        `;
                        $('#vehicleCardContainer').append(card);
                    },
                    error: function (error) {
                        console.log("Failed to load image: " + error);
                    }
                });
            });
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    });
});*/


/*
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (vehicle) {
                console.log(vehicle.vehicle_id+"Vehicle Part")
                console.log(data.vehicle_id+" Vehicle Data Part")
                const card = `
                     <div class="card" id="load-vehicle-filed-card">
                         <img src="data:image/!**;base64,${vehicle.vehicle_image}" id="load-vehicle-image-${vehicle.vehicle_id}" style="border: 1px solid black;width: 30%;height: 100%">
                         <p>Vehicle Brand: ${vehicle.vehicle_brand}</p>
                         <p>Vehicle Category: ${vehicle.vehicle_category}</p>
                         <p>VehicleType: ${vehicle.vehicle_type}</p>
                         <p>FuelType: ${vehicle.fuel_type}</p>
                         <p>Fuel Usage: ${vehicle.fuel_usage}</p>
                         <p>Hybrid Type: ${vehicle.hybrid_or_no}</p>
                         <p>Seat capacity: ${vehicle.seat_capacity}</p>
                         <p>Transmission: ${vehicle.transmission}</p>
                         <p>Remark: ${vehicle.remark}</p>
                         <p>Driver Name: ${vehicle.driver_name}</p>
                         <p>Driver Contact Number: ${vehicle.driver_contact_number}</p>
                     </div>
                 `;
                $('#vehicleCardContainer').append(card);
                console.log(vehicle.vehicle_id +" Medle Part")
                console.log(vehicle.vehicle_image +" Medle Part")
                // Make an AJAX request to retrieve the vehicle image and set it in the card
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicle.vehicle_id}`,
                    dataType: 'json',

                    success: function (images) {
                        const imageElement = $(`#load-vehicle-image-${vehicle.vehicle_id}`);
                        if (images.length > 0) {
                            console.log(vehicle.vehicle_id+"Image Part")
                            const base64Image = images[0].vehicle_image;
                            imageElement.attr('src', `data:image/!**;base64,${base64Image}`);
                        }
                    },
                    error: function (error) {

                        console.log("Not Load Image: " + error);
                    }
                });
            });
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    });
});
*/

