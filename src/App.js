import React, { useState } from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [diceNumber, setDiceNumber] = useState(0);

  const rollDice = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
  };

  return (
    <div className="app">
      <h1>Угадай число!</h1>
      <Dice number={diceNumber} />
      <button className='dice__button' onClick={rollDice}>Бросить кубик</button>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import DiceApp from './components/DiceApp';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;*/
