import React, { Component } from 'react';

class Counter extends Component{

	state = {
		count : 0,
		tags : ['tag1','tag2','tag3']
	};


	styles = {
		backgroundColor: 'blue',
		fontSize : 30
	}

	handleIncrement = () => {
		this.setState({count:this.state.count+1});
	}

	render () {
		return (
			<div>
				<span className = {this.getBadgeClasses()}>{this.countFunc()}</span>
				<button onClick = {this.handleIncrement} style = {this.styles} className = "btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}

	getBadgeClasses(){
		let classes = "badge m-2";
		if(this.state.count===0)
		{
			classes+=" badge-warning";
		}

		else
		{
			classes+=" badge-primary";
		}

		return classes;
	}

	countFunc(){
		if(this.state.count===0)
		{
			return "Zero";
		}
		else
			return this.state.count;
	}
}



export default Counter;