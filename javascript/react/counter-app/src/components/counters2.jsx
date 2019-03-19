import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{

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
	render(){
		return (
			<div>
			<button className="btn btn-primary" onClick={this.handleReset}>Reset</button>
			{this.state.counters.map(counter=><Counter key={counter.id} counter = {counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>)}
			</div>
			);
	}
}

export default Counters;