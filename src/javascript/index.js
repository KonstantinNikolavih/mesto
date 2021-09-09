

// index.js

import '../page/index.css'; // добавьте импорт главного файла стилей

// 1 popup profile
// создаём переменые
const popupPofile = document.querySelector('.popup_pofil');
const popupEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfileClose = popupPofile.querySelector('.popup__close');

// function открытие popup
 function openPopup(popup) {
  popup.classList.add("popup_opened");
 }
// function закрытие popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
 }
 // открытие
 popupEditProfile.addEventListener('click', function() {
   openPopup(popupPofile)
 })
// закрытие
popupEditProfileClose.addEventListener('click', function() {
  closePopup(popupPofile)
})

// создаём переменые //тест формы для сохрпанения
const formElement = document.querySelector('.popup__input');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__occupation');
const nameInput = document.querySelector('.popup__item_name');
const jobInput = document.querySelector('.popup__item_occupation');
// кнопка пременой для сохранение редактированого профиля
const save = document.querySelector('.popup__button-save');
// закрытие формы после сохранения изменений
save.addEventListener('click', function() {
  closePopup(popupPofile)
})
// fuction имя функции (параметры) {инструкции}
function formProfil (evt) {
  evt.preventDefault();
  // соединяем popup c section profil для созранения изменений
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  /* formElement.reset() */

}
  formElement.addEventListener('submit', formProfil);


// закрытие popup за границей контейнера
// наложить слушитель addEventListener
   popupPofile.addEventListener('click', function() {
    document.addEventListener('click', closePopupZon);
  });
  function closePopupZon (event) {
    if(event.target.classList.contains('popup_opened')) {
      document.querySelector('.popup_opened').classList.remove("popup_opened");
    }
  };


//закрытие popup на кнопку esc
  popupPofile.addEventListener("click", function() {
    document.addEventListener('keydown', closePopupEsc);
  });
  function closePopupEsc (evt) {
    if(evt.key === "Escape") {
      document.querySelector(".popup_opened").classList.remove("popup_opened");
    }
  };



// 2 popup добавление карточки
const openPopupCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card-nov');
const closePopupCard = popupCard.querySelector('.popup__close');


// открытие popup 2
openPopupCard.addEventListener('click', function() {
  openPopup(popupCard)
})
// закрытие popup 2
closePopupCard.addEventListener('click', function() {
  closePopup(popupCard)
})




// переменые popup card img
const elementList = document.querySelector('.elements__list');

const openPopupCardImg = document.querySelector('.elements__img_card');
const popupCardImg = document.querySelector('.popup__card_img');
const closePopupCardImg = popupCardImg.querySelector('.popup__close');
// переменые popup card img // cart title
const elementsTitleCard = document.querySelector('.elements__title_card');

// закрытие 3 popup
closePopupCardImg.addEventListener('click', function() {
  closePopup(popupCardImg)
})

// добовление перемены с карточкими
const popupInputCard = document.querySelector('.popup__input_card');
const popupItemCardName = document.querySelector('.popup__item-card-name');
const popupItemCardJob = document.querySelector('.popup__item-card-occupation');
// обшие переменые для функции добовления карточки
  function parametrCard(card) {
// template карточки
const photoTemplat = document.querySelector('.item_template').content;
const cardElement = photoTemplat.querySelector('.elements__item').cloneNode(true);
const elementsImg = cardElement.querySelector('.elements__img');
const elementsTitl = cardElement.querySelector('.elements__title');
const elementsGroup = cardElement.querySelector('.elements__group');


  elementsImg.setAttribute('src', card.link);
  elementsImg.setAttribute('alt', card.name);
  elementsTitl.textContent = card.name;

// соединяем функции popup card и template // открытие card img
elementsImg.addEventListener('click', function() {
  openPopupCardImg.src = elementsImg.src
  openPopupCardImg.alt = elementsTitl.textContent
  elementsTitleCard.textContent = elementsTitl.textContent
  openPopup(popupCardImg)

});
// вызов лайка
likeCardListeners(cardElement)
// функция лайк карточки
function likeCard (evt) {
  evt.target.classList.toggle('elements__group_active');
}
function likeCardListeners(element) {
  element.querySelector('.elements__group').addEventListener('click', likeCard);
};
// удаление карточек
deleteCardListeners(cardElement);
// fuction удаления карточки
function deleteCard (evt) {
  evt.target.closest('.elements__item').remove();
};
function deleteCardListeners(element) {
  element.querySelector('.elements__dele').addEventListener('click', deleteCard);
};

return cardElement
}
function addCards(cardLos) {
  const card = parametrCard(cardLos);
  elementList.prepend(card);
}

// form для добавления карты и сброс карты и закрытие popup
popupInputCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  addCards({
  name: popupItemCardName.value,
  link: popupItemCardJob.value
})

  popupInputCard.reset()
  closePopup(popupCard)
});
// добовления карточек из массива
const arrayCards = function() {
  initialCards.forEach (card => addCards(card))
}
// вызов из массива
arrayCards()

import './validate.js';
import {initialCards} from './card.js';
