import './pages/index.css'; // импорт главного файла стилей 
import {initialCards, addCard, deleteCard} from './scripts/cards'

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Вывести карточки на страницу
initialCards.forEach(item => placesList.append(addCard(item, deleteCard)));






const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const buttonPopupClose = document.querySelector('.popup__close');
const popupContent = document.querySelector('.popup__content');

popupContent.addEventListener('click', (evt)=> evt.stopPropagation());

function closeModal(){
    document.querySelector('.popup_is-opened').removeEventListener('click', closeModal);
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
    buttonPopupClose.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModalWithEsc);
}


function closeModalWithEsc(evt){
  if(evt.key == 'Escape'){
    closeModal();
  }
}

function openModal(modal){
  modal.classList.add('popup_is-opened');
  buttonPopupClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalWithEsc);
  document.querySelector('.popup_is-opened').addEventListener('click', closeModal);
}

buttonProfileEdit.addEventListener('click', ()=> openModal(popupProfileEdit));
