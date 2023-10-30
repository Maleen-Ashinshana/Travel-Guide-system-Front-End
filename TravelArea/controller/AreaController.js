import {AreaModel} from "../model/AreaModel.js";
import {AreaImageModel} from "../model/AreaImageModel.js";

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
                console.log(area)
                const card=`
                <div class="areaCard" id="load-area-card">
                <img src="data:image/jpg;base64">
                <p id="location">Area Location:${area.area_location}</p>
                </div>
                `;
                $('#areaCardContainer').append(card);
            })
        }

    });
})