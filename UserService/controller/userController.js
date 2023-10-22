import {UserModel} from "../model/userModel.js";







export class UserController{
    constructor() {

        this.useiPic = $('#file').file[0];


        /*const express = require('express');
        const app = express();


        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*'); // '*' allows any origin
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
    }*/

       /* const express = require('express');
        const cors = require('cors');
        const app = express();*/

// Configure CORS to allow requests from your front-end origin
  /*      const allowedOrigins = ['http://localhost:63342/Proposed%20Travel%20Planning%20System%20Front%20End/index.html?_ijt=1logoag0jji8ocn8gg4iuahuu7&_ij_reload=RELOAD_ON_SAVE.com'];
        const corsOptions = {
            origin: function (origin, callback) {
                if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
        };*/

        /*app.use(cors(corsOptions));*/

// Your routes and server logic here

        /*app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });*/

    }

}

document.getElementById('btn-new-user-register').addEventListener("click", function () {


    let userName=$('#txt-user-name').val()
    let userAddress=$('#txt-user-address').val()
    let userEmail=$('#txt-user-email').val()
    let userContact=$('#txt-user-contact').val()
    let userPassword=$('#txt-user-password').val()
    let userGender=$('#txt-user-gender').val()
    let userNIC=$('#txt-user-nic').val()
    let registerDate=$('#txt-user-date').val()

     const userProfile=$('#file')[0].files[0]
  /*  const registerDate = new Date();
    console.log("Current date: " + registerDate);*/


    const dto=new UserModel(userName,userAddress,userEmail,userPassword,userContact,userNIC,registerDate,userGender,userProfile);

    /*const fromData=new FormData()
    const jDTO=JSON.stringify(dto);
    const blob=new Blob([jDTO],{type:'application/json'})

    fromData.set("dto",blob);
    fromData.set("file",pic);
*/
    const formData = new FormData();
    formData.append("dto", new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    formData.append('userName',userName);
    formData.append('userAddress', userAddress);
  /*  formData.append('registerDate', registeDate);*/
    formData.append('registerDate', registerDate);
   /* formData.append('address',userAddress);*/
    formData.append('userEmail', userEmail);
    formData.append('userContact',userContact);
    formData.append('userPassword',userPassword);
    formData.append('userNIC',userNIC);
    formData.append('userGender',userGender);

    /*formData.append("dto",dto)*/
    formData.append("userProfile", userProfile);
    $.ajax({
        type:"POST",
        url:"http://localhost:9095/User/api/v1/user",
        data:formData,
        /*enctype: 'multipart/form-data',*/
        processData: false,
        contentType: false,
        /*headers: {
            'origin:',
            // other headers
        },*/

        success:(response=>{
            console.log("Saved"   +response.data);
        }),
        error:(error=>{
           console.log("Not Saved"+error.responseText);
        })
    })




    /*let user_data = {
        _name: $('#txt-user-name').val(),
        _address: $('#txt-user-address').val(),
        _email: $('#txt-user-email').val(),
        _password: $('#txt-user-password').val(),
        _contact: $('#txt-user-contact').val(),
        _gender: $('#txt-user-gender').val(),
    };
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];


    console.log(user_data._name + "****")
    console.log(user_data._address + "****")
    console.log(user_data._email + "****")
    console.log(user_data._password + "****")
    console.log(user_data._contact + "****")
    console.log(user_data._gender + "****")
     /!*const profile=$('#output').files[0]*!/
    const js = JSON.stringify(user_data);
    const blob = new Blob([JSON], {
        type: 'application/json'
    });

    /!*const img=*!/

   const  formData=new FormData();
   formData.append("user_data",blob);
   formData.append("file",file);

    $.ajax({
        type: "POST",
        url: "http://localhost:9095/User/api/v1/user",
        headers: {
            'content-type':
        },
        dataType: "json",
        success: (res) => {
            console.log(res);
        },
        error: (error) => {
            // window.location.href = '../Login/index.html';
        }
    });*/
})


/*const dto = new UserDTO(username, password, email, nicPassportNumber, address, phoneNumber, userType, userGender, remarks, dob);
        const formData = new FormData();
        const jsonDTO = JSON.stringify(dto);
        const blob = new Blob([jsonDTO], {type: 'application/json'});


        formData.set("userDTO", blob);
        formData.set("profilePicture", profilePicture);
        formData.set("nicPassportFrontImg", nicPassportFront);
        formData.set("nicPassportBackImg", nicPassportBack);

        $.ajax({
            type: "POST",
            url: this.adminRegisterApi,
            data: formData,
            processData: false,
            contentType: false,
            headers: {
                "Authorization": "Bearer "+ this.token
            },
            success: (response) => {
                console.log("Guide saved successfully. User ID: " + response.data);
                this.clearInputFields();
                this.getAllGuides();
                $("#imageIdFrontSection, #imageIdBackSection, #guideImageSection").hide();
            },
            error: (error) => {
                console.error("Error saving guide: " + error.responseText);
            }
        });*/





