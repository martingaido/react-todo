/* Main APP Component */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import {v4 as uuid} from 'uuid';

import './App.css';

class App extends Component{

	state = {
		todos: [
			{ Id: uuid(), Title: 'This is my first TOOD', Completed: false },
			{ Id: uuid(), Title: 'This is my second TODO', Completed: false },
			{ Id: uuid(), Title: 'This is my third TODO', Completed: true }
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

	/* Delete ToDo */
	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter(todo => todo.Id !== id)] });
	}

	/* Add ToDo */
	addTodo = (title) => {

		const newTodo = {
			Id: uuid(),
			Title: title,
			Completed: false
		}

		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		return (

			/* Wrap into Router */
			<Router>

				<div className="App">
					<div className="container">

						{/* Inject Header Component */}
						<Header />

						{/* Main Route */}
						<Route exact path="/" render={props => (
							<React.Fragment>

								{/* Inject AddTodo Component */}
								<AddTodo
									addTodo={this.addTodo}
								/>

								{/* Inject ToDos Component and pass array as prop */}
								<Todos
									todos={this.state.todos}
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>

							</React.Fragment>
						)} />

						{/* About Route */}
						<Route path="/about" component={About} />

					</div>
				</div>

			</Router>
		);
	}
}

export default App;
