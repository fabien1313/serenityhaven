import React from 'react'
import './header.css'
import logo from '../../images/icons/apartments3_256.png'
import logo2 from '../../images/icons/greenBlueTriangle_256.png'

const Header = () => {
  return (
    <header id="header-main-container">

      <div id="header-logo-title">
        Serenity Haven
      </div>
      <div>
        <img id="header-logo-img" src={logo} alt="logo" />

      </div>



    </header>
  )
}

export default Header