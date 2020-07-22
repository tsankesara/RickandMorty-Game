import React, {Component} from 'react';
import {chars, names} from '../../data/characters'
// import Grid from './components/'
class Game extends Component{
    state = {
        data: chars,
        names: names,
    }
    render(){
        const names = this.state.names.map((name) => {
            return(<p>{name}</p>)
        })
        const tri = this.state.data.map((d) => {
        return(<h1>{d.name}</h1>);
        });
    return(<div>{tri}{names}</div>);

    }

}
export default Game;