import React from 'react'
import apartment from '../../images/icons/resizing-logo.png'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  }
  img {
    position:relative;
    width: 60px;
    height: 60px;
  }
  .title {
  color: white;
  font-size: 34px;
  margin-left: 20px;
  font-family: 'Aboreto', cursive;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #2e45f7, 0 0 70px #2e45f7, 0 0 60px #2e45f7, 0 0 90px #2e45f7, 0 0 120px #2e45f7;
    animation: pulsate 4.5s ease-out infinite;
    @keyframes pulsate {
      0% {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 30px #2e45f7, 0 0 60px #2e45f7, 0 0 70px #2e45f7, 0 0 90px #2e45f7, 0 0 120px #2e45f7;
      }
      50% {
          text-shadow: none;
      }
      100% {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 30px #2e45f7, 0 0 60px #2e45f7, 0 0 70px #2e45f7, 0 0 90px #2e45f7, 0 0 120px #2e45f7;
      }
  }
  .apartment-img {
    position: relative;
    top: 16px;
  }
`

const Header = () => {
  return (
    <Logo>
      <div className='title'>Serenity Haven
      <img className='apartment-img' src={apartment} alt="apartment"/>
      </div>
      <Nav />
    </Logo>
     
  )
}

export default Header