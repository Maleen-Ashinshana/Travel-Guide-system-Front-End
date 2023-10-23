import {GuideDTO} from "../dto/guideDTO.js";

export  class GuideController{
    constructor() {
    }
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
    const guide_image=$('#profilePicture').val()
    const guide_nic_image=$('#nicImage').val()
    const guide_id_image=$('#idImage').val()

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
})