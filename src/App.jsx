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
      <TopText />
      <div className="btn-section">
        <Button image={MailIcon} children="Email"/>
        <Button image={LinkedInIcon} children="LinkedIn" style="{background:blue}" />
      </div>
      <div>
        <TextBlock />
        <TextBlock />
      </div>
      <Footer />
    </main>
  );
}

export default App;
