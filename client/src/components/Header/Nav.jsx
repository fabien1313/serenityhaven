import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  align-items: flex-end;

  li {
    margin: 0 10px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
`

const Nav = () => {
  return (
    <Ul>
        <li><a href='/application/personalInfo'>Application</a></li>
        {/* <li><a href='/application/additionalOccupants'>Application2</a></li> */}
        {/* <li><a href='/application/newform'>Application3</a></li> */}
        <li><a href='/'>Home</a></li>
        {/* <li><a href='/about'>About</a></li> */}
        {/* <li><a href='/contact'>Contact Us</a></li> */}
        {/* <li><a href='/signin'>Sign In</a></li> */}
        {/* <li><a href='/signup'>Sign Up</a></li> */}
    </Ul>
  )
}

export default Nav