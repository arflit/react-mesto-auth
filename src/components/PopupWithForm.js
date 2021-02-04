import React from 'react'; 

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={props.name}>
      <div className="popup__container popup__container_form">
        <button type="button" className="popup__close-button button" onClick={props.onClose}></button>
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__form-title">{props.title}</h2>
            {props.children}
          <button type="submit" className="popup__form-submit-button button">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;