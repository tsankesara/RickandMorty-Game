import React, {Component} from 'react';
import Grid from './components/grid';
import style from './game.module.css';
import {chars, namees} from '../../data/characters'
// import Grid from './components/'
class Game extends Component{
    state = {
        data: chars,
        names: namees,
        curr_name: null,
        counter: 0,
    }
    componentDidMount() {
        let randomEle = this.state.names[Math.floor(Math.random() * this.state.names.length)];
        this.setState({curr_name: randomEle})  
    }
    // randomElement = ([...this.state.names]) => this.state.names[Math.floor(Math.random() * this.state.names.length)];
    // randomName = (names) => {
    //     const randomEle = names[Math.floor(Math.random() * names.length)];
    //     this.setState({curr_name: randomEle})    
    //     console.log(randomEle)
    //     return randomEle;
    // }

    clicked = (personIndex) => {
        const ccurr_data = [...this.state.data];
        const names = [...this.state.names]
        if(ccurr_data[personIndex].name === this.state.curr_name){
            this.setState({counter: this.state.counter +1})
            console.log('Counter + 1')
        }
        else{
            this.setState({counter: this.state.counter - 1 })
            console.log('Counter - 1')
        }
        ccurr_data.splice(personIndex, 1);
        const indexoFName = this.state.names.findIndex((a) => {
            return a === this.state.curr_name
        });
        names.splice(indexoFName, 1)
        const randomEle = names[Math.floor(Math.random() * names.length)]
        console.log(this.state.names)
        this.setState({data: ccurr_data, names: names, curr_name: randomEle});
        
        console.log(names)
      }
    render(){
        
    return(<>
    <h1 style={{'color': '#04bef1', 'float': 'right'}}>{this.state.curr_name}</h1>
    <div className={style.gridd} ><Grid clicked={this.clicked} data={this.state.data}/></div></>);

    }

}
export default Game;