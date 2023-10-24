export class GuideDTO{

    constructor(guide_name,guide_address,age,contact_number,gender,experience,man_day_value,remark) {

      this.guide_name = guide_name;
      this.guide_address = guide_address;
      this.age = age;
      this.contact_number = contact_number;
      this.gender = gender;
      this.experience = experience;
      this.man_day_value = man_day_value;
      this.remark = remark;
      this.guide_image = null;
      this.guide_nic_image = null;
      this.guide_id_image = null;
    }
}