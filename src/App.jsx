import React from 'react';
import Image from './Image';
import TopText from './TopText';
import Button from  './Button'
import TextBlock from  './TextBlock'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <main>
      <Image />
      <TopText />
      <div>
        <Button />
        <Button />
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