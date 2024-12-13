// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function addCard(name, link) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    card.querySelector(".card__title").textContent = name;
    card.querySelector(".card__image").setAttribute("src", link);
    card.querySelector(".card__image").setAttribute("alt", `${name}`);
    card.querySelector('.card__delete-button').addEventListener('click', deleteCard);    
    return card;
}
// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.card').remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(item => placesList.append(addCard(item.name, item.link)));
