import React from 'react'; 

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  function handleEditAvatarClick () {
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick () {
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick () {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card); 
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="popup-avatar" />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name="popup-profile" />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="popup-addcard" />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />

    </div>

  );
}

export default App;
