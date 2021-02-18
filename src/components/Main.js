import React from 'react'
import api from '../utils/api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props

  const [avatarEditIcon, setAvatarEditIcon] = React.useState(false)
  function showAvatarEditIcon() {
    setAvatarEditIcon(true)
  }
  function hideAvatarEditIcon() {
    setAvatarEditIcon(false)
  }

  const currentUser = React.useContext(CurrentUserContext)

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
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__avatar"
            onMouseEnter={showAvatarEditIcon}
          />
          <div
            className={`profile__avatar-edit-button ${
              avatarEditIcon ? 'profile__avatar-edit-button_visible' : ''
            }`}
            onClick={onEditAvatar}
            onMouseLeave={hideAvatarEditIcon}
          ></div>
        </div>
        <div className="profile__info-container">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((item) => (
            <Card
              card={item}
              key={item._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main
