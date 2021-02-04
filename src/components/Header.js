import React from 'react'; 
import logo from '../images/logo-white.svg';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип: надпись Mesto.Russia" className="header__logo" />
    </header>  
    );
}

export default Header;