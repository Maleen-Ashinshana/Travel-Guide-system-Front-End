import {GuideDTO} from "../dto/guideDTO.js";

export  class GuideController{
    constructor() {
        this.guideUrl="http://localhost:9091/Guide/api/v1/guide";

    }
/*    loadGuidersData(Data){
        const guide=document.getElementById("data-container")
        guide.innerHTML="";


        console.log(Data)
        Data.forEach(g=>{
            const guiderCard=document.createElement("div");
            guiderCard.className="card col-lg-3 col-mn-6 col-sm-12 m-4";
            /!*guiderCard.id=g.gui*!/
            guiderCard.innerHTML=` <div class="card-body">
                                <h6 class="mb-2">Guide Id: <span class="guideId" style="color: #0a53be">${guide.guideId}</span></h6>
                                <h5 class="card-title">${guide.guideName}</h5>
                                <img class="card-img-top" src="data:image/!**;base64,${guide.guideProfileImage}" alt="Card image cap">
                                <h5 class="contact mt-3">${guide.contact}</h5>
                                <button id="delete" class="btn btn-danger" data-bs-toggle = "modal" data-bs-target="#modal">Delete</button>
                                </div>`;
            guide.append(guiderCard);
        })
    }*/
  /*  getAllGuiders(){
        $.ajax({
            url:this.guideUrl,
            type:"Get",
            dataType:"json",
            success:(response=>{
                console.log("Done"+response.data)
            }),
            error:(error=>{
                console.log("No" + error.responseText)
            })
        })
    }*/
}
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
        url:"http://localhost:9091/Guide/api/v1/guide",
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

/*$(document).ready(function() {
    // Replace '1' with the desired guide_id_image
    const guideIdImage = 1;

    $.get(`http://localhost:9091/Guide/api/v1/guide${guideIdImage}`, function(guide) {
        // Create HTML structure to display the guide's data
        const guideCard = `
            <div class="card">
                <img src="${guide.guide_image}" alt="${guide.guide_name}">
                <p>Name: ${guide.guide_name}</p>
                <p>Address: ${guide.guide_address}</p>
                <p>Age: ${guide.age}</p>
                <p>Contact Number: ${guide.contact_number}</p>
                <p>Gender: ${guide.gender}</p>
                <p>Experience: ${guide.experience}</p>
                <p>Man Day Value: ${guide.man_day_value}</p>
                <p>Remark: ${guide.remark}</p>
                <img src="${guide.guide_nic_image}" alt="NIC Image">
            </div>
        `;

        // Display the guide's data in the guideContainer
        $('#guideContainer').html(guideCard);
    })
        .fail(function() {
            console.error('Failed to retrieve guide data');
        });
});*/


/*$(document).ready(function (){
    const  cardContainer=$('#cardContainer');

    $.ajax({
        url:"http://localhost:9091/Guide/api/v1/guide",
        method:'GET',
        dataType:'json',
        success:function (data){
            data.forEach(function (item){
                var  card=createCard(item);
                cardContainer.append(card);
            });
        },
        error:function (xhr,status,error){
            console.log('Error',error);
        }
    });
    function createCard(item){
        var card=$("<div></div>").addClass("card");
        var content=$("<p></p>").text(item.content)

        card.append(content);
        return card
    }
});*/
/*const cardContainer = document.getElementById("cardContainer");


fetch('http://localhost:9091/Guide/api/v1/guide')
    .then(response => response.json())
    .then(data => {
        // Process the data and create cards
        data.forEach(item => {
            const card = createCard(item);
            cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

   /!* const guideId = document.createElement("h3");
    guideId.textContent = item.guideId;*!/

    const content = document.createElement("p");
    content.textContent = item.content;

    /!*card.appendChild(guideId);*!/
    card.appendChild(content);

    return card;
}*/

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:9091/Guide/api/v1/guide',
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
                        <img src="data:image/**;base64,${item.guide_nic_image}" id="load-guide-nic-image">
                        <img src="data:image/**;base64,${item.guide_id_image}" id="load-guide-id-image">
                        <img src="../../icon/garbage-bin_2450285.png" id="load-guide-delete-image">
                        <img src="../../icon/pencil.png" id="load-guide-update-image">
                    </div>
                `;

                $('#cardContainer').append(card);
            });
        },
        error: function() {
            console.error('Failed to retrieve data');
        }

    });

});




