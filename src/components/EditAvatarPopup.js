import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
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
      ref={avatarRef}
    />
    <div className="popup__form-error-container">
      <span className="avatar-error popup__form-error"></span>
    </div>
  </PopupWithForm>
  )
}

export default EditAvatarPopup;
