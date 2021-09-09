//форма валидации
export
 function enableValidation() {
  const form = document.querySelector('.popup__input');
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);

  const formCard = document.querySelector('.popup__input_card');
  formCard.addEventListener('submit', handleFormSubmit);
  formCard.addEventListener('input', handleFormInput);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
   const isValid = form.checkValidity();

  if (isValid) {
   /*  form.reset(); */
  } else {
   /*  form.reset(); */
  }
}


function handleFormInput (event) {
  const input = event.target;
  const form = event.currentTarget;

  setCustomError(input);
  setFieldError(input)
  setSubmitButtonState(form)
}

// Найдём невалидные поля и установим ис тексты ошибок
function setCustomError(input) {
  const validity = input.validity;
  input.setCustomValidity("");

  if (validity.tooShort || validity.tooLong) {
     const currentLength = input.value.length;
     const min = input.getAttribute("minlength");
     const max = input.getAttribute("maxlength");
    input.setCustomValidity(
       `Вы пропустили это поле. Введено ${currentLength}, а должно быть от ${min} до ${max}`
    );
  }
  if (validity.typeMismatch) {
    input.setCustomValidity('Ведите адрес сайта');
  }
}
// Показываем тексты ошибок пользователям
function setFieldError(input) {
  const span = document.querySelector(`#error__${input.id}`);
  span.textContent = input.validationMessage;
}
// Активируем или деактивируем кнопку
function setSubmitButtonState(form) {

  const button = form.querySelector('.popup__button-save');
  const isValid = form.checkValidity();

if (isValid) {
  button.classList.add('popup__button-save_disabled');
  button.classList.remove('popup__button-save_active');
  button.removeAttribute('disabled');
} else {
  button.classList.remove('popup__button-save_disabled');
  button.classList.add('popup__button-save_active');
  button.setAttribute('disabled', 'disabled');
  }
}

enableValidation();
