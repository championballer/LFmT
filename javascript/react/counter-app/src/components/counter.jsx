import React, { Component } from 'react';

class Counter extends Component{

	state = {
		count : 0
	};

	render () {
		return (
			<div>
				<h1>{this.countFunc()}</h1>
				<button>Increment</button>
			</div>
		);
	}

	countFunc(){
		if(this.state.count==0)
		{
			return <h1>Zero</h1>;
		}
		else
			return this.state.count;
	}
}



export default Counter;