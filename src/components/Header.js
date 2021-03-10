import React from 'react'
import logo from '../images/logo-white.svg'
import { Link, NavLink } from 'react-router-dom'
import menuIcon from '../images/menuicon.png'
import menuCloseIcon from '../images/menucloseicon.png'

function Header(props) {
  const { email, loggedIn, onSignOut } = props

  const [isMobile, setMobile] = React.useState(() => {
    if (window.innerWidth < 620) {
      return true
    } else {
      return false
    }
  })

  React.useEffect(() => {
    const onScreenChange = () => {
      if (window.innerWidth < 620) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }

    window.addEventListener('resize', onScreenChange)

    return () => {
      window.removeEventListener('resize', onScreenChange)
    }
  }, [])

  const signedOut = (
    <nav className="header__link-container">
      <NavLink
        to="/sign-up"
        className="header__link button"
        activeClassName="header__link_hidden"
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/sign-in"
        className="header__link button"
        activeClassName="header__link_hidden"
      >
        Войти
      </NavLink>
    </nav>
  )

  const signedInDesktop = (
    <nav className="header__link-container">
      <p className="header__mail">{email}</p>
      <Link
        to="/sign-in"
        className="header__link button header__link_shadow"
        onClick={onSignOut}
      >
        Выйти
      </Link>
    </nav>
  )
  const signedInMobile = <nav className="header__link-container"></nav>

  function menu() {
    if (!loggedIn) {
      return signedOut
    } else if (!isMobile) {
      return signedInDesktop
    } else {
      return signedInMobile
    }
  }

  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип: надпись Mesto.Russia"
        className="header__logo"
      />

      {menu()}
    </header>
  )
}

export default Header
