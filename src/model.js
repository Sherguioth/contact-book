export default class Model {
    constructor() {
        this._view = null;
        this._contacts = JSON.parse(localStorage.getItem("contacts"));
        this._courrentId = 0;

        if (!this._contacts || this._contacts.length < 1) {
            this._contacts = [
                {
                    id: this._courrentId,
                    name: "Me",
                    phone: "3102764334",
                    email: "sherguioth@gmail.com",
                    address: "Cr. 3c #91-16",
                },
            ];
            this._courrentId++;
        } else {
            this._courrentId = this._contacts[this._contacts.length - 1].id++;
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

    getContact(id) {
        return this._contacts.filter((contact) => contact.id == id)[0];
    }

    addContact(contact) {
        this._contacts.push(contact);
        this.save();

        return { ...contact };
    }
}
