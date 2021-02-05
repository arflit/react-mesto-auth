import React from 'react'
import api from '../utils/api'
import Card from './Card'

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props

  const [avatarEditIcon, setAvatarEditIcon] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, serCards] = React.useState([])

  function showAvatarEditIcon() {
    setAvatarEditIcon(true)
  }
  function hideAvatarEditIcon() {
    setAvatarEditIcon(false)
  }
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((values) => {
        const [userInfo, initialCards] = values
        const { name, about, avatar } = userInfo
        setUserName(name)
        setUserDescription(about)
        setUserAvatar(avatar)
        serCards(initialCards)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
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
            <Card card={item} key={item._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main
