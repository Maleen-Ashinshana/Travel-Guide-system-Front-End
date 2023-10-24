export class VehicleModel{

 constructor(driver_name,driver_contact_number,vehicle_brand,vehicle_category,vehicle_type,fuel_type,fuel_usage,hybrid_or_no,seat_capacity,transmission,remark) {
     this.vehicle_id=null
     this.driver_name = driver_name;
     this.driver_contact_number = driver_contact_number;
     this.vehicle_brand = vehicle_brand;
     this.vehicle_category = vehicle_category;
     this.vehicle_type = vehicle_type;
     this.fuel_type = fuel_type;
     this.fuel_usage = fuel_usage;
     this.hybrid_or_no = hybrid_or_no;
     this.seat_capacity = seat_capacity;
     this.transmission = transmission;
     this.remark = remark;
 }
}