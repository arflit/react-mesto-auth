import React from 'react';
import logo from '../images/logo-white.svg';
import { Link, NavLink } from 'react-router-dom';


function Header(props) {
  const { email, loggedIn, onSignOut } = props;

  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип: надпись Mesto.Russia"
        className="header__logo"
      />
      <div className="header__link-container">

        {loggedIn ?
        <>
          <p className="header__mail">{email}</p>
          <Link to={process.env.PUBLIC_URL + '/sign-in'} className="header__link button header__link_shadow" onClick={onSignOut}>Выйти</Link>
        </>
        :
        <>
        <NavLink to={process.env.PUBLIC_URL + '/sign-up'} className="header__link button" activeClassName="header__link_hidden" >Регистрация</NavLink>
        <NavLink to={process.env.PUBLIC_URL + '/sign-in'} className="header__link button" activeClassName="header__link_hidden" >Войти</NavLink>
        </>
        }
      </div>
    </header>
  )
}

export default Header;
