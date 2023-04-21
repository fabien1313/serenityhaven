import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    color:white;
    margin-top: 10px;
    font-size: 25px;
    li {
        padding: 18px 10px;
    }
`

const Nav = () => {
  return (
    <Ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
    </Ul>
  )
}

export default Nav