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

            console.log("saved"+response.vehicle_id)

            console.log(response.vehicle_id  +  "NEW")

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
/*    const VId=model.vehicle_id
    console.log(model.vehicle_id+"model")
    console.log(model.vehicle_id+"model")
    const  formData=new FormData();
    formData.append("imgModel",new Blob([JSON.stringify(imgModel)],{type:'application/json'}));
    formData.append("vehicle_image",vehicle_image);
    $.ajax({
        type:"POST",
        url:`http://localhost:8080/vehicle/api/v1/vehicleImage/vehicle_id`,
        data:formData,
        processData: false,
        contentType: false,

    success:(response=>{
        console.log("SavedImage"   +response.data);
    }),
        error:(error=>{
        console.log("Not Saved Image"+error.responseText);
    })
})*/
    /*const vehicle_type = $('#vehicle-type').val();
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
    /!*const vehicle_image = $('#vehicle-image-input')[0].files[0];*!/

    const model = new VehicleModel(driver_name, driver_contact_number, vehicle_brand, vehicle_category, vehicle_type, fuel_type, fuel_usage, hybrid_or_no, seat_capacity, transmission, remark);
 /!*   const imgModel=new VehicleImageModel(vehicle_image);*!/

    /!*const formData=new FormData();
    formData.append('model',new Blob([JSON.stringify(model),{type:'application/json'}]));*!/
    /!*formData.append('imgModel',new Blob([JSON.stringify(imgModel),{type:'application/json'}]));*!/

    /!*formData.append('vehicle_image',vehicle_image);*!/
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/vehicle/api/v1/vehicle",
        data: JSON.stringify(model),
        contentType: 'application/json', // Set the content type
        success: function(response) {
            // Handle the response from the backend
            console.log(response);
            console.log("saved")
        },
        error: function(error) {
            // Handle any errors
            console.error('Error:', error);
            console.error("No");
        }
    })*/
    /*$.ajax({
        type:"POST",
        url:"http://localhost:8080/vehicle/api/v1/vehicleImage",
        data:formData,
        /!*enctype: 'multipart/form-data',*!/
        processData: false,
        contentType: false,
        /!*headers: {
            'origin:',
            // other headers
        },*!/

        success:(response=>{
            console.log("Saved"   +response.data);
        }),
        error:(error=>{
            console.log("Not Saved"+error.responseText);
        })
    })*/

})
/*$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {



            data.forEach(function (item) {

                console.log(item)
                const card = `
                 <div class="card" id="load-vehicle-filed-card">
                 <img src="data:image/!**;base64,${item.vehicle_image}" id="load-vehicle-image">
                 <p>Vehicle Brand: ${item.vehicle_brand}</p>
                 <p>Vehicle Category: ${item.vehicle_category}</p>
                  <p>Vehicle Type: ${item.vehicle_type}</p>
                  <p>Fuel Type: ${item.fuel_type}</p>
                  <p>Fuel Usage: ${item.fuel_usage}</p>
                  <p>Hybrid Type: ${item.hybrid_or_no}</p>
                  <p>Seat Capacity: ${item.seat_capacity}</p>
                  <p>Transmission: ${item.transmission}</p>
                  <p>Driver Name: ${item.driver_name}</p>
                  <p>Driver Contact: ${item.driver_contact_number}</p>
                </div>
                `;

                $('#vehicleCardContainer').append(card)
            })
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    })
})*/
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (vehicle) {
                console.log(vehicle.vehicle_id + "******");
                console.log(vehicle.vehicle_brand + "******");
                console.log(vehicle.vehicle_category + "*******");
                // Make an AJAX request to retrieve images for the current vehicle
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicle.vehicle_id}`,
                    dataType: 'json',
                    success: function (images) {
                        console.log("LoadImage " + JSON.stringify(images));
                        const card = `
                            <div class="card" id="load-vehicle-filed-card">
                                <img src="data:image/**;base64,${images[0].vehicle_image}" id="load-vehicle-image">
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
