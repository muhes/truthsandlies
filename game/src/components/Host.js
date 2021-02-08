import React from 'react';
import axios from 'axios';
export default class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = {players:[]};
      }


    getPlayers(){
        console.log(this.props.location.state.room)
        let body = {
            roomId: this.props.location.state.room
        }

        axios.post('http://localhost:3050/users/room', (body)).then(resp => {

    this.setState({players:resp.data})
    console.log(resp.data);
});
    }
    
    render() {
        return(
        <div className = "container">
            <p>hello {this.props.location.state.name} </p>
            <p> Waiting for game to start</p>
            <p> Players in lobby</p>
            {this.state.players.map((player)=>(
                <p key = {player.name}>{player.name}</p>
            )
            )
    }
            <button onClick={()=> {this.getPlayers()}}click></button>
            
        </div>
        )
    }
}