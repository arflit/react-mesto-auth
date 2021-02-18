import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({})
  }


  const [selectedCard, setSelectedCard] = React.useState({});
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [currentUser, setCurrentUser] = React.useState({
    avatar: 'https://github.com/konjvpaljto/mesto/blob/master/src/images/avatar.jpg?raw=true',
    name: 'Жак Ив-Кусто',
    about: 'Исследователь океана'
  });


  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(`Не удалось загрузить данные пользователя: ${err}`);
      });
  }, [])

  React.useEffect(() => {
    const onKeypress = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }

    document.addEventListener('keydown', onKeypress)

    return () => {
      document.removeEventListener('keydown', onKeypress)
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="popup-avatar"
        submitText="Сохранить"
      >
        <input
          type="url"
          className="popup__form-input"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <div className="popup__form-error-container">
          <span className="avatar-error popup__form-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="popup-profile"
        submitText="Сохранить"
      >
        <input
          type="text"
          className="popup__form-input"
          id="name"
          name="name"
          placeholder="Введите имя"
          required
          minLength="2"
          maxLength="40"
        />
        <div className="popup__form-error-container">
          <span className="name-error popup__form-error"></span>
        </div>
        <input
          type="text"
          className="popup__form-input"
          id="about"
          name="about"
          placeholder="А чем заниметесь?"
          required
          minLength="2"
          maxLength="200"
        />
        <div className="popup__form-error-container">
          <span className="about-error popup__form-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="popup-addcard"
        submitText="Сохранить"
      >
        <input
          type="text"
          className="popup__form-input"
          id="place"
          name="place"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <div className="popup__form-error-container">
          <span className="place-error popup__form-error"></span>
        </div>
        <input
          type="url"
          className="popup__form-input"
          id="link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <div className="popup__form-error-container">
          <span className="link-error popup__form-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
