import React from 'react';
import styled from 'styled-components'
import Facebook from './img/Facebook.svg'
import Twitter from './img/Twitter.svg'
import GitHub from './img/GitHub.svg'

function Footer() {
  return (
    <FooterWrapper>
      <a><img src={Facebook}/></a>
      <a><img src={Twitter}/></a>
      <a><img src={GitHub}/></a>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  background-color:#161619;
  display:flex;
  justify-content: center;
  padding:20px 0;
  border-radius: 0 0 10px 10px;

  img{
    margin:0 12px;
  }
  `