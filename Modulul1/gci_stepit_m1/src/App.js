import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Player from './Components/Player';

class App extends Component {
  state = {
    players: [
      { name: "GCI", id: 1 },
      { name: "Gigel", id: 2 },
      { name: "Ionel", id: 3 },
    ]
  }
  render() {
    {/*aici se pot declara alte variabile, inainte de return*/ }
    return (
      <div className="scoreboard">
        <Header title="Le Titlu" numar={this.state.players.length} />
        {this.state.players.map(item => (
          <Player 
            key  = {item.id.toString()}
            player={item.name} 
            id={item.id} />
        ))}
      </div>
    );
  }
}

export default App;
