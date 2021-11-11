import NewContactForm from "./components/add-contact.js";
import ContactList from "./components/contacts-list.js";
import DetailsContact from "./components/details-contact.js";
import Modal from "./components/modal.js";

export default class View {
    constructor() {
        this._btnNewContact = document.getElementById("btn-new-contact");
        this._modalAddContact = new Modal(document.getElementById("add-modal"));
        this._modalDetailsContact = new DetailsContact(document.getElementById("view-modal"));
        this._newContactForm = new NewContactForm();
        this._contactList = new ContactList();

        this._btnNewContact.onclick = () => {
            this._modalAddContact.open();
        };

        this._newContactForm.getContactData((name, phone, email, address) => {
            this.addContact({ name, phone, email, address });
        });

        this._contactList.onclick((id) => {
            const contact = this._model.getContact(Number(id));
            this._modalDetailsContact.showTargetContact(contact);
        });
    }

    setModel(model) {
        this._model = model;
    }

    render() {
        const contacts = this._model.getContacts();
        contacts.forEach((contact) => {
            this._contactList.addContact({ ...contact });
        });
    }

    addContact(contact) {
        this._model.addContact({ ...contact });
        this._contactList.addContact({ ...contact });
        this._modalAddContact.close();
    }
}
