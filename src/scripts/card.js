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

// For popupAddNewPlace
const popupAddNewPlace = document.querySelector('.popup_type_new-card');
export function createNewCard(){
  const newPlaceInputTitle = popupAddNewPlace.querySelector('.popup__input_type_card-name');
  const newPlaceInputLink = popupAddNewPlace.querySelector('.popup__input_type_url');
  const item = {name: newPlaceInputTitle.value, link: newPlaceInputLink.value};
  newPlaceInputTitle.value = '';
  newPlaceInputLink.value = ''
  return item;
}

