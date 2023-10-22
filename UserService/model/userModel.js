export class UserModel{

    constructor(name,address,registerDate,email,password,contact,gender,nic) {
        this._id = null;
        this._name = name;
        this._address = address;
        this._registerDate = registerDate;
        this._email = email;
        this._password = password;
        this._contact = contact;
        this._gender = gender;
        this._nic = nic;
        this._profile = null;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get registerDate() {
        return this._registerDate;
    }

    set registerDate(value) {
        this._registerDate = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get nic() {
        return this._nic;
    }

    set nic(value) {
        this._nic = value;
    }

    get profile() {
        return this._profile;
    }

    set profile(value) {
        this._profile = value;
    }
}