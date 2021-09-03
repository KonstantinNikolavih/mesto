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






