const popupAddNewPlace = document.querySelector('.popup_type_new-card');

export function createNewCard(){
  const newPlaceInputTitle = popupAddNewPlace.querySelector('.popup__input_type_card-name');
  const newPlaceInputLink = popupAddNewPlace.querySelector('.popup__input_type_url');
  const item = {name: newPlaceInputTitle.value, link: newPlaceInputLink.value};
  newPlaceInputTitle.value = '';
  newPlaceInputLink.value = ''
  return item;
}