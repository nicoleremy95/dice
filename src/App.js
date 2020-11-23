import React, {Component} from 'react';
import './App.css';
import RollDice from './roll_dice/RollDice'

class App extends Component {
  render(){
    return(
      <div className="App">
        <RollDice/>
      </div>
    )
  }
}

export default App;
