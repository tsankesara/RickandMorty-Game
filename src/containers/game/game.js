import React, {Component} from 'react';
import Grid from './components/grid';

import {chars, names} from '../../data/characters'
// import Grid from './components/'
class Game extends Component{
    state = {
        data: chars,
        names: names,
    }
    clicked = (index) => {
        const msg = 'Hey' + index + 'was cliked!'
        alert(msg)
        }
    render(){
        
    return(<div><Grid clicked={this.clicked} data={this.state.data}/></div>);

    }

}
export default Game;