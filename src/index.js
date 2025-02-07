import './pages/index.css'; // импорт главного файла стилей 
import {closeModal, openModal} from './scripts/modal'
import {addCard} from './scripts/card'
import {enableValidation, clearValidation} from './scripts/validation.js';
import {
  getProfileData, getInitialCardsData ,getProfileEdit,
  getAddNewCard, changeAvatar, deleteCardByID, 
  putLike, deleteLike} from './scripts/api.js';

const validationParameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const placesList = document.querySelector(".places__list");

// popupEditProfile
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupContent = document.querySelector('.popup__content');
const formEditProfile = document.forms['edit-profile'];
const profileAvatar = document.querySelector('.profile__image');

buttonProfileEdit.addEventListener('click', ()=> {
  profileEditInputName.value = profileTitle.textContent;
  profileEditInputDescription.value = profileDescription.textContent;
  clearValidation(formEditProfile, validationParameters);
  openModal(popupProfileEdit);
});

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditInputName = popupContent.querySelector('.popup__input_type_name');
const profileEditInputDescription = popupContent.querySelector('.popup__input_type_description');

function handleProfileEditFormSubmit(evt) {
  evt.preventDefault(); 
  const saveButton = formEditProfile.querySelector('.popup__button');
  saveButton.textContent = 'Сохранить...';
  getProfileEdit(profileEditInputName.value, profileEditInputDescription.value)
  .then(() => {
    profileTitle.textContent = profileEditInputName.value;
    profileDescription.textContent = profileEditInputDescription.value;
    closeModal(popupProfileEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    saveButton.textContent = 'Сохранить';
  })
}
formEditProfile.addEventListener('submit', handleProfileEditFormSubmit);

// popupAddNewPlace 
const buttonAddNewPlace = document.querySelector('.profile__add-button');
const formAddNewPlace = document.forms['new-place'];
const popupAddNewPlace = document.querySelector('.popup_type_new-card');
const newPlaceInputTitle = popupAddNewPlace.querySelector('.popup__input_type_card-name');
const newPlaceInputLink = popupAddNewPlace.querySelector('.popup__input_type_url');

let profileId;

function handleAddNewPlaceSubmit(evt) {
  evt.preventDefault();
  const saveButton = formAddNewPlace.querySelector('.popup__button');
  saveButton.textContent = 'Сохранить...';
  getAddNewCard(newPlaceInputTitle.value, newPlaceInputLink.value)
  .then((card) => {
    placesList.prepend(addCard(card, profileId, tryDeleteCard, likeCard, showFullImage));
    closeModal(popupAddNewPlace);
    formAddNewPlace.reset();
    clearValidation(formAddNewPlace, validationParameters);
  }) 
  .catch((err) => {
    console.log(err);
  })
  .finally(()=> {
    saveButton.textContent = 'Сохранить';
  })
}

buttonAddNewPlace.addEventListener('click', ()=> {
  openModal(popupAddNewPlace);
});

formAddNewPlace.addEventListener('submit', handleAddNewPlaceSubmit);

// popupShowFullImage
const popupShowFullImage = document.querySelector('.popup_type_image');
const imageInputTitle = popupShowFullImage.querySelector('.popup__caption');
const imageInputLink = popupShowFullImage.querySelector('.popup__image');

function showFullImage(name, link){
  imageInputTitle.textContent = name;
  imageInputLink.setAttribute('src', link);
  imageInputLink.setAttribute('alt', name);
  openModal(popupShowFullImage);
}

// Every popup is animated, close with esc and with button-close
document.querySelectorAll('.popup').forEach((item)=> {
  item.classList.add('popup_is-animated');
  item.addEventListener('mousedown', (evt) => { 
    if (evt.target.classList.contains('popup')) {
      closeModal(item); 
    }; 
  }); 
  item.querySelector('.popup__close').addEventListener('click', ()=>closeModal(item));
})

// 7 sprint
enableValidation(validationParameters);

// api
Promise.all([getProfileData(), getInitialCardsData()])
  .then(([profileData, cardsData]) => {
    profileId = profileData._id;
    profileTitle.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    profileAvatar.style.backgroundImage = `url('${profileData.avatar}')`;
    cardsData.forEach(card => {
      placesList.append(addCard(card, profileData._id, tryDeleteCard, likeCard, showFullImage));
    })
  })
  .catch((err) => {
    console.log(err);
  });

// avatar 
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
const formChangeAvatar = document.forms['change-avatar'];
const popupInputChangeAvatar = formChangeAvatar.querySelector('.popup__input_type_avatar');

profileAvatar.addEventListener('click', ()=> {
  openModal(popupChangeAvatar);
  formChangeAvatar.reset();
  clearValidation(formChangeAvatar, validationParameters);
})

function handleChangeAvatarSubmit(evt){
  evt.preventDefault();
  const saveButton = formChangeAvatar.querySelector('.popup__button');
  saveButton.textContent = 'Сохранить...';
  changeAvatar(popupInputChangeAvatar.value)
    .then(() => {
      profileAvatar.style.backgroundImage = `url('${popupInputChangeAvatar.value}')`;
      closeModal(popupChangeAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=> {
      saveButton.textContent = 'Сохранить';
    })
}
formChangeAvatar.addEventListener('submit', handleChangeAvatarSubmit);



function likeCard(card, cardId) {
  const likeCounter = card.querySelector('.like-counter');  
  if(card.querySelector('.card__like-button').classList.contains('card__like-button_is-active')){
    // remove like 
    deleteLike(cardId).then((card) => {
      card.likes.length > 0 ? likeCounter.setAttribute('style', 'opacity: 1;') : likeCounter.setAttribute('style', 'opacity: 0;')
      likeCounter.textContent = card.likes.length;
    })
  } else {
    // add like
    putLike(cardId).then((card) => {
      card.likes.length > 0 ? likeCounter.setAttribute('style', 'opacity: 1;') : likeCounter.setAttribute('style', 'opacity: 0;')
      likeCounter.textContent = card.likes.length;
    })
  }
  card.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
}; 

// popup delete card
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const formDeleteCard = document.forms['delete-card'];

let currCard;
let currCardId;

function tryDeleteCard(card, cardId) {
  openModal(popupDeleteCard);
  currCard = card;
  currCardId = cardId;
}; 

function handleDeleteCard(evt){
  evt.preventDefault();
  deleteCardFromServer(currCard, currCardId);
}

formDeleteCard.addEventListener('submit', handleDeleteCard);

function deleteCardFromServer(currCard, currCardId) {
  deleteCardByID(currCardId)
  .then(() => {
    currCard.remove(); 
    closeModal(popupDeleteCard)
  })
  .catch((err) => {
    console.log(err);
  });
}; 