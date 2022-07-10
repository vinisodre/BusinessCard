import React from 'react';
import styled from 'styled-components'

function Button(props) {
  return (
    <Btn>
      <img src={props.image} />
      <p>{props.children}</p>
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  width:115px;
  border-radius: 6px;
  display: flex;
  justify-content:center;
  align-items: center;
  color: black;

  p{
    color:black;
    margin 9px 0;
    padding-left:8px;
  }
  `
