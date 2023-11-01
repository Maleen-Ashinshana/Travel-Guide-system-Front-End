/*import {AreaModel} from "../../TravelArea/model/AreaModel.js";
import {AreaImageModel} from "../../TravelArea/model/AreaImageModel.js";
import {HotelController} from "../../hotelService/controller/hotelController.js";
import {HotelImageModel} from "../../hotelService/model/hotelImageModel.js";
import {HotelModel} from "../../hotelService/model/hotelModel.js";*/



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

/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            const hotelSelector = $('#hotel');

            $.each(data, function (index, hotel) {
                hotelSelector.append($('<option>', {
                    value: hotel.hotel_id,
                    text: hotel.hotel_name
                }));
            });
        },
        error: function (error) {
            console.log("Error: ", error);
        }
    });
});*/
/*$(document).ready(function () {
    const hotelSelector = $('#hotel');
    const hotelDetailsDiv = $('#hotelImages');

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
                    text: hotel.hotel_name
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
                console.log(hotelDetails.imageDTOS.length !== 0 ? hotelDetails.imageDTOS[0].hotel_images : null)
                console.log("Selected hotel details:", hotelDetails);

                hotelDetailsDiv.html('');
                hotelDetailsDiv.append('<img src="data:image/!**;base64,${hotelDetails.imageDTOS.length !== 0 ? hotelDetails.imageDTOS[0].hotel_images : null}"   class="hotelImage" id="hotelImage">')
                hotelDetailsDiv.append('<p>Hotel Category: ' + hotelDetails.hotel_category + '</p>');
                hotelDetailsDiv.append('<p>Location: ' + hotelDetails.location + '</p>');
                hotelDetailsDiv.append('<p>Email: ' + hotelDetails.email + '</p>');
                hotelDetailsDiv.append('<p>Contact Number1: ' + hotelDetails.contact_number1 + '</p>');
                hotelDetailsDiv.append('<p>Contact Number2: ' + hotelDetails.contact_number2 + '</p>');
                hotelDetailsDiv.append('<p>Hotel Fee: ' + hotelDetails.hotelFee + '</p>');
                hotelDetailsDiv.append('<p>Remark: ' + hotelDetails.remark + '</p>');

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
});*/

