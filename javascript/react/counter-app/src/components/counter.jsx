import React, {Component} from 'react'

class Counter extends Component{

	renderCount = () => {
		if(this.props.counter.value===0)
		{
			return "Zero";
		}

		else
		{
			return this.props.counter.value;
		}
	}

	spanClasses = () => {
		let classes = "badge m-2";
		if(this.props.counter.value===0)
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
			<button className="btn btn-secondary btn-sm" onClick={() => {this.props.onIncrement(this.props.counter)}}>Increment</button>
			<button className="btn btn-danger btn-sm" onClick={() => {this.props.onDelete(this.props.counter.id)}}>Delete</button>
			</div>
			);
	}
}

export default Counter;