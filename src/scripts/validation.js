export function isValid (form, input){
  if(input.validity.patternMismatch){
    input.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы")
  } else {
    input.setCustomValidity("");
  }
  const formButton = form.querySelector('.popup__button');
  console.log(input.validity)
  if(!input.validity.valid){
     showInputError(form, input, input.validationMessage);
     formButton.disabled = true;
  } else {
    hideInputError(form, input);
    formButton.disabled = false;
  }
}

const showInputError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = errorMessage; 
  errorElement.classList.add('form__input-error_active');
};

function hideInputError(form, input){
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove('form__input-error_active');
  
}

export function validateInputs(form){
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  inputList.forEach(item => isValid(form, item));
}