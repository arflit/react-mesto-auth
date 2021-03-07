import React from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

function Main(props) {
  const {
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    cards,
    onCardClick,
    onCardLike,
    onCardDelete,
    isEditAvatarPopupOpen,
    onUpdateAvatar,
    isEditProfilePopupOpen,
    onUpdateUser,
    isAddPlacePopupOpen,
    onAddCard,
    selectedCard,
    onClose,
  } = props


  const [avatarEditIcon, setAvatarEditIcon] = React.useState(false)
  function showAvatarEditIcon() {
    setAvatarEditIcon(true)
  }
  function hideAvatarEditIcon() {
    setAvatarEditIcon(false)
  }

  const currentUser = React.useContext(CurrentUserContext)

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
            />
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((item) => (
            <Card
              card={item}
              key={item._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}
        onUpdateAvatar={onUpdateAvatar}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
        onUpdateUser={onUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
        onAddCard={onAddCard}
      />
      <ImagePopup onClose={onClose} card={selectedCard} />
    </main>
  )
}
export default Main
