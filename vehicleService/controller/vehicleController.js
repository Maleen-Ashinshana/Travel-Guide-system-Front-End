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
        },

        error: function (error) {
            console.log("Failed to Delete: " + error);
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
    // Function to filter and show only the selected vehicle card
    function filterAndShowCard(searchTerm) {
        const container = $('#vehicleCardContainer');

        // Loop through the vehicle cards
        $('.vehicleCard').each(function () {
            const card = $(this);
            const brand = card.find('#brand').text();

            // Check if the card's brand matches the search term
            if (brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                card.show();
            } else {
                card.hide();
            }
        });
    }

    // Initial loading of all vehicle cards
    filterAndShowCard('');

    // Add an event listener to the search button
    $('#search-btn').click(function () {
        console.log("SEARCH");
        const searchTerm = $('#search').val();
        filterAndShowCard(searchTerm);

        // Calculate the new left position
        const currentLeft = parseInt($('#search-btn').css('right'), 1);
        const newLeft = currentLeft + ($(window).width() * 0.5);

        // Apply the new left position
        $('#search-btn').css('right', newLeft);
    });

});



/*const vehicleId = card.attr("id").replace("load-vehicle-filed-card-", "");*/
/*console.log(this.vehicle_id+"NEWWWW")*/
// When the delete button is clicked
/*$(document).on("click", "#btn-delete", function () {
    console.log("JKHJHHJHJUH")
    const vehicleId = $(this).data("vehicle_id");

    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/vehicle/api/v1/vehicle/b24f1cfa-1f28-4e5f-8556-71c750bd8261`,
        success: function () {
            // Vehicle data deleted, now delete related images
            $.ajax({
                type: "DELETE",
                url: `http://localhost:8080/vehicle/api/v1/vehicleImage/b24f1cfa-1f28-4e5f-8556-71c750bd8261`,
                success: function () {

                    $(this).closest(".vehicleCard").remove();
                },
                error: function (error) {
                    console.error("Failed to delete vehicle images: " + error);
                }
            });
        },
        error: function (error) {
            console.error("Failed to delete vehicle data: " + error);
        }
    });
});*/
console.log()


/*console.log(this.vehiles+"*-+*-+")*/


/*$(document).ready(function () {

});*/

/*$(document).ready(function () {
    // Function to filter and show only the selected vehicle card
    function filterAndShowCard(searchTerm) {
        const container = $('#vehicleCardContainer');

        // Loop through the vehicle cards
        $('.vehicleCard').each(function () {
            const card = $(this);
            const brand = card.find('#brand').text();

            // Check if the card's brand matches the search term
            if (brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                card.show();
            } else {
                card.hide();
            }
        });
    }

    // Initial loading of all vehicle cards
    filterAndShowCard('');

    // Add an event listener to the search button
    $('#search-btn').click(function () {
        console.log("SEARCH")
        const searchTerm = $('#search').val();
        filterAndShowCard(searchTerm);
    });
});*/


/*$(document).on("click", "#btn-update", function () {

})*/

/*$(document).on("click", "#btn-update", function () {
    // Get the vehicle information from the clicked card
    var vehicleId = $(this).closest('.vehicleCard').attr('id');
    var vehicleBrand = $(this).closest('.vehicleCard').find('#brand').text();
    var vehicleCategory = $(this).closest('.vehicleCard').find('#category').text();
    var vehicleType = $(this).closest('.vehicleCard').find('#type').text();
    // Add more data fields as needed

    // Encode the data for passing in the URL
    var queryParams = `?id=${vehicleId}&brand=${encodeURIComponent(vehicleBrand)}&category=${encodeURIComponent(vehicleCategory)}&type=${encodeURIComponent(vehicleType)}`;
    // Add more query parameters as needed

    // Specify the URL of the new page along with the query parameters
    var updatePageUrl = `update-vehicle.html${queryParams}`;

    // Open the new page in a separate tab or window
    window.open(updatePageUrl, "_blank");
});*/



/*$(document).on("click", "#btn-delete", function () {
    console.log("OK")
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${image_id}`,
        success: function () {
            console.log("Image deleted successfully");
            // You can perform additional actions here after the image is deleted.
        },
        error: function (error) {
            console.error("Failed to delete image: " + error);
        }
    });
})*/



/*$(document).ready(function () {
    // Existing code...

    // Event handler for the Delete button
    $(document).on("click", "#btn-delete", function () {
        // Get the vehicle ID associated with the clicked Delete button
        const card = $(this).closest(".vehicleCard");
        const vehicleId = card.attr("id").replace("vehicle-card-", "");
        console.log(vehicleId.vehicle_id+"*-*-*--*-*")
        console.log(vehicleId.vehicle_image_id)

        // Make a DELETE request to delete the vehicle images
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8080/vehicle/api/v1/vehicleImage/${vehicleId.vehicle_image_id}`,
            success: function () {
                // After deleting the images, make another DELETE request to delete the vehicle
                $.ajax({
                    type: "DELETE",
                    url: `http://localhost:8080/vehicle/api/v1/vehicle/${vehicleId.vehicle_id}`,
                    success: function () {
                        // Handle the success, e.g., remove the card from the UI
                        card.remove();
                    },
                    error: function (error) {
                        console.log("Failed to delete vehicle: " + error);
                    }
                });
            },
            error: function (error) {
                console.log("Failed to delete vehicle images: " + error);
            }
        });
    });

    // Rest of your existing code...
});*/
/*document.getElementById('search-btn').addEventListener('click',function(){
    console.log("search")
    console.log(vehicle+"GTGTGT")
    const  search=this.vehicle.filter(vehicle=>{
        return vehicle.vehicle_brand.includes(this.search.val());
    });
    console.log(vehicle+"WE")
    console.log(search+"SEACRH")
    return search;
    });*/
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

