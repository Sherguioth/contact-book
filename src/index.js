import Modal from "./components/modal.js";

const btnNewContact = document.getElementById("btn-new-contact");
const addModal = document.getElementById("add-modal");

const modalAddContact = new Modal(addModal);

btnNewContact.onclick = () => {
    modalAddContact.open();
};
