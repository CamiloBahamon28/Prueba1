import React, { useState } from 'react';
import { Topbar } from './components/Topbar/Topbar';
import { Intro } from './components/Intro/Intro';
import {About} from './components/About/About'
import {Methodology} from './components/Methodology/Methodology'
import {ContactUs} from './components/ContactUs/ContactUs'
import './App.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Methodology />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
