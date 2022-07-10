import React from 'react';
import styled from 'styled-components'

function TopText() {
  return (
    <Section>
      <Name>Laura Smith</Name>
      <Profession>Frontend Developer</Profession>
      <Email>laurasmith.website</Email>
    </Section>
  );
}

export default TopText;

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:21px;
  margin-bottom:15px;
  `

const Name = styled.h2`
  font-size:25px;
  font-weight:800;
  margin-bottom:6px;
  `

const Profession = styled.h2`
  font-size:12;px;
  color:#F3BF99;
  margin-bottom:9px;
  `

const Email = styled.h2`
  font-size:10px;
  color:#F5F5F5;
  `

