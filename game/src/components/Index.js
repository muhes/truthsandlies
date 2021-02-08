import React from 'react';

class Index extends React.Component{

    render() {
      return (
        <div cclassName = "container">
          <header className="App-header">
            <p>
              Welcome to bootleg Quiplash
            </p>
            <Form addPlayer = {this.addPlayer}/>
            <p>{this.state.players}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
    
  }
  
  export default Index;