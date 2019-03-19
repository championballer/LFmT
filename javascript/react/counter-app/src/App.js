import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters2'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
