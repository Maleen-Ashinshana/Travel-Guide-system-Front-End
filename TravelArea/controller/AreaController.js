import {AreaModel} from "../model/AreaModel.js";
import {AreaImageModel} from "../model/AreaImageModel.js";





$('#areaCardContainer').on("click", ".btn-delete", function (e) {
    console.log(e.target.id)
    const areaId=e.target.id;
    $.ajax({
        type: "DELETE",
        url: `http://localhost:9091/travel/api/v1/area/${areaId}`,
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

});
$(document).ready(function () {
    // Function to filter and show only the selected vehicle card
    function filterAndShowCard(searchTerm) {
        const container = $('#areaCardContainer');

        // Loop through the vehicle cards
        $('.areaCard').each(function () {
            const card = $(this);
            const brand = card.find('#location').text();

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
/*        const currentLeft = parseInt($('#search-btn').css('right'), 1);
        const newLeft = currentLeft + ($(window).width() * 0.5);*/

        // Apply the new left position
       /* $('#search-btn').css('right', newLeft);*/
    });

});
document.getElementById('btn-area-save').addEventListener('click',function (){
    console.log("OI")

    const area_location=$('#txt-area').val();
    const area_image=$('#fileInput')[0].files[0];


    const areas=new AreaModel(area_location);
    const images=new AreaImageModel(area_image);

    $.ajax({
        type: "POST",
        url: "http://localhost:9091/travel/api/v1/area",
        data: JSON.stringify(areas),
        contentType: 'application/json',
        success:function (response){

            const formData=new FormData();
            formData.append("images",new Blob([JSON.stringify(images)],{type:'application/json'}));
            formData.append("area_image",area_image);

            $.ajax({
                type:"POST",
                url:`http://localhost:9091/travel/api/v1/areaImage/${response.area_id}`,
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

});
/*<img src="data:image/jpg;base64">*/
$(document).ready(function (){
    $.ajax({
        url: 'http://localhost:9091/travel/api/v1/area',
        method: 'GET',
        dataType: 'json',
        success:function (data){
            console.log(data)
            data.forEach(function (area){
                console.log(area.areaImages)
               /* console.log(area.imageDTOS.length!==0?area.imageDTOS[0].area_image:null)*/
                const card=`
                <div class="areaCard" id="load-area-card">
                <img src="data:image/jpg;base64,${area.area_image}" class="areaImage" id="areaImage">
                <p id="id">${area.area_id}</p>
                <p id="location">Area Location :${area.area_location}</p>
                <button class="btn-delete" id="${area.area_id}">Delete</button>
                <button class="btn-update">update</button>
                </div>
                `;
                console.log(area.area_id)
                $('#areaCardContainer').append(card);

                $.ajax({
                    type: "GET",
                    url: `http://localhost:9091/travel/api/v1/areaImage/${area.area_id}`,
                    dataType: 'json',
                    success:function (images){
                        const imageElement=$('.areaImage[data-area-id="${area.area_id}"]');
                        if (images.length>0){
                            const base64Image=images[0].area_image;
                            imageElement.attr('src','data:image/jpeg:base64',$(base64Image));
                        }
                    },
                    error: function (error) {
                        console.log("Failed to load image: " + error);
                    }

                })

            })
        },error: function () {
            console.error('Failed to retrieve data');
        }

    });
})