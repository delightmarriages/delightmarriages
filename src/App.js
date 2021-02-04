import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import WeadingDetails from './components/WeadingDetails2';
import Invitation from './components/Invitation';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <WeadingDate />
     <CountDown />
     <Invitation />
     <Weadingloaction />
     <WeadingDetails />
     <Contact />
    </div>
  );
}

export default App;
