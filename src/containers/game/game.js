import React, {Component} from 'react';
import Grid from './components/grid';
import style from './game.module.css';
import {chars, names} from '../../data/characters'
// import Grid from './components/'
class Game extends Component{
    state = {
        data: chars,
        names: names,
    }
    clicked = (id) => {}
    render(){
        
    return(<div className={style.gridd} ><Grid clicked={this.clicked} data={this.state.data}/></div>);

    }

}
export default Game;