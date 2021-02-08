import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/form.css'
import Axios from 'axios'
import Game from './InGame'
export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name:'', room: ''};
      }
    

    enter = () => {
        console.log("enter")
        const player = this.getInputValue("name")
        this.props.addPlayer(player)
        console.log(this.props.players)
    }
    getplayers = () =>{
        fetch('/users')
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    createPlayer = () =>{
        console.log('create player')
        const name = this.getInputValue("name")
        const room = this.getInputValue("room")
        this.setState({name:name})
        this.setState({room:room})
        console.log(name)
        //const room = document.getElementById("room").value;
        let body = {
            name: name,
            roomId: room
        }
        
        Axios.post(
            'http://localhost:3050/users',
            (body)
        )
        
    }
    getInputValue = (inputName) =>{
        var inputVal = document.getElementsByClassName(inputName)[0].value;
        console.log(inputVal)
        return inputVal
    }
    host() {
        console.log("host")
    }
    render() {
        return (<div>
            <div className = "form">
            <input type = "text" className = "name" placeholder = "name" id = "name"></input>
            <input className = "room" placeholder = "room" id = "room"></input>
            <button onClick = {() =>this.createPlayer()}>Confirm Name</button>
            <button onClick = {this.host}>Host</button>
            </div>
            <div className = "nameSpot">
            <p>{this.props.players}</p>
            </div>
            <div className = "linkHolder">

            
            <Link  className = "joinLink" to={{
                pathname:"/enter",
                state:{
                    name: this.state.name,
                    room: this.state.room
                }
            }}>Join</Link>
            
            <Link  className = "hostLink" to={{
                pathname:"/host",
                state:{
                    name: this.state.name,
                    room: this.state.room
                }
            }}>Host</Link>
            </div>
            
        </div>)
      }
}

