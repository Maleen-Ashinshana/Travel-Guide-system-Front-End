import {UserModel} from "../model/userModel.js";







export class UserController{
    constructor() {
    }

}

document.getElementById('btn-new-user-register').addEventListener("click", function () {


    const userName=$('#txt-user-name').val()
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

    const dto=new UserModel(userName,userAddress,userEmail,userPassword,userContact,userNIC,userAge,userRemark,registerDate,userGender,userProfile);


    const formData = new FormData();
    formData.append("userModel", new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    formData.append('userName',userName);
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

})





