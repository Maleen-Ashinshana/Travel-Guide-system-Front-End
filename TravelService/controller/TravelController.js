/*import {AreaModel} from "../../TravelArea/model/AreaModel.js";
import {AreaImageModel} from "../../TravelArea/model/AreaImageModel.js";*/



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
})