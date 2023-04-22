import React from 'react'
import apartment from '../../images/pic1.webp'
import styled from 'styled-components'
import Nav from './Nav'
import Hamburger from './Hamburger'

const Logo = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  height: 110px;
  margin-bottom: 10px;
  }
  .logoTitle {
    display: flex;
    align-items: flex-end;
    padding-left: 20px;
    gap: 10px;
  }
  .logoTitle img {
    border-radius: 50%;
    box-shadow: 
      0 0 2px #ffffff, 
      0 0 4px #94a0ff,
      0 0 6px #8592ff,
      0 0 8px #707fff,
      0 0 10px #5e6fff,
      0 0 12px #4e5fff,
      0 0 14px #3e4fff,
      0 0 16px #2e3fff;
  }
  img {
    position:relative;
    width: 60px;
    height: 60px;
    margin-left:12px;
  }
  .title {
  color: white;
  font-family: 'Aboreto', cursive;
  text-shadow: 
    0 0 10px #fff, 
    0 0 20px #fff, 
    0 0 30px #fff, 
    0 0 40px #2e45f7, 
    0 0 70px #2e45f7, 
    0 0 60px #2e45f7, 
    0 0 90px #2e45f7, 
    0 0 120px #2e45f7;
    animation: pulsate 4.5s ease-out infinite;
    @keyframes pulsate {
      0% {
          text-shadow: 
            0 0 10px #fff, 
            0 0 20px #fff, 
            0 0 30px #fff, 
            0 0 30px #2e45f7, 
            0 0 60px #2e45f7, 
            0 0 70px #2e45f7, 
            0 0 90px #2e45f7, 
            0 0 120px #2e45f7;
      }
      50% {
          text-shadow: none;
      }
      100% {
          text-shadow: 
            0 0 10px #fff, 
            0 0 20px #fff, 
            0 0 30px #fff, 
            0 0 30px #2e45f7, 
            0 0 60px #2e45f7, 
            0 0 70px #2e45f7, 
            0 0 90px #2e45f7, 
            0 0 120px #2e45f7;
      }
  }
  .apartment-img {
    // position: relative;
    // top: 16px;
    left: 16px;
  }
`

const Header = () => {
  return (
    <Logo>
      <div className='logoTitle'>
        <Hamburger />
        <a href='/'><img className='apartment-img' src={apartment} alt="apartment"/></a>
        <div className='title'>Serenity Haven</div>
      </div>
      <Nav />
    </Logo>
     
  )
}

export default Header