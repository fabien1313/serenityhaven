import React, {useState} from 'react'
import './header.css'
import logo from '../../images/icons/apartments3_256.png'


const Header = () => {

  



  return (
    <header id="header-main-container">

  <div id="header-container-all-elems-div">
      <div id="header-container-logo-img">
        <div id="header-logo-title">
          Serenity Haven
        </div>
        <div id="header-img-div">
          <img id="header-logo-img" src={logo} alt="logo" />
        </div>
      </div>

      <div id="header-nav-div">
        <h3 className='header-nav-item1'>nav1</h3>
        <h3 className='header-nav-item2'>nav2</h3>
        <h3 className='header-nav-item3'>nav3</h3>
        <h3 className='header-nav-item4'>nav4</h3>
      </div>
  </div>



    </header>
  )
}

export default Header