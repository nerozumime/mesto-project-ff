import {serverRequestDeleteCardByID, serverRequestPutLike, serverRequestDeleteLike} from './api.js'

const cardTemplate = document.querySelector("#card-template").content;

export function addCard(item, profileId, deleteCard, likeCard, showFullImage) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);

    const likeCounter = card.querySelector('.like-counter');
    likeCounter.textContent = item.likes.length;
    if(item.likes.some((like) => like._id == profileId)){
      likeCard(card, item._id);
    }
    if(item.owner._id !== profileId){
      card.querySelector('.card__delete-button').remove();
    } else {
      card.querySelector('.card__delete-button').addEventListener('click', () => deleteCard(card, item._id));
    }

    card.querySelector(".card__title").textContent = item.name;
    const cardImage = card.querySelector(".card__image");
    cardImage.src = item.link;
    cardImage.alt = item.name;    
    card.querySelector('.card__like-button').addEventListener('click', () => likeCard(card, item._id));   
    cardImage.addEventListener('click', ()=> showFullImage(item.name, item.link)); 
    return card;
}

export function deleteCard(cardElement, cardId) {
  serverRequestDeleteCardByID(cardId)
  .then(() => {
    cardElement.remove(); 
  })
}; 

export function likeCard(cardElement, cardId) {
  const likeCounter = cardElement.querySelector('.like-counter');  
  if(cardElement.querySelector('.card__like-button').classList.contains('card__like-button_is-active')){
    // remove like 
    serverRequestDeleteLike(cardId).then((card) => {
      card.likes.length > 0 ? likeCounter.setAttribute('style', 'display:block') : likeCounter.setAttribute('style', 'display:none')
      likeCounter.textContent = card.likes.length;
    })
  } else {
    // add like
    serverRequestPutLike(cardId).then((card) => {
      card.likes.length > 0 ? likeCounter.setAttribute('style', 'display:block') : likeCounter.setAttribute('style', 'display:none')
      likeCounter.textContent = card.likes.length;
    })
  }
  cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
}; 




