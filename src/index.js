import './pages/index.css'; // импорт главного файла стилей 
import {initialCards} from './scripts/cards'
import {closeModal, openModal} from './scripts/modal'
import {addCard, deleteCard, likeCard} from './scripts/card'

// adding cards on load
const placesList = document.querySelector(".places__list");
initialCards.forEach(item => placesList.append(addCard(item, deleteCard, likeCard, showFullImage)));

// popupEditProfile
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupContent = document.querySelector('.popup__content');
const formEditProfile = document.forms['edit-profile'];

buttonProfileEdit.addEventListener('click', ()=> {
  profileEditInputName.value = profileTitle.textContent;
  profileEditInputDescription.value = profileDescription.textContent;
  openModal(popupProfileEdit)
});

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditInputName = popupContent.querySelector('.popup__input_type_name');
const profileEditInputDescription = popupContent.querySelector('.popup__input_type_description');

function handleProfileEditFormSubmit(evt) {
  evt.preventDefault(); 
  profileDescription.textContent = profileEditInputDescription.value;
  profileTitle.textContent = profileEditInputName.value;
  closeModal(popupProfileEdit);
}
formEditProfile.addEventListener('submit', handleProfileEditFormSubmit);

// popupAddNewPlace 
const buttonAddNewPlace = document.querySelector('.profile__add-button');
const formAddNewPlace = document.forms['new-place'];
const popupAddNewPlace = document.querySelector('.popup_type_new-card');
const newPlaceInputTitle = popupAddNewPlace.querySelector('.popup__input_type_card-name');
const newPlaceInputLink = popupAddNewPlace.querySelector('.popup__input_type_url');

function handleAddNewPlaceSubmit(evt) {
  evt.preventDefault(); 
  const item = {name: newPlaceInputTitle.value, link: newPlaceInputLink.value};
  placesList.prepend(addCard(item, deleteCard, likeCard, showFullImage));
  formAddNewPlace.reset();
  closeModal(popupAddNewPlace);
}

buttonAddNewPlace.addEventListener('click', ()=> openModal(popupAddNewPlace));
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
