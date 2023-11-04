import {AdminModel} from "../model/adminModel.js";
document.getElementById('btn-add-new-admin').addEventListener('click',function (){
    console.log("OK")
    const name = $('#txt-admin-name').val();
    const password = $('#txt-admin-password').val();
    const roleType = $('#admin-role').val();

    console.log(roleType+"WWWWWWW")
    const admin = new AdminModel(name,password,roleType);
    $.ajax({
        type: "POST",
        url: "http://localhost:9095/User/api/v1/admin",
        data: JSON.stringify(admin),
        contentType: 'application/json',
        success: (response) => {
            console.log(response.name)
            console.log(response.roleType)
            console.log("Saved " + response.data);
            // Display a success message to the user
            alert("Account created!");
            console.log(roleType)

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

})

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:9095/User/api/v1/admin',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            console.log(data+'DATE')
            // Assuming that the data is an array of objects
            data.forEach(function (item) {
                console.log(item)
                console.log(item+"ITEM")
                // Create a new row for each item
                var newRow = $("<tr>");

                // Create table cells for each property in the data
                var adminRoleCell = $("<td>").text(item.roleType);
                var adminNameCell = $("<td>").text(item.name);
                var adminPasswordCell = $("<td>").text(item.password);

                // Append the cells to the row
                newRow.append(adminRoleCell);
                newRow.append(adminNameCell);
                newRow.append(adminPasswordCell);

                // Append the row to the table body
                $("#admin-table-body").append(newRow);
            });
        },
        error: function () {
            console.error('Failed to retrieve data');
        }
    });
});
$(document).ready(function () {
    // Click event handler for table rows
    $("#admin-table-body").on("click", "tr", function () {

        console.log("Ok")
        let role=$(this).children(":eq(0)").text()
        let name=$(this).children(":eq(1)").text()
        let password=$(this).children(":eq(2)").text()


        console.log(role,name,password)
        $('#admin-role').val(role)
        $('#txt-admin-name').val(name)
        $('#txt-admin-password').val(password)


    });

    /*$('#btn-delete-new-admin').click(function () {
        // Get the values to delete
        var role = $('#admin-role').val();
        var name = $('#txt-admin-name').val();
        var password = $('#txt-admin-password').val();

        // Send an AJAX request to delete the data on the back end
        $.ajax({
            url: 'http://localhost:9095/User/api/v1/admin', // Replace with your actual API endpoint
            method: 'DELETE', // Use the appropriate HTTP method for your API
            data: {
                role: role,
                name: name,
                password: password
            },
            success: function (response) {
                // Remove the selected row from the front end table
                $("#admin-table-body tr.selected").remove();

                // Hide the Delete button
                $('#btn-delete-new-admin').hide();
            },
            error: function (error) {
                console.error('Failed to delete data: ' + error);
            }
        });
    });*/

});

document.getElementById('btn-delete-new-admin').addEventListener('click', function () {
    console.log("OK");

    // Get the values to delete
    var deleteAdminRole = $("#admin-role").val();
    var deleteAdminName = $("#txt-admin-name").val();
    var deleteAdminPassword = $("#txt-admin-password").val();

    console.log(deleteAdminRole, deleteAdminName, deleteAdminPassword);

    // Construct the URL with parameters (if needed)
    var deleteUrl = 'http://localhost:9095/User/api/v1/admin?role=' + deleteAdminRole + '&name=' + deleteAdminName + '&password=' + deleteAdminPassword;

    // Send the DELETE request
    $.ajax({
        url: deleteUrl,
        method: 'DELETE',
        success: function (response) {
            console.log("DELETE successful");
            // Perform actions after successful delete
        },
        error: function (error) {
            console.log("DELETE failed: " + error);
        }
    });
});




