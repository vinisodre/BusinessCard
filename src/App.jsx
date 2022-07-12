import React from 'react';
import Image from './Image';
import TopText from './TopText';
import Button from  './Button'
import TextBlock from  './TextBlock'
import Footer from './Footer'
import MailIcon from './img/Mail.svg'
import LinkedInIcon from './img/linkedin.svg'
import './App.css';

function App() {
  return (
    <main>
      <Image />
      <div className="wrapper">
      <TopText />
      <div className="btn-section">
        <Button image={MailIcon} children="Email"/>
        <Button image={LinkedInIcon} children="LinkedIn" style="{background:blue}" />
      </div>
      <div className="mainText">
        <TextBlock 
          title="About" 
          text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."/>
        <TextBlock 
          title="Interests"
          text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
      </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
