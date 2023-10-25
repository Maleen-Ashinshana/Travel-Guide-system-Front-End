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

    const hotel_image=$('#hotel-image-input1,#hotel-image-input2,#hotel-image-input3')[0].files[0];
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
});

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8086/hotel/api/v1/hotel',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (hotel) {
                console.log(hotel.hotel_id + "******");
                console.log(hotel.hotel_name + "******");
                console.log(hotel.hotel_category + "*******");
                // Make an AJAX request to retrieve images for the current vehicle
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8086/hotel/api/v1/hotelImage/${hotel.hotel_id}`,
                    dataType: 'json',
                    success: function (images) {
                        console.log("LoadImage " + JSON.stringify(images));
                        const card = `
                            <div class="card" id="load-vehicle-filed-card">
                                <img src="data:image/**;base64,${images[0].hotel_image}" id="load-vehicle-image">
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
});