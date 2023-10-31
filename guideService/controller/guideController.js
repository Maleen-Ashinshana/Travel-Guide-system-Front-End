import {GuideDTO} from "../dto/guideDTO.js";

export  class GuideController{
    constructor() {
        this.guideUrl="http://localhost:9092/Guide/api/v1/guide";

    }

}
const openButton=document.getElementById("btn-add-guider-page")
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const newPage = document.getElementById("newPage");
$('#cardContainer').on("click",".btn-delete-guide",function (e){
    console.log(e.target.id)
    const guideId=e.target.id;
    $.ajax({
        type: "DELETE",
        url: `http://localhost:9092/Guide/api/v1/guide/${guideId}`,
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
})
$('#cardContainer').on("click",".btn-update-guide",function (e){
    console.log(e.target.id + "Update")
    overlay.style.display = "block";
    newPage.style.display = "block";

    const id=e.target.id
    console.log(id)
    $.ajax({
        type: "GET",
        url: `http://localhost:9092/Guide/api/v1/guide/${id}`,
        dataType: 'json',
        success: ()=> {
            /*this.getAllVehicles()
            this.loadData()*/
            console.log(id.guide_name)
        },
        error: function (error) {
            console.log("No: " + error);
        }
    });


})
document.getElementById('btn-save-guide').addEventListener('click',function (){
    const guide_name=$('#txt-guide-name').val()
    const guide_address=$('#txt-guide-address').val()
    const age=$('#txt-guide-age').val()
    const contact_number=$('#txt-guide-contact').val()
    const gender=$('#gender').val()
    const experience=$('#txt-guide-experiences').val()
    const man_day_value=$('#txt-guide-manValue').val()
    const remark=$('#remarks').val()
    const guide_image=$('#profilePicture')[0].files[0]
    const guide_nic_image=$('#nicImage')[0].files[0]
    const guide_id_image=$('#idImage')[0].files[0]

    console.log(gender+"*****")
    console.log(age+"*****")

    const  guideDto=new GuideDTO(guide_name,guide_address,age,contact_number,gender,experience,man_day_value,remark,guide_image,guide_nic_image,guide_id_image);

    const  formData=new FormData();
    formData.append("GuideDTO",new Blob([JSON.stringify(guideDto)],{type:'application/json'}))
    formData.append("guide_name",guide_name);
    formData.append("guide_address",guide_address);
    formData.append("age",age);
    formData.append("contact_number",contact_number);
    formData.append("gender",gender);
    formData.append("experience",experience);
    formData.append("man_day_value",man_day_value);
    formData.append("remark",remark);
    formData.append("guide_image",guide_image);
    formData.append("guide_nic_image",guide_nic_image);
    formData.append("guide_id_image",guide_id_image);

    console.log(guide_address+"Saved")
    console.log(guide_address+"Saved")

    $.ajax({
        type:"POST",
        url:"http://localhost:9092/Guide/api/v1/guide",
        data:formData,
        processData: false,
        contentType: false,

        success:(response=>{
            console.log("Saved"   +response.data);
        }),
        error:(error=>{
            console.log("Not Saved"+error.responseText);
        })
    })
});


$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:9092/Guide/api/v1/guide',
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            data.forEach(function(item) {

                console.log(item)

                const card = `

                    <div class="card" id="load-guide-filed-card">
                       <img src="data:image/**;base64,${item.profile_picture}" id="load-guide-image">
                        <p>Name: ${item.guide_name}</p>
                        <p>Address: ${item.address}</p>
                        <p>Age: ${item.age}</p>
                        <p>Gender: ${item.gender}</p>
                        <p>Experience: ${item.experience}</p>
                        <p>Man Day Value: ${item.man_day_value}</p>
                        <p>Remark: ${item.remark}</p>
                        
                        <img src="../../icon/garbage-bin_2450285.png" id="${item.guide_id}" class="btn-delete-guide">
                        <img src="../../icon/pencil.png" id="${item.guide_id}" class="btn-update-guide">
                    </div>
                `;
                console.log(item.guide_id)
                $('#cardContainer').append(card);
            });
        },
        error: function() {
            console.error('Failed to retrieve data');
        }

    });

});
$(document).ready(function () {
    // Function to filter and show only the selected vehicle card
    function filterAndShowCard(searchTerm) {
        const container = $('#cardContainer');

        // Loop through the vehicle cards
        $('.card').each(function () {
            const card = $(this);
            const guideName = card.find('p:contains("Name:")').text();

            // Check if the card's guide_name matches the search term
            if (guideName.toLowerCase().includes(searchTerm.toLowerCase())) {
                card.show();
            } else {
                card.hide();
            }
        });
    }

    // Initial loading of all vehicle cards
    filterAndShowCard('');

    // Add an event listener to the search button
    $('#search-btn-guide').click(function () {
        const searchTerm = $('#searchGuide').val();
        filterAndShowCard(searchTerm);
    });
});





