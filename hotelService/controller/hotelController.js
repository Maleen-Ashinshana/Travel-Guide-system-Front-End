import {HotelImageModel} from "../model/hotelImageModel.js";
import {HotelModel} from "../model/hotelModel.js";
export class HotelController{

}
document.getElementById('btn-hotel-save').addEventListener('click',function (){

    const hotelName = $('#txt-hotel-name').val();
    const hotelCategory = $('#hotel-category').val();
    const location=$('#txt-hotel-location').val();
    const email=$('#txt-hotel-email').val();
    const contactNumber1=$('#txt-hotel-contact1').val();
    const contactNumber2=$('#txt-hotel-contact2').val();
    const hotelFee=$('#txt-hotel-fee').val();
    const remark=$('#txt-hotel-remark').val();

    const hotel_image=$('#fileInputHotel')[0].files[0];
    /*const hotel_image=$('#hotel-image-input1,#hotel-image-input2,#hotel-image-input3')[0].files[0];*/
/*    const hotel_image2=$('#hotel-image-input2')[0].files[0];
    const hotel_image2=$('#hotel-image-input3')[0].files[0];*/


    const hotelModel=new HotelModel(hotelName, hotelCategory, location, email, contactNumber1, contactNumber2, hotelFee, remark)
    const hotelImageModel=new HotelImageModel(hotel_image)
    $.ajax({
        type:"POST",
        url:"http://localhost:8086/hotel/api/v1/hotel",
        data: JSON.stringify(hotelModel),
        contentType: 'application/json', // Set the content type
        success: function(response) {

            console.log("saved"+response.hotel_id)

            console.log(response.hotel_id  +  "NEW")
            console.log(response)

            const  formData=new FormData();
            formData.append("hotelImageModel",new Blob([JSON.stringify(hotelImageModel)],{type:'application/json'}));
            formData.append("hotel_image",hotel_image);
            $.ajax({
                type:"POST",
                url:`http://localhost:8086/hotel/api/v1/hotelImage/${response.hotel_id}`,
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
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (hotel) {
                console.log(hotel)
                console.log(hotel.imageDTOS.length !== 0 ? hotel.imageDTOS[0].hotel_images : null)
                // Create a card for each hotel
                const card = `
                    <div class="hotel-card" id="load-hotel-filed-card">
                        <img src="data:image/**;base64, ${hotel.imageDTOS.length !== 0 ? hotel.imageDTOS[0].hotel_images : null}" class="hotelImage" data-hotel-id="${hotel.hotel_id}">
                        <p>Hotel Name: ${hotel.hotel_name}</p>
                        <p>Hotel Category: ${hotel.hotel_category}</p>
                        <p>Location: ${hotel.location}</p>
                        <p>Email: ${hotel.email}</p>
                        <p>Contact Number1: ${hotel.contact_number1}</p>
                        <p>Contact Number2: ${hotel.contact_number2}</p>
                        <p>Hotel Fee: ${hotel.hotel_fee}</p>
                        <p>Remark: ${hotel.remark}</p>
                    </div>
                `;
                $('#hotelCardContainer').append(card);

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
});

/*$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            /!*console.log(data)*!/
            data.forEach(function (hotel) {
                console.log(hotel)
                console.log(hotel.imageDTOS.length!==0?hotel.imageDTOS[0].hotel_images:null)
                /!*const vehicleC=[];*!/

                // Create a card for each vehicle
                const card = `
                            <div class="hotel-card" id="load-hotel-filed-card" >
                                <img src="data:image/!**;base64,${hotel.imageDTOS.length !== 0 ? hotel.imageDTOS[0].hotel_images:null}" id="load-hotel-image">
                                <p>Hotel Name: ${hotel.hotel_name}</p>
                                <p>Hotel Catagory: ${hotel.hotel_category}</p>
                                <p>Loaction: ${hotel.location}</p>
                                <p>Email: ${hotel.email}</p>
                                <p>Contact 1: ${hotel.contact_number1}</p>
                                <p>Contact 2: ${hotel.contact_number2}</p>
                                <p>Hotel Fee: ${hotel.hotel_fee}</p>
                                <p>Remark: ${hotel.remark}</p>
   
                            </div>
                `;
                /!* console.log(ve)*!/
                $('#hotelCardConteiner').append(card);
                console.log(hotel.hotel_id+"asd vcu iuvhuibius")

                $.ajax({
                    type: "GET",
                    url: `http://localhost:8086/hotel/api/v1/hotelImage/${hotel.hotel_id}`,
                    dataType: 'json',
                    success: function (images) {
                        console.log(images)
                        console.log(hotel.hotel_id+"adadadadadadadad")
                        const imageElement = $(`.vehicleImage[data-vehicle-id="${hotel.hotel_id}"]`);
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
/*
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            data.forEach(function (hotel) {
                console.log(hotel.imageDTOS.length!==0?hotel.imageDTOS[0].hotel_image:null)

                // Make an AJAX request to retrieve images for the current vehicle
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8086/hotel/api/v1/hotelImage/${hotel.hotel_id}`,
                    dataType: 'json',
                    success: function (images) {
                        console.log("LoadImage " + JSON.stringify(images));
                        const card = `
                            <div class="hotel-card" id="load-hotel-filed-card" >
                                <img src="data:image/!**;base64,${images[0].hotel_image}" id="load-hotel-image">
                                <p>Vehicle Brand: ${hotel.hotel_name}</p>
                                <p>Vehicle Category: ${hotel.hotel_category}</p>
                                <p>Vehicle Type: ${hotel.location}</p>
                                <p>Fuel Type: ${hotel.email}</p>
                                <p>Fuel Usage: ${hotel.contact_number1}</p>
                                <p>Hybrid Type: ${hotel.contact_number2}</p>
                                <p>Seat capacity: ${hotel.hotel_fee}</p>
                                <p>Transmission: ${hotel.remark}</p>
             
                            </div>
                        `;
                        $('#hotelCardConteiner').append(card);
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
});*/
