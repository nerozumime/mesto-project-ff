import {serverRequestDeleteCardByID} from './api.js'

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
  console.log(cardElement);
  cardElement.remove(); 
  /*
    serverRequestDeleteCardByID(cardElement._id)
    .then(() => {
      cardElement.remove(); 
      console.log(cardElement)
    })
    .catch(err => {
      console.log(err);
    });
    */
}; 

export function likeCard(cardElement) {  
  cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_is-active'); 
}; 




