import React from 'react';
import axios from 'axios';
import {InputGroup, FormControl} from 'react-bootstrap';
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
            <p> two truths one lie</p>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">1</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Enter Lie"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">2</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Enter Lie"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">3</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Enter Truth"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
  
           
        </div>
        )
    }
}