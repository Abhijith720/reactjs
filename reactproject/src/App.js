import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import StatesInFunction from './StatesInFunction';


class App extends Component{
  constructor(){
    super();
    this.state={
      name:"Abhijith"
    }
  }

  changeStateValue=()=>{
    this.setState({
      name:"Hovering"
    })
  }
  stateInitialValue=()=>{
    this.setState({
      name:"Abhijith"
    })
  }
  render(){
  console.log(data)
  return (<div className="App"><h2 onMouseOver={this.changeStateValue}
  onMouseLeave={this.stateInitialValue}>{this.state.name}</h2><App1></App1><StatesInFunction name="Abhijith" age="20 years"/>
  </div>);
}
}
let App1=()=>{
  return <h2>App1 Component</h2>
}
export default App;
