import {AdminModel} from "../model/adminModel.js";
export class AdminController{

}
document.getElementById('btn-admin-login').addEventListener('click', function () {
    console.log("OK");
    event.preventDefault();
    const userName = $('#login-name').val();
    const userPassword = $('#login-password').val();

    console.log(userName, userPassword);

    $.ajax({
        type: "POST",
        url: "http://localhost:9095/User/api/v1/admin/adminLogin",
        data: {
            name: userName,
            password: userPassword
        },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            console.log(response.roleType.split("role=")[1]);
            const role = response.roleType.split("role=")[1].split(")")[0];

            // Handle successful login
            if (role === "VEHICLE_ADMIN") {
                console.log("Vehicle is a VEHICLE_ADMIN");
                window.location.href = ".../../vehicleService/vehicle.html";
            } else if (role === "USER_ADMIN") {
                console.log("User is a USER_ADMIN");
                window.location.href = "adminService/new.html";
            } else if (role === "HOTEL_ADMIN") {
                console.log("Hotel is a HOTEL_ADMIN");
                window.location.href = ".../../hotelService/hotel.html";
            } else if (role === "GUIDE_ADMIN") {
                console.log("Guide is a GUIDE_ADMIN");
                window.location.href = ".../../guideService/guide.html";
            } else if (role === "AREA_ADMIN") {
                console.log("Area is an AREA_ADMIN");
                window.location.href = ".../../TravelArea/area.html";
            } else {
                console.log("User is not an ADMIN");
                alert("Invalid username or password.");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            event.preventDefault();
            console.error("AJAX Error:", errorThrown);
            alert("An error occurred during the login."+textStatus);
        }
    });
});

/*function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
}*/



/*USER ADMIN*/
document.getElementById('btn-singUp').addEventListener('click', function () {
    console.log("Log");
    event.preventDefault();
    const admin_name = $('#singIn-userName').val();
    const password = $('#singIn-password').val();
    const role = $('#singIn-role').val();


        const admin = new AdminModel(admin_name, password, role);
        $.ajax({
            type: "POST",
            url: "http://localhost:9095/User/api/v1/admin",
            data: JSON.stringify(admin),
            contentType: 'application/json',
            success: (response) => {
                console.log("Saved " + response.data);
                // Display a success message to the user
                alert("Account created!");
                window.location.href=`../../index.html`;

            },
            error: (error) => {
                console.log("Not Saved" + error.responseText);
                // Display an error message to the user
                alert("Account creation failed: " + error.responseText);
            }
        });
    /*} else {
        // Display an error message to the user for missing input
        alert("Please fill in all fields before creating an account.");
    }*/
});
/*document.getElementById('btn-admin-login').addEventListener('click', function () {
     const userRole=$('#login-role').val();
     const name=$('#login-name').val();
     const usePassword=$('#login-password').val();
    $.ajax({
        type: 'POST', // You may use GET or other methods depending on your backend
        url: '/login', // Replace with the actual URL of your backend endpoint
        data: JSON.stringify({ userRole, name, usePassword }),
        contentType: 'application/json',
        success: function (response) {
            if (response === 'success') {
                // Credentials are correct, perform the login action
                window.location.href = 'vehicle.html'; // Redirect to the dashboard or another page
            } else {
                // Credentials are incorrect, display an error message
                $('#errorText').text('Incorrect credentials');
            }
        },
        error: function () {
            // Handle the error, e.g., show a generic error message
            $('#errorText').text('An error occurred');
        }
    });


});*/
/*OTHER ADMINS*/
/*document.getElementById('btn-add-admin').addEventListener('click', function () {
    console.log("Log");
    /!*event.preventDefault();
    const name = $('#txt-admin-name').val();
    const password = $('#txt-admin-password').val();
    const role = $('#admin-role').val();

    const adminModel=new AdminModel(name,password,role)
    $.ajax({
        type: "POST",
        url: "http://localhost:9095/User/api/v1/admin",
        data: JSON.stringify(adminModel),
        contentType: 'application/json',
        success: (response) => {
            console.log("Saved " + response.data);
            // Display a success message to the user
            alert("Account created!");
        },
        error: (error) => {
            console.log("Not Saved" + error.responseText);
            // Display an error message to the user
            alert("Account creation failed: " + error.responseText);
        }
    });*!/


    /!*if (admin_name && password && role) {
        const admin = new AdminModel(admin_name, password, role);

    } else {
        // Display an error message to the user for missing input
        alert("Please fill in all fields before creating an account.");
    }*!/
});*/
/*document.getElementById('btn-delete-admin').addEventListener('click',function (){
    console.log("DELETE")
})*/














/*document.getElementById('btn-admin-login').addEventListener('click', function () {
    event.preventDefault();
    console.log("OK")
    var enteredUserRole = document.getElementById('login-role').value; // Removed () after value
    var enteredUserName = document.getElementById('login-name').value;
    var enteredUserPassword = document.getElementById('login-password').value;

    var validUserRole = 'VEHICLE_ADMIN';

    if (enteredUserRole === validUserRole) {
        window.location.href = 'vehicle.html';
    } else {
        document.getElementById('errorText').textContent = 'Incorrect User Role';
    }
});*/
/*document.getElementById('btn-admin-login').addEventListener('click', function () {
    var enteredUserName = document.getElementById('login-name').value;
    var enteredPassword = document.getElementById('login-password').value;

    // Perform your authentication here, e.g., check against valid credentials
    var validUserName = 'Maleen'; // Replace with valid username
    var validPassword = 'm1234'; // Replace with valid password

    if (enteredUserName === validUserName && enteredPassword === validPassword) {
        // Redirect to the 'vehicle.html' page upon successful login
        window.location.href = 'vehicle.html';
    } else {
        document.getElementById('errorText').textContent = 'Incorrect username or password.';
    }
});*/


/*document.getElementById('btn-admin-login').addEventListener('click',function (){

    var enteredUserRole=document.getElementById('login-role').value();
    var enteredUserName=document.getElementById('login-name').value();
    var enteredUserPassword=document.getElementById('login-password').value();

    /!*USER_ADMIN,VEHICLE_ADMIN,HOTEL_ADMIN,TRAVEL_ADMIN,GUIDE_ADMIN,AREA_ADMIN*!/
    var validUserRole='VEHICLE_ADMIN';

    if (enteredUserRole===validUserRole){
        window.location.href='vehicle.html';

    }else {
        document.getElementById('errorText').textContent='Incorrect User Role';
    }

})*/

/*
$.ajax({
    type: "POST",
    url: "http://localhost:9095/User/api/v1/admin",
    data: JSON.stringify(admin),
    contentType: 'application/json',
    success:function (response) {

    },
    error: function(error) {
        // Handle any errors
        console.error('Error:', error);
        console.error("No");
    },*/
