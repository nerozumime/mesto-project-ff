export function closeModal(){
  document.querySelector('.popup_is-opened').removeEventListener('click', closeModal);
  document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
  document.querySelector('.popup__close').removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalWithEsc);
}

function closeModalWithEsc(evt){
  if(evt.key == 'Escape'){
    closeModal();
  }
}

export function openModal(modal){
  //modal.classList.add('popup_is-animated');
  modal.classList.add('popup_is-opened');
  modal.querySelector('.popup__close').addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalWithEsc);
  modal.querySelector('.popup__content').addEventListener('click', (evt)=> evt.stopPropagation());
  document.querySelector('.popup_is-opened').addEventListener('click', closeModal);
}