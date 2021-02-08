import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Game from './components/InGame'
import Host from './components/Host'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

class App extends React.Component{

  state= {
    players : [], name : "m"
  }

  addPlayer = (player) =>{
    
    this.setState({players:[...this.state.players,player]}) 
    //console.log(this.state.players)
    // UPDATE EXACT PATH
  }
  render() {
    return (
      <Router>
        <Route exact path = "/" render = {(props) => (
          <Form {...props} addPlayer = {this.addPlayer} players= {this.state.players} />
        )}/>
         
        <Route exact path = "/enter" render = {(props) => (
          <Game {...props} players= {"hello"} />
        )}/>
        <Route exact path = "/host" render = {(props) => (
          <Host {...props} players= {"hello"} />
        )}/>
      </Router>
    );
  }
  
}

export default App;
