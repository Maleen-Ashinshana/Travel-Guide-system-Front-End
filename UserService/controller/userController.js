import {UserModel} from "../model/userModel.js";







export class UserController{
    constructor() {
    }

}

document.getElementById('btn-new-user-register').addEventListener("click", function () {


    const name=$('#txt-user-name').val()
    const userAddress=$('#txt-user-address').val()
    const userEmail=$('#txt-user-email').val()
    const userContact=$('#txt-user-contact').val()
    const userPassword=$('#txt-user-password').val()
    const userGender=$('#txt-user-gender').val()
    const userNIC=$('#txt-user-nic').val()
    const registerDate=$('#txt-user-date').val()
    const userAge=$('#txt-user-age').val()
    const userRemark=$('#txt-user-remark').val()
    const userProfile=$('#file')[0].files[0]

    const dto=new UserModel(name,userAddress,userEmail,userPassword,userContact,userNIC,userAge,userRemark,registerDate,userGender,userProfile);


    const formData = new FormData();
    formData.append("userModel", new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    formData.append('name',name);
    formData.append('userAddress', userAddress);
    formData.append('registerDate', registerDate);
    formData.append('userEmail', userEmail);
    formData.append('contact_number',userContact);
    formData.append('userPassword',userPassword);
    formData.append('userNIC',userNIC);
    formData.append('userAge',userAge);
    formData.append('remark',userRemark);
    formData.append('userGender',userGender);
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

});
/*$(document).ready(function() {
    // Handle form submission
    $("#loginForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of the username and password inputs
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();

        // Make an AJAX request to the server
        $.ajax({
            type: "POST",
            url: "/your-server-endpoint", // Replace with the actual server endpoint URL
            data: { username: username, password: password },
            success: function(response) {
                // Handle the response from the server
                var responseMessage = $("#responseMessage");
                if (response.success) {
                    responseMessage.text("Login successful");
                } else {
                    responseMessage.text("Login failed. Please check your credentials.");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle errors here
                console.error("AJAX Error:", errorThrown);
            }
        });
    });
});*/
/*document.getElementById('btn-login-user').addEventListener('click', function() {
    console.log("Button clicked");
    const userNameInput = $('#userName').val();
    const userPasswordInput = $('#userPassword').val();
    console.log(userNameInput);
    console.log(userPasswordInput);

    $.ajax({
        type: "POST", // Use POST method to send data securely
        url: "http://localhost:9095/User/api/v1/user/login", // Replace with your backend URL
        data: {
            username: userNameInput,
            password: userPasswordInput
        },
        dataType: 'json',
        success: function(response) {
            /!*var responseMessage = $("#responseMessage");*!/
            if (response.success) {
                console.log("Login Success")
                /!*response.text("Login successful");*!/
            } else {
                console.log("Login failed. Please check your credentials.")
                /!*response.text("Login failed. Please check your credentials.");*!/
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Handle errors here
            console.error("AJAX Error:", errorThrown);
        }

    });
});*/
/*function subName(){

}*/

$(document).ready(function() {
    $('#btn-login-user').click(function() {
        const userNameInput = $('#userName').val();
        const userPasswordInput = $('#userPassword').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:9095/User/api/v1/user/login",
            data: {
                user_name: userNameInput,
                password: userPasswordInput
            },
            dataType: 'json',
            success: function(response) {
                console.log(response.name);
                window.location.href = `.../../TravelService/newTravel.html?name=${response.name}`;

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error:", errorThrown);
                alert("Please Enter correct user name and password")
                // Handle the AJAX error (e.g., show an error message)
            }
        });
        /*$.ajax({
            type: "POST",
            url: "http://localhost:9095/User/api/v1/user/login",
            data: {
                user_name: userNameInput,
                password: userPasswordInput
            },
            dataType: 'json',
            success: function(response) {
                console.log(response)
                console.log("Login Success");
                /!*const name=document.getElementById('userName').value*!/
                if (userNameInput){
                    window.location.href = `.../../TravelService/newTravel.html?userNameInput=${userNameInput}`;
                }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error:", errorThrown);
            }
        });*/
       /* $.ajax({
            type: "POST",
            url: "http://localhost:9095/User/api/v1/user/login",
            data: JSON.stringify({
                user_name: userNameInput,
                password: userPasswordInput
            }),
            contentType: "application/json", // Set the content type to JSON
            dataType: "json",
            success: function(response) {
                if (response.success) {
                    console.log("Login Success");
                } else {
                    console.log("Login failed. Please check your credentials.");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("AJAX Error:", errorThrown);
            }
        });*/

    });
});



/*$(document).ready(function() {
    $('#btn-login-user').click(function() {
        console.log("Button clicked");
        const username = $('#userName').val(); // Use 'username' here
        const password = $('#userPassword').val(); // Use 'password' here
        console.log(username);
        console.log(password);

        $.ajax({
            type: "POST",
            url: "http://localhost:9095/User/api/v1/user",
            data: JSON.stringify({
                username: username,
                password: password
            }),
            contentType: "application/json", // Set the content type to JSON
            dataType: 'json',
            success: function(data) {
                if (data.success) {
                    $('#result').text("Login successful");
                } else {
                    $('#result').text("Login failed");
                }
            },
            error: function(error) {
                console.log("Error", error);
            }
        });

    });
});*/

/*document.getElementById('btn-login-user').addEventListener('click', function() {
    console.log("Button clicked");
    const userName = $('#userName').val();
    const password = $('#userPassword').val();
    console.log(userName);
    console.log(password);

    $.ajax({
        type: "POST", // Use POST method to send data securely
        url: "http://localhost:9095/User/api/v1/user", // Replace with your backend URL
        data: {
            userName: userName,
            userPassword: password
        },
        dataType: 'json',
        success: function(data) {
            if (data.success) {
                $('#result').text("Login successful");
            } else {
                $('#result').text("Login failed");
            }
        },
        error: function(error) {
            console.log("Error", error);
        }

    });
});*/
/*$.ajax({
     type: "GET",
     url: "http://localhost:9095/User/api/v1/user",
     dataType: 'json',
     success: function (data) {
         // Handle the response data here
         console.log("Success", data);
     },
     error: function (error) {
         console.log("Error", error);
     }
 });*/

/*document.getElementById('btn-login-user').addEventListener('click', function() {
    console.log("Button clicked");
    const userName=$('#userName').val();
    const password=$('#userPassword').val()
    console.log(userName)
    console.log(password)

    $.ajax({
        type:"GET",
        url:"http://localhost:9095/User/api/v1/user",
        dataType:'json',
        success:function (){

        },
        error:function (error){
            console.log("No",error);
        }
    )}

});*/

/*document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("btn-hotel-save");

    saveButton.addEventListener("click", function () {
        // Your click event code here
        alert("Save button clicked!"); // Example action
    });
});*/







