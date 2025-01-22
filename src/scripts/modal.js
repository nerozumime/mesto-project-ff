export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalWithEsc);
} 

function closeModalWithEsc(evt) {
  if (evt.key == "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalWithEsc);
}
