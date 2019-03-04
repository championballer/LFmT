import React, {Component} from 'react';
import Table from './Table';

class App extends Component{
	state = {
		characters: [
			{
				'name':'Charlie',
				'job':'Janitor'
			},
			{
				'name':'Mac',
				'job':'Bouncer'
			},
			{
				'name':'Dee',
				'job':'Aspiring Actress'
			},
			{
				'name':'Dennis',
				'job':'Bartender'
			}
			]
	};

	removeCharacter = index => {
		const {characters} = this.state;
		this.setState({
			characters: characters.filter((character,i)=>{
				return i!==index;
			})
		});
	}

	render(){
		const characters = this.state.characters;

		return (
			<div className="Container">
			<Table 
				characterData = {characters}
				removeCharacter= {this.removeCharacter} 
			/>
		</div>
		);
	}
}

export default App;