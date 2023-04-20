import React from 'react'
import styled from 'styled-components'
import hero from '../../images/background.jpg'

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  .hero {
    width: 100%;
    height: 100vh;
    opacity: 0.9;
  }

`

const Home = () => {
  return (
    <Hero>
    <div>
      <img className='hero' src={hero} alt="Serenity Haven Apartment Image" />
    </div>
    </Hero>
  )
}

export default Home