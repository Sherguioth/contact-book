export default class ContactList {
    constructor() {
        this._contactList = document.getElementById("contacts-list");
    }

    addContact(contact) {
        const fragment = document.createDocumentFragment();

        const li = document.createElement("li");
        li.classList.add("contacts__item");
        li.setAttribute("id", "li_" + contact.id);

        const article = document.createElement("article");
        article.classList.add("contact");
        article.setAttribute("id", "article_" + contact.id);
        li.appendChild(article);

        const figure = document.createElement("figure");
        figure.classList.add("contact__avatar");
        figure.setAttribute("id", "fig_" + contact.id);
        article.appendChild(figure);

        const img = document.createElement("img");
        img.classList.add("contact__photo");
        img.alt = "Avatar";
        img.id = "img_" + contact.id;
        figure.appendChild(img);

        const h3 = document.createElement("h3");
        h3.classList.add("contact__name");
        h3.textContent = contact.name;
        h3.setAttribute("id", "name_" + contact.id)
        article.appendChild(h3);

        fragment.appendChild(li);
        this._contactList.appendChild(fragment);
    }

    onClick(callback) {
        this._contactList.onclick = (event) => {
            const idElement = String(event.target.id);
            const id = idElement.split('_')[1];
            callback(id);
        };
    }
}
