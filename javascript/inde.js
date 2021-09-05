//форма валидации
// переменые формы профеля
const formProfilValit = document.querySelector('#formProfil');
const firstname = document.querySelector('#firstname');
const firstoccupation = document.querySelector('#firstoccupation');
const submitProfil = document.querySelector('#submitProfil');
// переменые формы карточки
/* const formCardValit = document.querySelector('#formCard');
const cardfirstname = document.querySelector('#cardfirstname');
const cardfirstoccupation = document.querySelector('#cardfirstoccupation');
const submitCard = document.querySelector('#submitCard'); */


firstname.addEventListener('input', handleValedate);
firstoccupation.addEventListener('input', handleValedate);

/* cardfirstname.addEventListener('input', handleValedate);
cardfirstoccupation.addEventListener('input', handleValedate); */


submitProfil.addEventListener('click', sendForm);

function handleValedate(event) {
  console.log(event)
  isValid(event.target)
}


function activateError(element) {
  element.parentNode.classList.add('input-continer');
}

function resetError(element) {
  element.parentNode.classList.remove('input-continer');
  element.textContent = '';
}

function isValid(element) {
  const errorElement = document.querySelector('#error-${element.id}');
  resetError(errorElement);

  if (!element.checkValidity()) {
    errorElement.textContent = 'z - 0'/* element.validationMessage */;
    acttionError(errorElement);
    return false;
  }
    return true;
}


//обработка формы
function sendForm(event) {
  event.preventDefault();
/* console.log(form.element); */
  const inputs = Array.form(form.element);



  let isValidForm = true;
  inputs.forEach(() => {
    if (elem.id !== submit.id) {
      if (!isValid(elem)) isValidForm = false;
    }
  });

      if (isValidForm) {
        console.log ('sen');
      } else {
        console.log('---');
      }


}


//вареант 2
//форма валидации
// Переменные
/* const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat'); */
const email = document.querySelector('#email');
const username = document.querySelector('#username');

const forms = document.querySelector('#forms');
const submit = document.querySelector('#submit');
// Слушатели
username.addEventListener('input', handleValidate);
email.addEventListener('input', handleValidate);
/* password.addEventListener('input', handleValidate);
passwordRepeat.addEventListener('input', handleValidate); */

/* const ERRORS = {
  passwordRepeat: 'Пароли должны совпадать'
} */

// email.addEventListener('focus', handleValidate);

submit.addEventListener('click', sendForm);
// Функции-обработчики

function handleValidate(event) {
  console.log(event);
  isValid(event.target);
}

function activateError(element) {
  element.parentNode.classList.add('input-container__invalid');
}

function resetError (element) {
  element.parentNode.classList.remove('input-container__invalid');
  element.textContent = '';
}

/* function isPasswordMatch(element) {
  if (element.id !== password.id && element.id !== passwordRepeat.id) {
    return true;
  }

  if (password.value === passwordRepeat.value) {
    resetError(password);
    resetError(passwordRepeat);
    return true;
  }

  return false;
}
 */
function isValid(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);
  resetError(errorElement);

  if (!element.checkValidity()) {
    console.log(element.validationMessage);
    errorElement.textContent = element.validationMessage;
    activateError(errorElement);
    return false;
  } /* else if (!isPasswordMatch(element)) { */
    /* const errorMessage = ERRORS.passwordRepeat; */

/*     errorElement.textContent = errorMessage;
    activateError(errorElement);
    return false;
  }
 */
  return true;
}

function sendForm(event) {
  event.preventDefault();

  const inputs = Array.from(forms.elements);

  let isValidForm = true;
  inputs.forEach((elem) => {
    if (elem.id !== submit.id) {
      if (!isValid(elem)) isValidForm = false;
    }
  });

  if (isValidForm) {
    console.log('Success!');
  } else {
    console.log('Form is still not validated =(');
  }
}






/*
//форма валидации
// Переменные
const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const firstoccupation = document.querySelector('#firstoccupation');
const submitProfil = document.querySelector('#edit__button');

//profil форма
firstname.addEventListener('input', handleValidate);
firstoccupation.addEventListener('input', handleValidate);


submitProfil.addEventListener('click', sendForms);

function handleValidate(event) {
  isValid(event.target);
}

function activateError(element) {
  element.parentNode.classList.add('popup__item_error_q');
}

function resetError (element) {
  element.parentNode.classList.remove('popup__item_error_q');
  element.textContent = '';
}


function isValid(element) {
  const errorElement = document.querySelector(`#error__${element.id}`);
  resetError(errorElement);

  if (!element.checkValidity()) {
    errorElement.textContent = element.validationMessage;
    activateError(errorElement);
    return false;
  }

  return true;
}

function sendForms(event) {
  event.preventDefault();

  const inputs = Array.from(form.elements);

  let isValidForm = true;
  inputs.forEach((elem) => {
    if (elem.id !== submitProfil.id) {
      if (!isValid(elem)) isValidForm = false;
    }
  });
}





//форма валидации
// Переменные card
const formCard = document.querySelector('#formCard');
const cardfirstname = document.querySelector('#cardfirstname');
const cardfirstoccupation = document.querySelector('#cardfirstoccupation');
const editButtonCard = document.querySelector('#edit__button-card');

//card форма
cardfirstname.addEventListener('input', handleValidate);
cardfirstoccupation.addEventListener('input', handleValidate);


editButtonCard.addEventListener('click', sendFormsCard);

function handleValidate(event) {
  isValid(event.target);
}

function activateError(element) {
  element.parentNode.classList.add('popup__item_error_q');
}

function resetError (element) {
  element.parentNode.classList.remove('popup__item_error_q');
  element.textContent = '';
}


function isValid(element) {
  const errorElement = document.querySelector(`#error__${element.id}`);
  resetError(errorElement);

  if (!element.checkValidity()) {
    errorElement.textContent = element.validationMessage;
    activateError(errorElement);
    return false;
  }

  return true;

}

//проверка полей вода
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
//не активная кнопка
/////////////////////////////////////////////
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button-save_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__button-save_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');
    console.log('toggleButtonState');
    debugger;
  }
};


const setEventListeners = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll(`.popup__item`));
const buttonElement = formElement.querySelector('.popup__button-save');
toggleButtonState(inputList, buttonElement);
inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    isValid(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
});
};
///////////////////////////////////////


function sendFormsCard(event) {
  event.preventDefault();

  const inputs = Array.from(formCard.elements);

  let isValidForm = true;
  inputs.forEach((elem) => {
    if (elem.id !== editButtonCard.id) {
      if (!isValid(elem)) isValidForm = false;
    }
  });
} */



/////////////////////////////////////////////////////////////////////////////////
// версия 2



/* const showInputError = (formElement, inputElement, errorMessage,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, { ...rest }) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest
    );
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);

  } else {
    buttonElement.classList.remove(inactiveButtonClass);

  }
};

const setEventListeners = ( formElement, { inputSelector, submitButtonSelector, ...rest }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

      setEventListeners(fieldSet, rest);
    })

};

enableValidation({
  formSelector: ".popup__input",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: ".popup__button-save_disabled",
  inputErrorClass: ".popup__item_error",
  errorClass: ".popup__item_error_q",
}); */
