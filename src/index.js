import './pages/index.css'; // импорт главного файла стилей 
import {initialCards, addCard, deleteCard} from './scripts/cards'

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Вывести карточки на страницу
initialCards.forEach(item => placesList.append(addCard(item, deleteCard)));






const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_type_edit');
const buttonPopupClose = document.querySelector('.popup__close');
let currentlyOpenedModal;

function closeModal(){
  currentlyOpenedModal.classList.remove('popup_is-opened');
  currentlyOpenedModal = null;
  buttonPopupClose.removeEventListener('click', closeModal);
}

function closeModalWithEsc(evt){
  if(evt.key == 'Escape'){
    closeModal();
    document.removeEventListener('keydown', closeModalWithEsc);
  }
}

buttonProfileEdit.addEventListener('click', ()=> {
  popupProfileEdit.classList.add('popup_is-opened');
  currentlyOpenedModal = popupProfileEdit;
  buttonPopupClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalWithEsc);
});




/*

document.addEventListener('keydown', (evt)=> { 
  console.log(evt.key);
}); 

function closeOnBackDropClick({ currentTarget, target }) {
  const isClickedOnBackDrop = target === currentTarget;
  if (isClickedOnBackDrop){
    closeModal();
  }
}
*/