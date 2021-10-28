export default class NewContactForm {
    constructor() {
        this._name = document.getElementById("add-name");
        this._phone = document.getElementById("add-phone");
        this._email = document.getElementById("add-email");
        this._address = document.getElementById("add-address");
        this._btnAdd = document.getElementById("btn-add");
    }

    getContactData(callback) {
        this._btnAdd.onclick = (event) => {
            event.preventDefault();

            if (this._name.value === "" || this._phone.value === "") {
                console.error("Name and phone required");
            } else {
                callback(this._name.value, this._phone.value, this._email.value, this._address.value);
            }
        };
    }
}
