import {GuideDTO} from "../dto/guideDTO.js";

/*var data_arr=new Array();
const cusData="CUSTOMER";
export class guideController{
/!*    constructor() {
        this.guideapi="http://localhost:9091/Guide/api/v1/guide";
    }*!/



    /!*saveGuide(){

    }*!/
}*/
/*document.getElementById('btn-save-guide').addEventListener('click',function (){
    let pre_data=localStorage.getItem(cusData);

    if (pre_data){
        data_arr=JSON.parse(pre_data)
    }

    const guideDate=new GuideDTO(
    $('#txt-guide-name').val(),
    $('#txt-guide-address').val(),
    $('#txt-guide-age').val(),
    $('#txt-guide-gender').val(),
    $('#txt-guide-contact').val(),
    $('#choose-guide-pic').file[0]);
    data_arr.unshift(guideDate);
    localStorage.setItem(cusData,JSON.stringify(data_arr));



    let guide={
        guideName:guideDate.guideName,
        guideAddress:guideDate.address,
        guideAge:guideDate.age,
        guideGender:guideDate.guideGender,
        guideContact:guideDate.conatct,
        guideImage:guideDate.guideProfilPic,

    }
    let Guide=JSON.stringify(guide)

    console.log(Guide+"*****")*/
/*    guideDate.append('name',document.getElementById('txt-guide-name').value);
    guideDate.append('address',document.getElementById('txt-guide-address').value);
    guideDate.append('age',document.getElementById('txt-guide-age').value);
    guideDate.append('gender',document.getElementById('txt-guide-gender').value);
    guideDate.append('contact',document.getElementById('txt-guide-contact').value);
    guideDate.append('img',document.getElementById('btn-choose-guide').file[0]);*/

/*
    fetch('http://localhost:9091/travel/api/v1/guide',{
        method:'POST',
        body:guide
    })
        .then(response=>{
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.error('Error',error)
        })


});*/

/*document.getElementById("update-guide-filed").addEventListener("submit",function (e){
    e.preventDefault()
    const formData=new FormData(this)

    saveDataToBackEnd(formData);
})
function saveDataToBackEnd(formData){
    fetch('http://localhost:9091/travel/api/v1/guide',{
        method:'POST',
        body:formData,
    })
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was mot ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Handle the response from the server
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}*/

/*
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('http://localhost:9091/travel/api/v1/guide', (req, res) => {
    const data = req.body; // Access the submitted data

    // Save the data to the database (database connection and logic required here)

    // Send a response (e.g., confirmation or error message)
    res.json({ message: 'Data saved successfully' });
});

const PORT = process.env.PORT || 9091;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/
