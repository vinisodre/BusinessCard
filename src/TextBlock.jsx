import React from 'react';
import styled from 'styled-components'
function TextBlock(props) {
  return (
    <div>
    <TextBlockTitle>{props.title}</TextBlockTitle>
    <TextBlockText>{props.text}</TextBlockText>
    </div>
  );
}

export default TextBlock;

const TextBlockTitle = styled.h3`
  font-size: 16px;
  margin-bottom:5px;
`
const TextBlockText = styled.p`
  font-size:10px;
  color:#DCDCDC;
  margin-bottom:27px;
  `