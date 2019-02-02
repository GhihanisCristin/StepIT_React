import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (<div className="scoreboard">
    <Header title="Le Titlu"/>
    <div className="player">
      <span className="player-name"
        ><button className="remove-player">✖</button>Guil</span
      >
      <div className="counter">
        <button className="counter-action decrement">-</button
        ><span className="counter-score">0</span>
        <button className="counter-action increment">+</button>
      </div>
    </div>
    <div className="player">
      <span className="player-name"
        ><button className="remove-player">✖</button>Treasure</span
      >
      <div className ="counter">
        <button className="counter-action decrement">-</button
        ><span className="counter-score">0</span
        ><button className="counter-action increment">+</button>
      </div>
    </div>
    <div className="player">
      <span className="player-name">
        <button className="remove-player">✖</button>Ashley
      </span>
      <div className="counter">
        <button className="counter-action decrement">-</button
        ><span className="counter-score">0</span
        ><button className="counter-action increment">+</button>
      </div>
    </div>
    <div className="player">
      <span className="player-name"
        ><button className="remove-player">✖</button>James</span
      >
      <div className="counter">
        <button className="counter-action decrement">-</button
        ><span className="counter-score">0</span
        ><button className="counter-action increment">+</button>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
