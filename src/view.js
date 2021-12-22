import NewContactForm from "./components/add-contact.js";
import ContactList from "./components/contacts-list.js";
import DetailsContact from "./components/details-contact.js";

export default class View {
    constructor() {
        this._model = null;
        this._btnNewContact = document.getElementById("btn-new-contact");
        this._contactList = new ContactList();
        this._modalAddContact = new NewContactForm(document.getElementById("add-modal"));
        this._modalDetailsContact = new DetailsContact(document.getElementById("view-modal"));

        this.componentInicialization();
    }

    componentInicialization() {
        this._btnNewContact.onclick = () => this._modalAddContact.open();

        this._modalAddContact.onClick((name, phone, email, address) =>
            this.addContact({ name, phone, email, address })
        );

        this._contactList.onClick((id) => this.showContact(id));
        this._modalDetailsContact.onClick((contact) => this.editContact(contact));
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
        contact = this._model.addContact({ ...contact });
        this._contactList.addContact({ ...contact });
        this._modalAddContact.close();
    }

    showContact(id) {
        const contact = this._model.getContact(Number(id));
        this._modalDetailsContact.showTargetContact({ ...contact });
    }

    editContact(contact) {
        this._model.editContact(contact);
        this.render();
    }
}
