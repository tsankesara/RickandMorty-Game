import React, {Component} from 'react';
import Grid from './components/grid';
import style from './game.module.css';
import {chars, namees, characters} from '../../data/characters'
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
    componentDidUpdate(){
        if ([...this.state.data].length < 4)
        {
            const pickRandom = (arr, count) => {
                let _arr = [...arr];
                return[...Array(count)].map( ()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] ); }
                const chars = pickRandom(characters, 9)
                const namees = chars.map((char) => {
                    return char.name;
            });
            this.setState({data: chars, names: namees})
        }
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
            ccurr_data.splice(personIndex, 1);
            const indexoFName = this.state.names.findIndex((a) => {
            return a === this.state.curr_name
        });
            names.splice(indexoFName, 1)
            const randomEle = names[Math.floor(Math.random() * names.length)]
            this.setState({data: ccurr_data, names: names, curr_name: randomEle});

        }
        else{
            this.setState({counter: this.state.counter - 1 })
            alert('Wrong Answere.')
            const indexofWrongName = this.state.names.findIndex((a)=>{
                return a === names[personIndex]
            })
            console.log(indexofWrongName)
            names.splice(indexofWrongName, 1);
            ccurr_data.splice(personIndex, 1);
            const randomEle = names[Math.floor(Math.random() * names.length)]
            this.setState({data: ccurr_data, names: names, curr_name: randomEle});
        }
      }
    render(){
        const divResstyle ={'color': '#04bef1', 
        'float': 'bottom', 
        'marginTop': '50px', 
        'marginLeft': '100px', 
        'width': '1000px',
        'text-align': 'center'    }
    return(<>
    <div style={divResstyle}>
    <h4 style={{'color': 'red', 'fontWeight': 'bold'}} >Guess The Image!</h4>
    <h1><span style={{'color': 'black', 'fontWeight': 'bold'}}>Name: </span> {this.state.curr_name}</h1>
    <h1><span style={{'color': 'black', 'fontWeight': 'bold'}}>Score: </span> {this.state.counter}</h1> 
    <h3>Created By- Teerth Sankesara</h3></div>
    
    <div className={style.gridd} ><Grid clicked={this.clicked} data={this.state.data}/></div>
    {console.log(this.state.names, '\n')}</>);

    }

}
export default Game;