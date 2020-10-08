import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchUniversities} from './actions/fetchUniversities'


class App extends React.Component {

  componentDidMount() {

    // fetch('http://localhost:3000/universities')
    //     .then(resp => resp.json()
    //     .then(university => console.log(university)))
  }
  
  
  render() {
  return (
    <div className="App">
      App
      
    </div>
    );
  }
}


// way to accerssing our values from our store as props
export default connect(null, {fetchUniversities})(App)

// what does line 30 menubar, video 4, min 43:00