import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters2'
import Navbar from './components/navbar'

class App extends Component {

  state = {
    counters : [
    {id:1,value:5},
    {id:2,value:0},
    {id:3,value:0}
    ]
  }

  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    let counters = this.state.counters;
    counters[index].value++;
    this.setState({counters});
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter( c => c.id!==counterId);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value=0;
      return c;
    });
    this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCount={this.state.counters.filter(c => c.value!==0).length}/>
        <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onReset={this.handleReset} onDelete={this.handleDelete}/>
      </React.Fragment>
    );
  }
}

export default App;
