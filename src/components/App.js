import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  )
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  const [selectedCard, setSelectedCard] = React.useState({})
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [currentUser, setCurrentUser] = React.useState({
    avatar:
      'https://github.com/konjvpaljto/mesto/blob/master/src/images/avatar.jpg?raw=true',
    name: 'Жак Ив-Кусто',
    about: 'Исследователь океана',
  })

  function handleUpdateUser(data) {
    api
      .updateUserInfo(data)
      .then((data) => {
        setCurrentUser(data)
      })
      .then(() => {
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Не удалось обновить данные пользователя: ${err}`)
      })
  }

  function handleUpdateAvatar(data) {
    api.setNewAvatar(data.avatar)
    .then(() => {
      setCurrentUser({
        avatar: data.avatar,
        name: currentUser.name,
        about: currentUser.about
      })
    })
    .then(() => {
      closeAllPopups()
    })
    .catch((err) => {
      console.log(`Не удалось обновить аватар: ${err}`)
    })

  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(`Не удалось загрузить данные пользователя: ${err}`)
      })
  }, [])

  React.useEffect(() => {
    const onKeypress = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
        console.log('zhopa');
      }
    }

    document.addEventListener('keydown', onKeypress)

    return () => {
      document.removeEventListener('keydown', onKeypress)
    }
  }, [])

  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    function updateCards(newCard) {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c))
      // Обновляем стейт
      setCards(newCards)
    }

    if (isLiked) {
      api
        .removeCardLike(card._id)
        .then((newCard) => {
          updateCards(newCard)
        })
        .catch((err) => {
          console.log(`Не удалось поставить лайк: ${err}`)
        })
    } else {
      api
        .addCardLike(card._id)
        .then((newCard) => {
          updateCards(newCard)
        })
        .catch((err) => {
          console.log(`Не удалось снять лайк: ${err}`)
        })
    }
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id
    if (isOwn) {
      api.removeCard(card._id)
      .then(() => {
          const newCards = cards.filter((c) => {
            if (c._id === card._id) {
              return false
            } else {
              return true
            }
          })
          setCards(newCards)
        })
        .catch((err) => {
          console.log(`Не удалось удалить карточку: ${err}`)
        })
    } else {
      console.log(
        `Не удалось удалить карточку: вы не хозяин. Нечего на скрытые кнопки жать!`
      )
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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

export default App
