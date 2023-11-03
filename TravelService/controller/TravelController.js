/*import {AreaModel} from "../../TravelArea/model/AreaModel.js";
import {AreaImageModel} from "../../TravelArea/model/AreaImageModel.js";
import {HotelController} from "../../hotelService/controller/hotelController.js";
import {HotelImageModel} from "../../hotelService/model/hotelImageModel.js";
import {HotelModel} from "../../hotelService/model/hotelModel.js";*/
import {TravelModel} from "../model/TravelModel.js";


export class TravelController{

    constructor() {
        this.start_date=$('#calendar').val()
    }
}
document.getElementById('btn-save-travel').addEventListener('click',function (){
    const startDate=$('#calendar').val();
    const endDate=$('#calendar-end').val();
    const travelArea=$('#area-type').val();
    const no_of_child=$('#txt-child').val();
    const no_of_adult=$('#txt-adult').val();
    const total_head_count=$('#txt-head-count').val();
    const guide=$('#guides-type').val();
    const package_type=$('#package-type').val();
    const hotel_type=$('#hotel').val();
    const vehicle_type=$('#vehicles').val();

    const travelModel=new TravelModel(startDate,endDate,travelArea,no_of_child,no_of_adult,total_head_count,guide,package_type,hotel_type,vehicle_type);
    console.log(travelModel);

    /*console.log(celender)*/
   /* console.log("button clicked")*/
})
/*document.getElementById('#guide-type').addEventListener('click',function (){
    console.log()
})*/
document.addEventListener("DOMContentLoaded", function () {
    const guideTypeSelect = document.getElementById("guide-type");
    const guideSection = document.getElementById("guide");

    guideTypeSelect.addEventListener("change", function () {
        const selectedValue = guideTypeSelect.value;

        if (selectedValue === "yes") {
            // Show the guide section
            guideSection.style.display = "block";
        } else {
            // Hide the guide section
            guideSection.style.display = "none";
        }
    });
});
/*$(document).ready(function (){
    $.ajax({
      url:"http://localhost:9095/User/api/v1/user",
      method:'GET',
      dataType:'json',
        success:function (data){
            console.log(data)
            console.log("Ok")
        },
        error:function (error){
            console.log("Feil"+error)
        }

    })
})*/
$(document).ready(function (){
    $.ajax({
        url:'http://localhost:9091/travel/api/v1/area',
        method:'GET',
        dataType:'json',
        success:function (data){
            console.log(data)
            const areaSelector=$('#area-type');

            $.each(data,function (index,area){
                areaSelector.append($('<option>',{
                    value:area.area_id,
                    text:area.area_location
                }));
            });
        },
        error:function (error){
            console.log("NO",error)
        }
    })
});

$(document).ready(function (){
    const guideSelector=$('#guides-type');
    const guideDetailsDiv=$('#guide-details');

    $.ajax({
        url:'http://localhost:9092/Guide/api/v1/guide',
        method:'GET',
        dataType:'json',
        success:function (data){
            console.log(data)
            const areaSelector=$('#guides-type');

            $.each(data,function (index,guide){
                areaSelector.append($('<option>',{
                    value:guide.guide_id,
                    text:guide.guide_name
                }));
            });
        },
        error:function (error){
            console.log("NO",error)
        }
    });
    guideSelector.change(function (){
        const selectGuideId=guideSelector.val();

        $.ajax({
            url: 'http://localhost:9092/Guide/api/v1/guide/' + selectGuideId,
            method: 'GET',
            dataType: 'json',
            success: function (guideDetails) {


                guideDetailsDiv.html('');
                /*<img src="data:image/!**;base64,${item.profile_picture}" id="load-guide-image">*/
                guideDetailsDiv.append(`<img src="data:image/jpeg;base64,${guideDetails.profile_picture}" class="guideImage" id="guideImage">`);
                guideDetailsDiv.append('<p class="gFiled" id="name">Guide Name: ' + guideDetails.guide_name + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="=address">Address: ' + guideDetails.address + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="age">Age: ' + guideDetails.age + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="con">Contcat Number: ' + guideDetails.contact_number + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="gender">Gender: ' + guideDetails.gender + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="ex">Experience: ' + guideDetails.experience + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="man">Man_day_value: ' + guideDetails.man_day_value + '</p>');
                guideDetailsDiv.append('<p class="gFiled" id="remark">Remark: ' + guideDetails.remark + '</p>');


                /*loadHotelImage(selectedHotelId);*/
            },
            error: function (error) {
                console.log("Failed to fetch hotel details:", error);
            }
        });

    })
});



/*
$(document).ready(function () {
    const packageTypeSelector = $('#package-type');
    const hotelCategorySelector = $('#hotel-category'); // Use the correct selector ID

    const regularHotelCategories = ['1 Star', '2 Star'];

    function populateHotelCategories(packageType) {
        hotelCategorySelector.empty(); // Clear existing options

        let categories;
        if (packageType === 'Regular') {
            categories = regularHotelCategories;
        }
        // Add more conditions for other package types if needed

        // Populate the hotel categories selector
        categories.forEach(function (category) {
            hotelCategorySelector.append($('<option>', {
                value: category, // Assuming category is a string
                text: category,
            }));
        });
    }

    // Initial population based on the default selected package
    const initialPackageType = packageTypeSelector.val();
    populateHotelCategories(initialPackageType);

    // Event handler for package-type change
    packageTypeSelector.change(function () {
        const selectedPackageType = packageTypeSelector.val();
        populateHotelCategories(selectedPackageType);
    });
});
*/



