import React from 'react'
import PopupWithForm from './PopupWithForm'

function SubmitPopup(props) {
  const { isOpen, onClose, onSubmit } = props

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit()
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Вы уверены?"
      name="popup-profile"
      submitText="Подтвердить"
    >
    </PopupWithForm>
  )
}

export default SubmitPopup