$(document).ready(function () {
    const hotelSelector = $('#hotel');
    const hotelDetailsDiv = $('#hotelImages');

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
                    text: hotel.hotel_name
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
                console.log(hotelDetails.imageDTOS.length !== 0 ? hotelDetails.imageDTOS[0].hotel_images : null)
                console.log("Selected hotel details:", hotelDetails);

                hotelDetailsDiv.html('');
                hotelDetailsDiv.append(`<img src="data:image/jpeg;base64,${hotelDetails.imageDTOS.length !== 0 ? hotelDetails.imageDTOS[0].hotel_images : null}" class="hotelImage" id="hotelImage">`);
                hotelDetailsDiv.append('<p>Hotel Category: ' + hotelDetails.hotel_category + '</p>');
                hotelDetailsDiv.append('<p>Location: ' + hotelDetails.location + '</p>');
                hotelDetailsDiv.append('<p>Email: ' + hotelDetails.email + '</p>');
                hotelDetailsDiv.append('<p>Contact Number1: ' + hotelDetails.contact_number1 + '</p>');
                hotelDetailsDiv.append('<p>Contact Number2: ' + hotelDetails.contact_number2 + '</p>');
                hotelDetailsDiv.append('<p>Hotel Fee: ' + hotelDetails.hotelFee + '</p>');
                hotelDetailsDiv.append('<p>Remark: ' + hotelDetails.remark + '</p>');


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


/*$(document).ready(function () {
    // Populate the hotel dropdown with options
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const hotelSelector = $('#hotel');
            data.forEach(function (hotel) {
                hotelSelector.append($('<option>', {
                    value: hotel.hotel_id,
                    text: hotel.hotel_name
                }));
            });
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    });

    // Add a change event handler to the hotel dropdown
    $('#hotel').change(function () {
        const selectedHotelId = $(this).val();
        // Fetch hotel details based on the selected hotel ID
        $.ajax({
            url: 'http://localhost:8086/hotel/api/v1/hotel/' + selectedHotelId,
            method: 'GET',
            dataType: 'json',
            success: function (hotelData) {
                console.log(hotelData)
                const div=$('#hotelImages');

                // Update the hotel details section with the retrieved data
                /!*$('#hotel-image').attr('src', hotelData.image_url);
                $('#star-rating').text('Star Rating: ' + hotelData.star_rating);*!/
            },
            error: function (error) {
                console.log("Failed to fetch hotel details:", error);
            }
        });
    });
});*/

/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data+"DATA")
            data.forEach(function (hotel) {
                console.log(hotel)


                $.ajax({
                    type: "GET",
                    url: `http://localhost:8086/hotel/api/v1/hotelImage/${hotel.hotel_id}`,
                    dataType: 'json',
                    success: function (images) {
                        const imageElement = $(`.hotelImage[data-hotel-id="${hotel.hotel_id}"]`);
                        if (images.length > 0) {
                            const base64Image = images[0].hotel_image;
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
    // Populate the hotel dropdown with options
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const hotelSelector = $('#hotel');
            $.each(data, function (index, hotel) {
                hotelSelector.append($('<option>', {
                    value: hotel.hotel_id,
                    text: hotel.hotel_name
                }));
            });
        },
        error: function (error) {
            console.log("NO", error);
        }
    });

    // Add a change event handler to the hotel dropdown
    $('#hotel').change(function () {
        const selectedHotelId = $(this).val();
        // Fetch hotel details based on the selected hotel ID (adjust the URL accordingly)
        $.ajax({
            url: 'http://localhost:8086/hotel/api/v1/hotelImage/' + selectedHotelId, // Adjust the URL
            method: 'GET',
            dataType: 'json',
            success: function (hotelData) {
                console.log(hotelData)
                console.log(hotelData.hotel_name)
                // Update the hotel details section with the retrieved data
               /!* $('#hotel-image').attr('src', hotelData.image_url); // Set the image source
                $('#star-rating').text('Star Rating: ' + hotelData.star_rating);*!/
            },
            error: function (error) {
                console.log("Failed to fetch hotel details:", error);
            }
        });
    });
});*/


/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data+"DATA")
            data.forEach(function (hotel) {
                console.log(hotel)
                console.log(hotel.imageDTOS.length !== 0 ? hotel.imageDTOS[0].hotel_images : null)
                // Create a card for each hotel
                const card = `
                    <div class="hotelCard" id="load-hotel-filed-card">
                        <img src="data:image/!**;base64,${hotel.imageDTOS.length !== 0 ? hotel.imageDTOS[0].hotel_images : null}"   class="hotelImage" id="hotelImage">
                        <p id="hotelName">${hotel.hotel_name}</p>
                        <p id="hotelCategory">Hotel Category: ${hotel.hotel_category}</p>
                        <p id="hotelLocation">Location: ${hotel.location}</p>
                        <p id="hotelEmail">Email: ${hotel.email}</p>
                        <p id="hotelContact1">Contact Number1: ${hotel.contact_number1}</p>
                        <p id="hotelContact2">Contact Number2: ${hotel.contact_number2}</p>
                        <p id="hotelFee">Hotel Fee: ${hotel.hotelFee}</p>
                        <p id="hotelRemark">Remark: ${hotel.remark}</p>

                        <button type="button" class="btn-delete-hotel" id="${hotel.hotel_id}">Delete</button>
                        <button type="button" class="btn-update-hotel">Update</button>
                    </div>
                `;
                console.log(hotel.hotel_id+"kakakaakakak")
                $('#hotelCardConteiner').append(card);

                $.ajax({
                    type: "GET",
                    url: `http://localhost:8086/hotel/api/v1/hotelImage/${hotel.hotel_id}`,
                    dataType: 'json',
                    success: function (images) {
                        const imageElement = $(`.hotelImage[data-hotel-id="${hotel.hotel_id}"]`);
                        if (images.length > 0) {
                            const base64Image = images[0].hotel_image;
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
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            const hotelSelector = $('#hotel'); // Use a more appropriate name

            $.each(data, function (index, hotel) {
                hotelSelector.append($('<option>', {
                    value: hotel.hotel_id,     // Corrected field name to "hotel_id"
                    text: hotel.hotel_name    // Corrected field name to "hotel_name"
                }));
            });
        },
        error: function (error) {
            console.log("NO", error);
        }
    });
});*/

/*
$(document).ready(function (){
    $.ajax({
        url:'http://localhost:8086/hotel/api/v1/hotel',
        method:'GET',
        dataType:'json',
        success:function (data){
            console.log(data)
            const areaSelector=$('#hotel');

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
})*/
