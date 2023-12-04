import {HotelImageModel} from "../model/hotelImageModel.js";
import {HotelModel} from "../model/hotelModel.js";
export class HotelController{


}
$('#hotelCardConteiner').on("click", ".btn-delete-hotel", function (e) {
    const hotelId=e.target.id;
    console.log(hotelId)
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8086/hotel/api/v1/hotel/${hotelId}`,
        dataType: 'json',
        success: ()=> {
            /*this.getAllVehicles()
            this.loadData()*/
            console.log("DELETED")
            /*alert("Deleted")*/
        },

        error: function (error) {
            console.log("Failed to Delete: " + error);
            alert("Are You Sure")
        }
    });


})
$('#hotelCardConteiner').on("click", ".btn-update-hotel", function (e) {
    const  hotelId=e.target.id;
    console.log(hotelId);


})
function openPage(){
    const VehicleOpenButton=document.getElementById("btn-add-hotel-page")
    const VehicleCloseButton = document.getElementById("hotelNewPageCloseButton");
    const VehicleOverlay = document.getElementById("hotelOverLay");
    const VehicleNewPage = document.getElementById("newHotelPage");

    const card=document.getElementById("hotelCardConteiner");


    VehicleOpenButton.addEventListener("click", () => {
        VehicleOverlay.style.display = "block";
        VehicleNewPage.style.display = "block";
        card.style.display="none";

    });

    VehicleCloseButton.addEventListener("click", () => {
        VehicleOverlay.style.display = "none";
        VehicleNewPage.style.display = "none";
        card.style.display="block";
    });
    console.log("******")
}
openPage();

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
    console.log(hotelFee + "EEEEEEEE")
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
               alert("Hotel Saved")
        },
        error: function(error) {
            // Handle any errors
            console.error('Error:', error);
            console.error("No");1
            alert("No")
        }

    })
})
/*document.getElementById('btn-hotel-save').addEventListener('click',function (){

    const hotelName = $('#txt-hotel-name').val();
    const hotelCategory = $('#hotel-category').val();
    const location=$('#txt-hotel-location').val();
    const email=$('#txt-hotel-email').val();
    const contactNumber1=$('#txt-hotel-contact1').val();
    const contactNumber2=$('#txt-hotel-contact2').val();
    const hotelFee=$('#txt-hotel-fee').val();
    const remark=$('#txt-hotel-remark').val();

    const hotel_image=$('#fileInputHotel')[0].files[0];
    /!*const hotel_image=$('#hotel-image-input1,#hotel-image-input2,#hotel-image-input3')[0].files[0];*!/
    /!*    const hotel_image2=$('#hotel-image-input2')[0].files[0];
        const hotel_image2=$('#hotel-image-input3')[0].files[0];*!/


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
})*/
/*document.getElementById('btn-hotel-save').addEventListener('click', function () {
    const hotelName = $('#txt-hotel-name').val();
    const hotelCategory = $('#hotel-category').val();
    const location = $('#txt-hotel-location').val();
    const email = $('#txt-hotel-email').val();
    const contactNumber1 = $('#txt-hotel-contact1').val();
    const contactNumber2 = $('#txt-hotel-contact2').val();
    const hotelFee = $('#txt-hotel-fee').val();
    const remark = $('#txt-hotel-remark').val();

    // Get an array of selected image files
    const hotelImages = $('#fileInputHotel')[0].files;

    const hotelModel = new HotelModel(hotelName, hotelCategory, location, email, contactNumber1, contactNumber2, hotelFee, remark);

    // Create a FormData object to send the data to the server
    const formData = new FormData();

    // Append the hotel model as JSON
    formData.append('hotelModel', new Blob([JSON.stringify(hotelModel)], { type: 'application/json' }));

    // Append each image file to the FormData
    for (let i = 0; i < hotelImages.length; i++) {
        formData.append('hotelImages', hotelImages[i]);
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8086/hotel/api/v1/hotel",
        data: formData,
        processData: false,
        contentType: false, // Set the content type
        success: function (response) {
            console.log("Saved Hotel with ID: " + response.hotel_id);

            // Handle the success and continue with other operations
        },
        error: function (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    });
});*/

/*document.getElementById('btn-hotel-save').addEventListener('click', function () {
    const hotelName = $('#txt-hotel-name').val();
    const hotelCategory = $('#hotel-category').val();
    const location = $('#txt-hotel-location').val();
    const email = $('#txt-hotel-email').val();
    const contactNumber1 = $('#txt-hotel-contact1').val();
    const contactNumber2 = $('#txt-hotel-contact2').val();
    const hotelFee = $('#txt-hotel-fee').val();
    const remark = $('#txt-hotel-remark').val();

    // Get an array of selected image files
    const hotelImages = $('#fileInputHotel')[0].files;

    const hotelModel = new HotelModel(hotelName, hotelCategory, location, email, contactNumber1, contactNumber2, hotelFee, remark);

    // Create a FormData object to send the data to the server
    const formData = new FormData();

    // Append the hotel model as JSON
    formData.append('hotelModel', new Blob([JSON.stringify(hotelModel)], { type: 'application/json' }));

    // Append each image file to the FormData
    for (let i = 0; i < hotelImages.length; i++) {
        formData.append('hotelImages', hotelImages[i]);
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8086/hotel/api/v1/hotel",
        data: formData,
        processData: false,
        contentType: false, // Set the content type
        success: function (response) {
            console.log("saved " + response.hotel_id);
            console.log(response.hotel_id + " NEW");
            console.log(response);

            // Handle the success and continue with other operations
        },
        error: function (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    });
});*/

/*document.getElementById('btn-hotel-save').addEventListener('click',function (){

    const hotelName = $('#txt-hotel-name').val();
    const hotelCategory = $('#hotel-category').val();
    const location=$('#txt-hotel-location').val();
    const email=$('#txt-hotel-email').val();
    const contactNumber1=$('#txt-hotel-contact1').val();
    const contactNumber2=$('#txt-hotel-contact2').val();
    const hotelFee=$('#txt-hotel-fee').val();
    const remark=$('#txt-hotel-remark').val();

    const hotel_image=$('#fileInputHotel')[0].files[0];
    /!*const hotel_image=$('#hotel-image-input1,#hotel-image-input2,#hotel-image-input3')[0].files[0];*!/
/!*    const hotel_image2=$('#hotel-image-input2')[0].files[0];
    const hotel_image2=$('#hotel-image-input3')[0].files[0];*!/



    const hotelModel=new HotelModel(hotelName, hotelCategory, location, email, contactNumber1, contactNumber2, hotelFee, remark)
    const hotelImageModel=new HotelImageModel(hotel_image)
    /!*const hotelImageModel=[];*!/
    /!*for (let i = 0; i < hotel_image.length; i++) {

        const hotelImageModel = new HotelImageModel(hotel_image[i]);
        hotel_image.push(hotelImageModel);
    }*!/
    /!*const hotelImageModel=new HotelImageModel(hotel_image)*!/
    $.ajax({
        type:"POST",
        url:"http://localhost:8086/hotel/api/v1/hotel",
        data: JSON.stringify(hotelModel),
        contentType: 'application/json', // Set the content type
        success: function(response) {

            console.log("saved"+response.hotel_id)

            console.log(response.hotel_id  +  "NEW")
            console.log(response)
            const formData = new FormData();
           /!* formData.append("hotelImageModel", new Blob([JSON.stringify(hotelImageModel[i])], {type: 'application/json'}));*!/
            formData.append("hotelImageModel", new Blob([JSON.stringify(hotel_image)], {type: 'application/json'}));
            formData.append("hotel_image", hotel_image);
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

    });
});*/
/*for (let i = 0; i < hotelImageModel.length; i++) {

    const formData = new FormData();
    formData.append("hotelImageModel", new Blob([JSON.stringify(hotelImageModel[i])], {type: 'application/json'}));
    formData.append("hotel_image", hotelImageModel[i]);
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
}*/
/*const  formData=new FormData();
formData.append("hotelImageModel",new Blob([JSON.stringify(hotelImageModel)],{type:'application/json'}));
formData.append("hotel_image",hotel_image[i]);*/

$(document).ready(function () {
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
                        <button type="button" class="btn-update-hotel" id="${hotel.hotel_id}">Update</button>
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
});
$(document).ready(function () {
    // Function to filter and show only the selected vehicle card
    function filterAndShowCard(searchTerm) {
        const container = $('#hotelCardConteiner');

        // Loop through the vehicle cards
        $('.hotelCard').each(function () {
            const card = $(this);
            const hotelCa = card.find('p:contains("Hotel Category:")').text();
            const hotelName = card.find('#hotelName').text();

            // Check if the card's brand matches the search term
            if (hotelName.toLowerCase().includes(searchTerm.toLowerCase()) || hotelCa.toLowerCase().includes(searchTerm.toLowerCase())) {
                card.show();
            } else {
                card.hide();
            }
        });
    }

    // Initial loading of all vehicle cards
    filterAndShowCard('');

    // Add an event listener to the search button
    $('#search-btn-hotel').click(function () {
        console.log("SEARCH");
        const searchTerm = $('#searchHotel').val();
        filterAndShowCard(searchTerm);

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
/*$(document).ready(function() {
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
