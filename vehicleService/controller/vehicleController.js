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