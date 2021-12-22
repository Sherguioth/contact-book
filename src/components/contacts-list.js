export default class ContactList {
    constructor() {
        this._contactList = document.getElementById("contacts-list");
    }

    addContact(contact) {
        const fragment = document.createDocumentFragment();

        const li = document.createElement("li");
        li.classList.add("contacts__item");
        li.setAttribute("id", contact.id);

        const article = document.createElement("article");
        article.classList.add("contact");
        li.appendChild(article);

        const figure = document.createElement("figure");
        figure.classList.add("contact__avatar");
        article.appendChild(figure);

        const img = document.createElement("img");
        img.classList.add("contact__photo");
        img.alt = "Avatar";
        figure.appendChild(img);

        const h3 = document.createElement("h3");
        h3.classList.add("contact__name");
        h3.textContent = contact.name;
        article.appendChild(h3);

        fragment.appendChild(li);
        this._contactList.appendChild(fragment);
    }

    onClick(callback) {
        this._contactList.onclick = (event) => {
            // TODO: Obtener correctamente el id del elemento li
            const idElement = event.target.id;
            console.log(event.target);
            if (event.target.localName == "article" || event.target.localName == "h3") {
                callback(idElement);
            }
        };
    }
}
