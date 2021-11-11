import Modal from "./modal.js";

export default class DetailsContact extends Modal {
    constructor(modalParent) {
        super(modalParent);
        this._name = document.getElementById("view-name");
        this._phone = document.getElementById("view-phone");
        this._email = document.getElementById("view-email");
        this._address = document.getElementById("view-address");
        this._btnAdd = document.getElementById("btn-save");
    }

    showTargetContact(contact) {
        this._name.value = contact.name;
        this._phone.value = contact.phone;
        this._email.value = contact.email;
        this._address.value = contact.address;

        this.open();
    }
}
