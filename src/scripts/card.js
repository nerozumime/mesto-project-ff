const cardTemplate = document.querySelector("#card-template").content;

function getCardTemplate(){
  return cardTemplate.querySelector(".card").cloneNode(true);
  console.log(cardTemplate);
}

export function addCard(item, profileId, tryDeleteCard, likeCard, showFullImage) {
    const card = getCardTemplate();

    const likeCounter = card.querySelector('.like-counter');
    likeCounter.textContent = item.likes.length;
    item.likes.length > 0 ? likeCounter.setAttribute('style', 'opacity: 1;') : likeCounter.setAttribute('style', 'opacity: 0;')
    if(item.likes.some((like) => like._id == profileId)){
      card.querySelector('.card__like-button').classList.add('card__like-button_is-active');
    }

    if(item.owner._id !== profileId){
      card.querySelector('.card__delete-button').remove();
    } else {
      card.querySelector('.card__delete-button').addEventListener('click', () => tryDeleteCard(card, item._id));
    }

    card.querySelector(".card__title").textContent = item.name;
    const cardImage = card.querySelector(".card__image");
    cardImage.src = item.link;
    cardImage.alt = item.name;    
    card.querySelector('.card__like-button').addEventListener('click', () => likeCard(card, item._id));   
    cardImage.addEventListener('click', ()=> showFullImage(item.name, item.link)); 
    return card;
}




