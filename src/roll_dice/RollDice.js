import React, {Component} from 'react';
import Die from '../die/die'

class RollDice extends Component{
    render(){
        return(
            <div className="RollDice">
                <h1>roll dice</h1>
                <Die/>
            </div>
        )
    }
}

export default RollDice;