const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// 1 popup profile
// создаём переменые
const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

// переменная.команда(событие) функция перехвата команды
openPopup.addEventListener('click', function() {
  popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})
// создаём переменые //тест формы для сохрпанения
const formElement = document.querySelector('.popup__input');
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__occupation');
const nameInpu = document.querySelector('.popup__item_name');
const jobInpu = document.querySelector('.popup__item_occupation');
// сохранение редактированого профиля
const save = document.querySelector('.popup__button-save');

save.addEventListener('click', function() {
  formElement.classList.remove('popup__button-save');
})

// fuction имя функции (параметры) {инструкции}
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameInpu.value;
  jobInput.textContent = jobInpu.value;

  popup.classList.toggle('popup_opened');

}
  formElement.addEventListener('submit', formSubmitHandler);

// 2 popup добавление карточки

const openPopupCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card-nov');
const closePopupCard = document.querySelector('.popup__close-card-nov');

// открытие popup
 openPopupCard.addEventListener('click', function() {
    popupCard.classList.add('nav_card');
})
// закрытие popup
closePopupCard.addEventListener('click', function() {
    popupCard.classList.remove('nav_card');
})
