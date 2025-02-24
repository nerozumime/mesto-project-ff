function isValid(form, input, validationParameters) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(
      "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы"
    );
  } else {
    input.setCustomValidity("");
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, validationParameters);
  } else {
    hideInputError(form, input, validationParameters);
  }
}

const showInputError = (form, input, errorMessage, validationParameters) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationParameters.errorClass);
};

function hideInputError(form, input, validationParameters) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  errorElement.classList.remove(validationParameters.errorClass);
}

function hasInvalidInput(form, validationParameters) {
  const inputList = Array.from(
    form.querySelectorAll(validationParameters.inputSelector)
  );
  return inputList.some(
    (item) => !item.validity.valid || item.validity.valueMissing
  );
}

function toggleFormButton(form, validationParameters) {
  const formButton = form.querySelector(
    validationParameters.submitButtonSelector
  );
  if (hasInvalidInput(form, validationParameters)) {
    formButton.disabled = true;
  } else {
    formButton.disabled = false;
  }
}

function setEventListeners(formElement, validationParameters) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationParameters.inputSelector)
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, validationParameters);
      toggleFormButton(formElement, validationParameters);
    });
  });
}

export function clearValidation(form, validationParameters) {
  const inputList = Array.from(
    form.querySelectorAll(validationParameters.inputSelector)
  );
  toggleFormButton(form, validationParameters);
  inputList.forEach((item) => {
    isValid(form, item, validationParameters);
    hideInputError(form, item, validationParameters);
  });
}

export function enableValidation(validationParameters) {
  const forms = Array.from(
    document.querySelectorAll(validationParameters.formSelector)
  );
  forms.forEach((form) => {
    setEventListeners(form, validationParameters);
  });
}
