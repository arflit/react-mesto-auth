import React from 'react';



function  ImagePopup(props) {


  return (
    <div className={props.card._id ? 'popup popup_dark popup_opened' : 'popup popup_dark'} id="popup-bigpicture">
      <div className="popup__container popup__container_picture">
        <button type="button" className="popup__close-button button" onClick={props.onClose}></button>
        <img src={props.card.link} className="popup__picture" alt={props.card.name} />
        <h2 className="popup__pic-title">{props.card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;