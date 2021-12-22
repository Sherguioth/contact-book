import Modal from "./modal.js";

export default class DetailsContact extends Modal {
    constructor(modalParent) {
        super(modalParent);
        this._name = document.getElementById("view-name");
        this._phone = document.getElementById("view-phone");
        this._email = document.getElementById("view-email");
        this._address = document.getElementById("view-address");
        this._btnAdd = document.getElementById("btn-save");

        this._contact = null;
    }

    showTargetContact(contact) {
        this._contact = contact;
        this._name.value = contact.name;
        this._phone.value = contact.phone;
        this._email.value = contact.email;
        this._address.value = contact.address;

        this.open();
    }

    onClick(callback) {
        this._btnAdd.onclick = (event) => {
            event.preventDefault();

            if (this._name.value === "" || this._phone.value === "") {
                console.error("Name and phone required");
            } else {
                this._contact.name = this._name.value;
                this._contact.phone = this._phone.value;
                this._contact.email = this._email.value;
                this._contact.address = this._address.value;
                callback(this._contact);
                this.close();
            }
        };
    }
}
