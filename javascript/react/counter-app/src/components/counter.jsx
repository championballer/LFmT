import React, {Component} from 'react'

class Counter extends Component{
	state = {
		count:this.props.counter.value
	}

	handleIncrement = () => {
		this.setState({count:this.state.count+1});
	}

	renderCount = () => {
		if(this.state.count===0)
		{
			return "Zero";
		}

		else
		{
			return this.state.count;
		}
	}

	spanClasses = () => {
		let classes = "badge m-2";
		if(this.state.count===0)
		{
			classes+=" badge-primary";
		}

		else
		{
			classes+=" bagde-warning";
		}

		return classes;
	}

	render(){
		return (
			<div>
			<span className={this.spanClasses()}>{this.renderCount()}</span>
			<button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
			<button className="btn btn-danger btn-sm" onClick={() => {this.props.onDelete(this.props.counter.id)}}>Delete</button>
			</div>
			);
	}
}

export default Counter;