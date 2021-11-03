export default class Model {
    constructor() {
        this._view = null;
        this._contacts = JSON.parse(localStorage.getItem("contacts"));

        if (!this._contacts || this._contacts.length < 1) {
            this._contacts = [
                {
                    name: "Me",
                    phone: "3102764334",
                    email: "sherguioth@gmail.com",
                    address: "Cr. 3c #91-16",
                },
            ];
        } else {
            console.log(this._contacts);
        }
    }

    setView(view) {
        this._view = view;
    }

    save() {
        localStorage.setItem("contacts", JSON.stringify(this._contacts));
    }

    getContacts() {
        return this._contacts.map((contact) => ({ ...contact }));
    }

    addContact(contact) {
        this._contacts.push(contact);
        this.save();

        return { ...contact };
    }
}
