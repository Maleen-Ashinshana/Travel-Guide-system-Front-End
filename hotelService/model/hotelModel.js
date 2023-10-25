export class HotelModel{
    constructor(hotelName, hotelCategory, location, email, contactNumber1, contactNumber2, hotelFee, remark) {
        this.hotel_id = null;
        this.hotel_name = hotelName;
        this.hotel_category = hotelCategory;
        this.location = location;
        this.email = email;
        this.contact_number1 = contactNumber1;
        this.contact_number2 = contactNumber2;
        this.hotel_fee = hotelFee;
        this.remark = remark;
    }
}