import NewContactForm from "./components/add-contact.js";
import ContactList from "./components/contacts-list.js";
import Modal from "./components/modal.js";

export default class View {
    constructor() {
        this._model = null;
        this._btnNewContact = document.getElementById("btn-new-contact");
        this._modalAddContact = new Modal(document.getElementById("add-modal"));
        this._newContactForm = new NewContactForm();
        this._contactList = new ContactList();

        this._btnNewContact.onclick = () => {
            this._modalAddContact.open();
        };

        this._newContactForm.getContactData((name, phone, email, address) => {
            this.addContact({ name, phone, email, address });
        });
    }

    setModel(model) {
        this._model = model;
    }

    addContact(contact) {
        this._contactList.addContact({ ...contact });
        this._modalAddContact.close();
    }
}
