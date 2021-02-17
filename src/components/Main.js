import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  const [avatarEditIcon, setAvatarEditIcon] = React.useState(false);
  function showAvatarEditIcon() {
    setAvatarEditIcon(true)
  }
  function hideAvatarEditIcon() {
    setAvatarEditIcon(false)
  }

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, serCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        serCards(data)
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
            <Card card={item} key={item._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main;
