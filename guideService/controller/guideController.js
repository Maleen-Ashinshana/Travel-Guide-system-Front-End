import {GuideDTO} from "../dto/guideDTO.js";

export class GuideController {
    constructor() {
        this.guideUrl = "http://localhost:9092/Guide/api/v1/guide";



    }

}
/*function open(){

    const openButton = document.getElementById("btn-add-guider-page")
    const closeButton = document.getElementById("closeButton");
    const overlay = document.getElementById("overlay");
    const newPage = document.getElementById("newPage");

    openButton.addEventListener("click", () => {
        overlay.style.display = "block";
        newPage.style.display = "block";
    });
    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
        newPage.style.display = "none";
    });

}
open();*/
$('#cardContainer').on("click", ".btn-delete-guide", function (e) {
    console.log(e.target.id)
    const guideId = e.target.id;
    $.ajax({
        type: "DELETE",
        url: `http://localhost:9092/Guide/api/v1/guide/${guideId}`,
        dataType: 'json',
        success: () => {
            /*this.getAllVehicles()
            this.loadData()*/
            console.log("DELETED")
            alert("Guide Deleted!")
        },
        error: function (error) {
            console.log("Failed to Delete: " + error);
            alert("Are you sure you want to delete this guide?")
        }
    });
});
$('#cardContainer').on("click", ".btn-update-guide", function (e) {
    const guideId = e.currentTarget.id;
    console.log(guideId);
    var guideDetails = {
        guide_name: $(`#load-guide-filed-card${guideId} #lbl-guide-name`).text().replace('Name: ', 'guide_name'),
        address: $(`#load-guide-filed-card${guideId} #lbl-guide-address`).text().replace('Address: ', ''),
        age: $(`#load-guide-filed-card${guideId} #lbl-guide-age`).text().replace('Age: ', ''),
        gender: $(`#load-guide-filed-card${guideId} #lbl-guide-gender`).text().replace('Gender: ', ''),
        experience: $(`#load-guide-filed-card${guideId} #lbl-guide-ex`).text().replace('Experience: ', ''),
        manDayValue: $(`#load-guide-filed-card${guideId} #lbl-guide-value`).text().replace('Man Day Value: ', ''),
        remark: $(`#load-guide-filed-card${guideId} #lbl-guide-remark`).text().replace('Remark: ', '')
    };

    console.log('Guide Details:', guideDetails);
});

  /*  var guideName = $('#lbl-guide-name' + guideId + ' .guide_name').text().replace('Name: ', '');
    var guideAddress = $('#' + guideId + ' .address').text().replace('Address: ', '');

    console.log('Name:', guideName);
    console.log('Address:', guideAddress);*/



/*$('#cardContainer').on("click", ".btn-update-guide", function (e) {
    const  guideId=e.target.id;
    console.log(guideId)
    open();


});*/
/*$('#cardContainer').on("click", ".btn-update-guide", function (e) {
    const guideId = e.currentTarget.id; // Use currentTarget instead of target
    console.log(guideId);
    var de=guideId.getElementsByClassName("card")[0].innerText;
    console.log(de+ "CARD")

    /!*const guide_name = $(this).closest('.card').data('guide_id');
    console.log("Guide Name: " + guide_name);*!/

/!*
    const guideName=e.currentTarget.guide_name;
    console.log(guideName)
    overlay.style.display = "block";
   /!* closeButton.style.display="block";
    const updateGuidePane=document.getElementById("update-guide-pane")
    updateGuidePane.style.display="block";*!/
    newPage.style.display="block";
*!/

    /!**!/
    /!*var cardContainer=document.getElementById("cardGuideContener")
    var card=document.getElementById("load-guide-filed-card")
    for (let i = 1; i <cardContainer.length ; i++) {

    }*!/
   /!* var clickedCard=this.parentNode;
    var CardDetails=clickedCard.getElementsByClassName("card")[0].innerText;
    console.log(CardDetails+"CARD")*!/



});*/

