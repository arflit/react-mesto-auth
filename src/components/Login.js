import React from 'react'
import PopupWithTooltip from './PopupWithTooltip';
import { authApi } from '../utils/api'
import { useHistory } from 'react-router-dom';


function Login(props) {

  const { isOpen, onClose, openTooltip, onSignIn } = props;

  const history = useHistory();
  const [email, setEmail] = React.useState('')
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  const [password, setPassword] = React.useState('')
  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('делаю запрос')
    authApi.signIn({
      password,
      email
    })
    .then((data) => {
      localStorage.setItem('token', data.token);
      onSignIn(email)
    })
    .then(() => {
        history.push('./cards')
    })
    .catch((err) => {
      console.log(err)
      openTooltip()
    })
  }

  return (
    <main className="content">
      <div className="login-container">
        <form className="login-form" noValidate onSubmit={handleSubmit}>
          <h2 className="login-form__title">Вход</h2>
          <input
            type="email"
            className="login-form__input"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="popup__form-error-container">
            <span className="email-error popup__form-error"></span>
          </div>
          <input
            type="password"
            className="login-form__input"
            id="password"
            name="password"
            placeholder="Пароль"
            required
            value={password}
            onChange={handleChangePassword}
          />
          <div className="popup__form-error-container">
            <span className="password-error popup__form-error"></span>
          </div>
          <button type="submit" className="login-form__button button">
            Войти
          </button>
        </form>
      </div>
      <PopupWithTooltip
      isOpen={isOpen}
      onClose={onClose}
      result={false}
      />
    </main>
  )
}

export default Login;
