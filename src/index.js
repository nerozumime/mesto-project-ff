import './pages/index.css'; // импорт главного файла стилей 
import {initialCards, addCard, deleteCard, likeCard} from './scripts/cards'
import {closeModal, openModal} from './scripts/modal'
import {createCard} from './scripts/card'

// adding cards on load
const placesList = document.querySelector(".places__list");
initialCards.forEach(item => placesList.append(addCard(item, deleteCard, likeCard)));



// popupEditProfile
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const popupContent = document.querySelector('.popup__content');
const formElement = document.querySelector('.popup__form');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditInputName = popupContent.querySelector('.popup__input_type_name');
const profileEditInputDescription = popupContent.querySelector('.popup__input_type_description');

profileEditInputName.value = profileTitle.textContent;
profileEditInputDescription.value = profileDescription.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileDescription.textContent = profileEditInputDescription.value;
    profileTitle.textContent = profileEditInputName.value;
    closeModal();
}

buttonProfileEdit.addEventListener('click', ()=> openModal(popupProfileEdit));
formElement.addEventListener('submit', handleFormSubmit);

// popupAddNewPlace
const buttonAddNewPlace = document.querySelector('.profile__add-button');
const formAddNewPlace = document.forms['new-place'];
const popupAddNewPlace = document.querySelector('.popup_type_new-card');

export function handleAddNewPlaceSubmit(evt) {
  evt.preventDefault(); 
  placesList.prepend(addCard(createCard(), deleteCard, likeCard));
  closeModal();
}

buttonAddNewPlace.addEventListener('click', ()=> openModal(popupAddNewPlace));
formAddNewPlace.addEventListener('submit', handleAddNewPlaceSubmit);

