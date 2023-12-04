import {VehicleModel} from "../model/vehicleModel.js";
import {VehicleImageModel} from "../model/vehicleImageModel.js";


export class VehicleController{


    constructor() {
        /*this.getAllVehicles();*/
        this.vehicle=[];
        this.search=$('#search').val()
        this.vehicleId=vehicle.vehicle_id;
       /* $('#vehicleCardContainer').on('click', '.vehicleCard', this.clickOnVehicleCard.bind(this));
        $('#btn-vehicle-save').on('click',this.addvehicle.bind(this))
        this.loadData();
        $('#btn-vehicle-save').on('click',this.addvehicle.bind(this))

        $('#addBtn').on('click', this.createGuide.bind(this));
        this.vid=vehicle_id;*/
    }
   /* clickOnVehicleCard(e){
        console.log("OPEN")
        console.log(e.target.id)
        const vehicleId=e.target.id;
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8080/vehicle/api/v1/vehicle/${vehicleId}`,
            dataType: 'json',
            success: ()=> {
                this.getAllVehicles()
                this.loadData()
            },

            error: function (error) {
                console.log("Failed to load image: " + error);
            }
        });


    }


    addvehicle(){
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
        const vehicle_image = $('#fileInput')[0].files[0];


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
    }

    getAllVehicles() {
        $.ajax({
            url: 'http://localhost:8080/vehicle/api/v1/vehicle',
            method: 'GET',
            dataType: 'json',
            success: (data) =>{
                console.log(data)
                this.vehicles=data;
                this.loadData()
            },
            error: function () {
                console.error('Failed to retrieve data');
            }

        });
    }

    loadData() {
        $('#vehicleCardContainer').html("");
        this.vehicles.forEach( (vehicle)=> {
            console.log(vehicle.imageDTOS.length!==0?vehicle.imageDTOS[0].vehicle_image:null)
            /!*const vehicleC=[];*!/
            const cardId = `vehicle-card-${vehicle.vehicle_id}`;
            console.log(cardId+"CRD")
            console.log(vehicle)

            // Create a card for each vehicle
            const card = `
                    <div class="vehicleCard col-3" id="${vehicle.vehicle_id}">
                          <img src="data:image/jpg;base64, ${vehicle.imageDTOS.length !== 0 ? vehicle.imageDTOS[0].vehicle_image : null}"  class="vehicleImage">
                          <p id="brand">${vehicle.vehicle_brand}</p>
                          <p id="category">Vehicle Category : ${vehicle.vehicle_category}</p>
                          <p id="type">Vehicle Type: ${vehicle.vehicle_type}</p>
                          <p id="fuel">Fuel Type: ${vehicle.fuel_type}</p>
                          <p id="usage">Fuel Usage: ${vehicle.fuel_usage}</p>
                          <p id="hy">Hybrid Type: ${vehicle.hybrid_or_no}</p>
                          <p id="se">Seat capacity: ${vehicle.seat_capacity}</p>
                          <p id="ta">Transmission: ${vehicle.transmission}</p>
                          <p id="re">Remark: ${vehicle.remark}</p>
                          <p id="dn">Driver Name: ${vehicle.driver_name}</p>
                          <p id="dc">Contact Number: ${vehicle.driver_contact_number}</p>
                        <button  class="delete-vehicle " style="background: red" id="${vehicle.vehicle_id}">
                        Delete
                        
                        </button>
                        <img src="../../icon/pencil.png" class="img" id="btn-update">
                      </div>
                `;
            /!* console.log(ve)*!/
            $('#vehicleCardContainer').append(card);

            $.ajax({
                type: "GET",
                url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicle.vehicle_id}`,
                dataType: 'json',
                success: function (images) {
                    console.log(images)
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
    }*/
}
$('#vehicleCardContainer').on("click", ".btn-delete", function (e) {
    console.log(e.target.id)
    const vehicleId=e.target.id;
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/vehicle/api/v1/vehicle/${vehicleId}`,
        dataType: 'json',
        success: ()=> {
            /*this.getAllVehicles()
            this.loadData()*/
            console.log("DELETED")
            alert("Vehicle Are Not Deleted ")
        },

        error: function (error) {
            console.log("Failed to Delete: " + error);

            alert("Are You Surebtn-add")
        }
    });
    /*console.log(this.vehicle.vehicle_id)*/
})
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
    const vehicle_image = $('#fileInput')[0].files[0];

  /*  const agePattern = /^(0?[1-9]|[1-9][0-9])$/;*/


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
                   /* alert("Vehicle Saved Success Full")*/
                }),
                error:(error=>{
                    console.log("Not Saved Image"+error);

                })
            })
            alert("Vehicle Saved Success Full")
        },
        error: function(error) {
            // Handle any errors
            console.error('Error:', error);
            console.error("No");
            alert("Vehicle Are Not Saved")
        }

    })

})
/*<img src="../../icon/garbage-bin_2450285.png" class="btn-delete" id="${vehicle.vehicle_id}">
                        <img src="../../icon/pencil.png" class="img" id="btn-update">*/
$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            data.forEach(function (vehicle) {
                console.log(vehicle.imageDTOS.length!==0?vehicle.imageDTOS[0].vehicle_image:null)
                /*const vehicleC=[];*/
                const cardId = `vehicle-card-${vehicle.vehicle_id}`;
                console.log(cardId+"CRD")
                console.log(vehicle)

                // Create a card for each vehicle
                const card = `
                    <div class="vehicleCard" id="load-vehicle-filed-card">
                          <img src="data:image/jpg;base64, ${vehicle.imageDTOS.length !== 0 ? vehicle.imageDTOS[0].vehicle_image : null}"  class="vehicleImage" id="vehicleImage">
                          <p id="brand">${vehicle.vehicle_brand}</p>
                          <p id="category">Vehicle Category : ${vehicle.vehicle_category}</p>
                          <p id="type">Vehicle Type: ${vehicle.vehicle_type}</p>
                          <p id="fuel">Fuel Type: ${vehicle.fuel_type}</p>
                          <p id="usage">Fuel Usage: ${vehicle.fuel_usage}</p>
                          <p id="hy">Hybrid Type: ${vehicle.hybrid_or_no}</p>
                          <p id="se">Seat capacity: ${vehicle.seat_capacity}</p>
                          <p id="ta">Transmission: ${vehicle.transmission}</p>
                          <p id="re">Remark: ${vehicle.remark}</p>
                          <p id="dn">Driver Name: ${vehicle.driver_name}</p>
                          <p id="dc">Contact Number: ${vehicle.driver_contact_number}</p>
                         <button class="btn-delete" style="background: red;width: 10%%" id="${vehicle.vehicle_id}">Delete</button>
                      </div>
                `;
                console.log(vehicle.vehicle_id+ "qqqqqqqqqqqqqqqq")
                const deleteButton = (vehicle.vehicle_id);
                console.log(deleteButton+"aeaeaeaea")
                /*if (deleteButton) {
                    deleteButton.addEventListener('click', function() {
                        const vehicleId = this.id; // Get the vehicle ID from the button's ID attribute
                        console.log('Clicked on Delete button for vehicle ID: ' + vehicleId);
                        // Add your delete logic here, if needed
                    });
                }*/
                /* console.log(ve)*/
                $('#vehicleCardContainer').append(card);

                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicle.vehicle_id}`,
                    dataType: 'json',
                    success: function (images) {
                        console.log(images)
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

$(document).ready(function () {

    function filterAndShowCard(searchTerm) {
        const container = $('#vehicleCardContainer');


        $('.vehicleCard').each(function () {
            const card = $(this);
            const brand = card.find('#brand').text();


            if (brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                card.show();
            } else {
                card.hide();
            }
        });
    }


    filterAndShowCard('');


    $('#search-btn').click(function () {
        console.log("SEARCH");
        const searchTerm = $('#search').val();
        filterAndShowCard(searchTerm);


        const currentLeft = parseInt($('#search-btn').css('right'), 1);
        const newLeft = currentLeft + ($(window).width() * 0.5);


        $('#search-btn').css('right', newLeft);
    });

});





