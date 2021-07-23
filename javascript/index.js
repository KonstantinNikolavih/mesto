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
  formElement.reset()

}
  formElement.addEventListener('submit', formProfil);

// 2 popup добавление карточки

/* const popupPofile = document.querySelector('.popup_pofil');
const popupEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfileClose = popupPofile.querySelector('.popup__close'); */

const openPopupCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card-nov');
const closePopupCard = popupCard.querySelector('.popup__close');

// открытие popup
/* openPopupCard.addEventListener('click', function() {
  popupCard.classList.add('popup_opened');
})
// закрытие popup
closePopupCard.addEventListener('click', function() {
  popupCard.classList.remove('popup_opened');
}) */



// открытие
/* popupEditProfile.addEventListener('click', function() {
  openPopup(popupPofile)
})
// закрытие
popupEditProfileClose.addEventListener('click', function() {
 closePopup(popupPofile)
}) */



// открытие
openPopupCard.addEventListener('click', function() {
  openPopup(popupCard)
})
// закрытие
closePopupCard.addEventListener('click', function() {
  closePopup(popupCard)
})
// function закрытия popup добовление карточки
/* function openPopupCardImgl(popupCard) {
  popupCard.classList.remove('nav_card')
} */
// переменые popup card img
const photoList = document.querySelector('.elements__list');
/* const openImgP = document.querySelector('.popup_cards'); */
const openPopupCardImg = document.querySelector('.elements__img_card');
const popupCardImg = document.querySelector('.popup__card_width');
const popupCloseCardImg = document.querySelector('.popup__close-card-img');
// переменые popup card img // cart title
const elementsTitleCard = document.querySelector('.elements__title_card');
// открытие 3 popup с большой картинкой
openPopupCardImg.addEventListener('click', function() {
  popupCardImg.classList.add('popup_img');
})
// закрытие 3 popup
popupCloseCardImg.addEventListener('click', function() {
  popupCardImg.classList.remove('popup_img');
})
// function открытие img card
function openImgPol2(popupCard1) {
  popupCard1.classList.add('popup_img')
}

// добовление перемены с карточкими
const popupInputCard = document.querySelector('.popup__input_card');
const popupItemCardName = document.querySelector('.popup__item-card-name');
const popupItemCardOccupation = document.querySelector('.popup__item-card-occupation');
// обшие переменые для функции добовления карточки
  function parametrCard(cards) {
// template карточки
const photoTemplate = document.querySelector('.item_template').content;
const cardElement = photoTemplate.querySelector('.elements__item').cloneNode(true);
const elementsImg = cardElement.querySelector('.elements__img');
const elementsTitle = cardElement.querySelector('.elements__title');
const elementsGroup = cardElement.querySelector('.elements__group');


  elementsImg.setAttribute('src', cards.link);
  elementsImg.setAttribute('alt', cards.name);
  elementsTitle.textContent = cards.name;

// соединяем функции popup card и template // открытие card img
elementsImg.addEventListener('click', function() {
  openPopupCardImg.src = elementsImg.src
  openPopupCardImg.alt = elementsTitle.textContent
  elementsTitleCard.textContent = elementsTitle.textContent
  openImgPol2(popupCardImg)

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
  const cards = parametrCard(cardLos);
  photoList.prepend(cards);
}

// form для добавления карты и сброс карты и закрытие popup
popupInputCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  addCards({
  name: popupItemCardName.value,
  link: popupItemCardOccupation.value
})

  popupInputCard.reset()
  openPopupCardImgl(popupCard)
});
// добовления карточек из массива
const arrayCards = function() {
  initialCards.forEach (cards => addCards(cards))
}
// вызов из массива
arrayCards()