/*function open(guideId) {
    const openButton = document.getElementById("btn-add-guider-page");
    const closeButton = document.getElementById("closeButton");
    const overlay = document.getElementById("overlay");
    const newPage = document.getElementById("newPage");

    // Add event listener only once (not inside the open function)
    openButton.addEventListener("click", () => {
        overlay.style.display = "block";
        newPage.style.display = "block";
        // You can use the guideId here if needed
        console.log("Clicked guideId inside open function: " + guideId);
    });

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
        newPage.style.display = "none";
    });
}*/

/*$('#cardContainer').on("click", ".btn-delete-guide", function (e) {


})*/

document.getElementById('btn-save-guide').addEventListener('click', function () {
    const guide_name = $('#txt-guide-name').val()
    const guide_address = $('#txt-guide-address').val()
    const age = $('#txt-guide-age').val()
    const contact_number = $('#txt-guide-contact').val()
    const gender = $('#gender').val()
    const experience = $('#txt-guide-experiences').val()
    const man_day_value = $('#txt-guide-manValue').val()
    const remark = $('#remarks').val()
    const guide_image = $('#profilePicture')[0].files[0]
    const guide_nic_image = $('#nicImage')[0].files[0]
    const guide_id_image = $('#idImage')[0].files[0]

    console.log(gender + "*****")
    console.log(age + "*****")

    const guideDto = new GuideDTO(guide_name, guide_address, age, contact_number, gender, experience, man_day_value, remark, guide_image, guide_nic_image, guide_id_image);

    const formData = new FormData();
    formData.append("GuideDTO", new Blob([JSON.stringify(guideDto)], {type: 'application/json'}))
    formData.append("guide_name", guide_name);
    formData.append("guide_address", guide_address);
    formData.append("age", age);
    formData.append("contact_number", contact_number);
    formData.append("gender", gender);
    formData.append("experience", experience);
    formData.append("man_day_value", man_day_value);
    formData.append("remark", remark);
    formData.append("guide_image", guide_image);
    formData.append("guide_nic_image", guide_nic_image);
    formData.append("guide_id_image", guide_id_image);

    console.log(guide_address + "Saved")
    console.log(guide_address + "Saved")

    $.ajax({
        type: "POST",
        url: "http://localhost:9092/Guide/api/v1/guide",
        data: formData,
        processData: false,
        contentType: false,

        success: (response => {
            console.log("Saved" + response.data);
            alert("Guide Created!")
        }),
        error: (error => {
            console.log("Not Saved" + error.responseText);
            alert("Guide Is Not Create" + error.responseText)
        })
    })
});


$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:9092/Guide/api/v1/guide',
        method: 'GET',
        dataType: 'json',
        success: function (data) {

            data.forEach(function (item) {

                console.log(item)

                const card = `

                    <div class="card" id="load-guide-filed-card">
                       <img src="data:image/**;base64,${item.profile_picture}" id="load-guide-image">
                        <p id="lbl-guide-name">Name: ${item.guide_name}</p>
                        <p id="lbl-guide-address">Address: ${item.address}</p>
                        <p id="lbl-guide-age">Age: ${item.age}</p>
                        <p id="lbl-guide-gender">Gender: ${item.gender}</p>
                        <p id="lbl-guide-ex">Experience: ${item.experience}</p>
                        <p id="lbl-guide-value">Man Day Value: ${item.man_day_value}</p>
                        <p id="lbl-guide-remark">Remark: ${item.remark}</p>
                        
                        <img src="../../icon/garbage-bin_2450285.png" id="${item.guide_id}" class="btn-delete-guide">
                        <img src="../../icon/pencil.png" id="${item.guide_id}" class="btn-update-guide">
                    </div>
                `;
                console.log(item.guide_id)
                $('#cardContainer').append(card);
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





