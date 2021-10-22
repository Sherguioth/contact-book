export default class Modal {
    constructor(modalElement) {
        this.modalElement = modalElement;

        this.modalElement.onclick = (event) => {
            const idElement = event.target.id;
            if (idElement === this.modalElement.id) {
                this.close();
            }
        };
    }

    open() {
        this.modalElement.classList.add("modal--open");
    }

    close() {
        this.modalElement.classList.remove("modal--open");
    }
}
