import React from 'react';
import styled from 'styled-components'

function Image() {
  return (
    <div>
      <TopImg src="https://www.dicasdemulher.com.br/wp-content/uploads/2021/08/maquiagem-e-girl-0001.png" />
    </div>
    
  );
}

export default Image;

const TopImg = styled.img`
  width:100%;
  heigth:100%;
  object-fit:cover;

  `
