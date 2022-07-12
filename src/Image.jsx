import React from 'react';
import styled from 'styled-components'
import Imagem from './img/Girl.png'

function Image() {
  return (
    <div>
      <TopImg src={Imagem} />
    </div>
    
  );
}

export default Image;

const TopImg = styled.img`
  width:100%;
  heigth:100%;
  object-fit:cover;

  `
