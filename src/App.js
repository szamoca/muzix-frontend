import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import DisplayDzseszon from './components/DisplayDzseszon/DisplayDzseszon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dzseszonsz: []
    }
  }
  
  getDzseszonsz = () => {
    return fetch('https://2a328232.ngrok.io/', { mode: 'cors' })
      .then(res => res.json())
      .then(dzsesszonsziz => console.log(dzsesszonsziz))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Muzix</h1>
        </header>
        <Button label="Get Yo People" onClick={this.getDzseszonsz}/>
        <DisplayDzseszon tomb={this.state.dzseszonsz}/>
      </div>
    );
  }
}

export default App;
