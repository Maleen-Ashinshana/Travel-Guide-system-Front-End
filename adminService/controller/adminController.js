import {AdminModel} from "../model/AdminModel.js";

document.getElementById('btn-singUp').addEventListener('click', function () {
    console.log("Log");
    event.preventDefault();
    const admin_name = $('#singIn-userName').val();
    const password = $('#singIn-password').val();
    const role = $('#singIn-role').val();

    if (admin_name && password && role) {
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
            },
            error: (error) => {
                console.log("Not Saved" + error.responseText);
                // Display an error message to the user
                alert("Account creation failed: " + error.responseText);
            }
        });
    } else {
        // Display an error message to the user for missing input
        alert("Please fill in all fields before creating an account.");
    }
});
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
