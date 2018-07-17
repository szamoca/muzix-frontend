import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import DisplayDzseszon from './components/DisplayDzseszon/DisplayDzseszon';
import PostDzseszonForm from './components/PostDzseszonForm/PostDzseszonForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dzseszonsz: []
    };

    this.getDzseszonsz = this.getDzseszonsz.bind(this);
  }
  
  getDzseszonsz = () => {
    return fetch('http://35.158.214.61:5000/', { mode: 'cors' })
      .then(res => res.json())
      .then(dzsesszonsziz => this.setState({
        dzseszonsz: dzsesszonsziz
      }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Muzix</h1>
        </header>
        <Button label="Get Yo People" handleClick={this.getDzseszonsz}/>
        <DisplayDzseszon tomb={this.state.dzseszonsz}/>
        <PostDzseszonForm />
      </div>
    );
  }
}

export default App;
