import React from 'react'; 
import api from '../utils/Api';
import Card from './Card';

function Main (props) {

  const [userName, setUserName] = React.useState('Жак Ив-Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, serCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {      
      setUserName(data.name);
      setUserDescription(data.job);
      setUserAvatar(data.avatar);
    })
    .then(() => {
      return api.getInitialCards()
    })
    .then((data) => {
      serCards(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info-container">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button type="button" className="profile__add-button button" onClick={props.onAddPlace}></button>
        </section>
        <section className="cards">
          <ul className="cards__list">
            {cards.map((item) => (
              <Card card={item} key={item._id} onCardClick={props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    );
}
export default Main;