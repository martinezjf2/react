import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/universities')
      .then(resp => resp.json())
      .then(university => console.log(university)

      )

  }

  render() {
  return (
    <div className="App">
      App
      
    </div>
    );
  }
}


