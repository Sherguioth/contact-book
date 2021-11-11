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

        const div = document.createElement("div");
        div.classList.add("contact__title");
        article.appendChild(div);

        const h3 = document.createElement("h3");
        h3.classList.add("contact__name");
        h3.textContent = contact.name;
        div.appendChild(h3);

        fragment.appendChild(li);
        this._contactList.appendChild(fragment);
    }

    onclick(callback) {
        this._contactList.onclick = (event) => {
            const idElement = event.target.id;
            if (event.target.localName == "article") {
                callback(idElement);
            }
        };
    }
}
