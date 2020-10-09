import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {connect} from 'react-redux';
import UniversityContainer from './containers/UniversityContainer';

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      
      <UniversityContainer />
      
    </div>
    );
  }
}


// way to accerssing our values from our store as props
export default App;

// what does line 30 menubar, video 4, min 43:00