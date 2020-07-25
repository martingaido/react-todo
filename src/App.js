/* Main APP Component */

import React, { Component } from 'react';
import Todos from './components/Todos.js';
import './App.css';

class App extends Component{

	state = {
		todos: [
			{ Id: 1, Title: 'This is my first TOOD', Completed: false },
			{ Id: 2, Title: 'This is my second TODO', Completed: false },
			{ Id: 3, Title: 'This is my third TODO', Completed: true }
		]
	}

	/* Toggle Complete */
	markComplete = (id) => {
		console.log(id)
		this.setState({ todos: this.state.todos.map(todo => {
			if(todo.Id === id) {
				todo.Completed = !todo.Completed
			}
			return todo;

		}) });
	}

	render() {
		return (
			<div className="App">

				{/* Inject ToDos Component and pass array as prop */}
				<Todos todos={this.state.todos} markComplete={this.markComplete} />
			</div>
		);
	}
}

export default App;
