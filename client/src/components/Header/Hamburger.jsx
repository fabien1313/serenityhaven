import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
.bar{
    width: 45px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.line {
    width: 90%;
    height: 5px;
    background-color: white;
    border-radius: 5px;
}
.line::before, .line::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 5px;
    background-color: white;
    border-radius: 5px;
}
.line::before {
    transform: translateY(13px);
}
.line::after {
    transform: translateY(-13px);
}


`




const Hamburger = () => {
  return (
    <Bar>
    <div className='bar'>
        <div className='line'></div>

    </div>
    </Bar>
  )
}

export default Hamburger