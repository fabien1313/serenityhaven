import styled from 'styled-components';
import {useState} from 'react';
import React, { useEffect} from 'react';
import ham from './ham';

const Bar = styled.div`
.bar{
    width: 45px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}
.line {
    width: 90%;
    height: 5px;
    background-color: white;
    border-radius: 5px;
    transition: all 400ms ease-in-out;
}
.line::before, .line::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 5px;
    background-color: white;
    border-radius: 5px;
    transition: transform 400ms ease-in-out;
}
.line::before {
    transform: translateY(13px);
}
.line::after {
    transform: translateY(-13px);
}
.bar.active .line {
    background-color: transparent;
}

.bar.active .line::after {
    transform: rotate(45deg);
}
.bar.active .line::before {
    transform: rotate(-45deg);
}
`

const Hamburger = () => {
    const [bar, setBar] = useState(false);
    
    useEffect(() => {
      ham();
    }, []);
  
    const classes = bar ? 'bar active' : 'bar';
  
    return (
      <Bar>
        <div className={classes} onClick={() => setBar(!bar)}>
          <div className="line"></div>
        </div>
      </Bar>
    );
  };

export default Hamburger