export const initialCards = [
    {
      name: "Архыз",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
      name: "Челябинская область",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
      name: "Иваново",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
      name: "Камчатка",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
      name: "Холмогорский район",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
      name: "Байкал",
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    }
];


const cardTemplate = document.querySelector("#card-template").content;

export function addCard(item, deleteCard, likeCard, showFullImage) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    card.querySelector(".card__title").textContent = item.name;
    const cardImage = card.querySelector(".card__image");
    cardImage.src = item.link;
    cardImage.alt = item.name;
    card.querySelector('.card__delete-button').addEventListener('click', () => deleteCard(card));    
    card.querySelector('.card__like-button').addEventListener('click', () => likeCard(card));   
    cardImage.addEventListener('click', ()=> showFullImage(item.name, item.link)); 
    return card;
}

export function deleteCard(cardElement) {  
    cardElement.remove(); 
}; 

export function likeCard(cardElement) {  
  cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_is-active'); 
  console.log(cardElement);
}; 