$(document).ready(function () {
    const hotelSelector = $('#hotel');
    const hotelDetailsDiv = $('#hotelImages');
    const packageType = $('#package-type');

    // Populate the hotel dropdown with options
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);

            $.each(data, function (index, hotel) {
                hotelSelector.append($('<option>', {
                    value: hotel.hotel_id,
                    text: hotel.hotel_name,
                    category:hotel.hotel_category

                }));
            });
        },
        error: function (error) {
            console.log("Error: ", error);
        }
    });


    hotelSelector.change(function () {
        const selectedHotelId = hotelSelector.val();

        $.ajax({
            url: 'http://localhost:8086/hotel/api/v1/hotel/' + selectedHotelId,
            method: 'GET',
            dataType: 'json',
            success: function (hotelDetails) {


                hotelDetailsDiv.html('');
                hotelDetailsDiv.append(`<img src="data:image/jpeg;base64,${hotelDetails.imageDTOS.length !== 0 ? hotelDetails.imageDTOS[0].hotel_images : null}" class="hotelImage" id="hotelImagee">`);
                hotelDetailsDiv.append('<p class="hFiled">Hotel Category: ' + hotelDetails.hotel_category + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="location">Location: ' + hotelDetails.location + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="email">Email: ' + hotelDetails.email + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="con1">Contact Number1: ' + hotelDetails.contact_number1 + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="con2">Contact Number2: ' + hotelDetails.contact_number2 + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="hotelFee">Hotel Fee: ' + hotelDetails.hotelFee + '</p>');
                hotelDetailsDiv.append('<p class="hFiled" id="remark">Remark: ' + hotelDetails.remark + '</p>');


                loadHotelImage(selectedHotelId);
            },
            error: function (error) {
                console.log("Failed to fetch hotel details:", error);
            }
        });
    });

    function loadHotelImage(hotelId) {
        $.ajax({
            url: 'http://localhost:8086/hotel/api/v1/hotelImage/' + hotelId,
            method: 'GET',
            dataType: 'json',
            success: function (images) {
                if (images.length > 0) {
                    const base64Image = images[0].hotel_image;
                    hotelDetailsDiv.append('<img src="data:image/jpeg;base64,' + base64Image + '" alt="Hotel Image">');
                }
            },
            error: function (error) {
                console.log("Failed to load hotel image: " + error);
            }
        });
    }
});
$(document).ready(function () {
    const vehicleSelector = $('#vehicles');
    const vehicleDetailsDiv = $('#vehicle');

    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);

            $.each(data, function (index, vehicle) {
                vehicleSelector.append($('<option>', {
                    value: vehicle.vehicle_id,
                    text: vehicle.vehicle_brand
                }));
            });
        },
        error: function (error) {
            console.log("Error: ", error);
        }
    });

    vehicleSelector.change(function () {
        const selectedVehicleId = vehicleSelector.val();

        $.ajax({
            url: 'http://localhost:8080/vehicle/api/v1/vehicle/' + selectedVehicleId,
            method: 'GET',
            dataType: 'json',
            success: function (vehicleDetails) {
                vehicleDetailsDiv.html('');
                vehicleDetailsDiv.append(`<img src="data:image/jpeg;base64,${vehicleDetails.imageDTOS.length !== 0 ? vehicleDetails.imageDTOS[0].vehicle_image : null}" class="vehicleImage" id ="vehicleImage">`);
                vehicleDetailsDiv.append('<p class="vField" id="vType">Vehicle Type: ' + vehicleDetails.vehicle_type + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="ftype">Fuel Type: ' + vehicleDetails.fuel_type + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="fuage">Fuel Usage: ' + vehicleDetails.fuel_usage + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="htype">Hybrid Type: ' + vehicleDetails.hybrid_or_no + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="seat">Seat capacity: ' + vehicleDetails.seat_capacity + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="tra">Transmission: ' + vehicleDetails.transmission + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="remark">Remark: ' + vehicleDetails.remark + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="dname">Driver Name: ' + vehicleDetails.driver_name + '</p>');
                vehicleDetailsDiv.append('<p class="vField" id="dcontact">Contact Number: ' + vehicleDetails.driver_contact_number + '</p>');

                /*loadVehicleImage(selectedVehicleId);*/
            },
            error: function (error) {
                console.log("Failed to fetch vehicle details:", error);
            }
        });
    });

    /*function loadVehicleImage(vehicleId) {
        $.ajax({
            url: 'http://localhost:8080/vehicle/api/v1/vehicleImage/' + vehicleId,
            method: 'GET',
            dataType: 'json',
            success: function (images) {
                if (images.length > 0) {
                    const base64Image = images[0].vehicle_image;
                    vehicleDetailsDiv.append('<img src="data:image/jpeg;base64,' + base64Image + '" alt="Vehicle Image">');
                }
            },
            error: function (error) {
                console.log("Failed to load vehicle image: " + error);
            }
        });
    }*/
});

/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            data.forEach(function (vehicle) {
               /!* console.log(vehicle.imageDTOS.length!==0?vehicle.imageDTOS[0].vehicle_image:null)*!/
                /!*const vehicleC=[];*!/


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
});*/
/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/vehicle/api/v1/vehicle',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            data.forEach(function (vehicle) {
                console.log(vehicle.imageDTOS.length!==0?vehicle.imageDTOS[0].vehicle_image:null)
                /!*const vehicleC=[];*!/


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
});*/




