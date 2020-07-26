/* Main APP Component */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component{

	state = {
		todos: []
	}

	componentDidMount() {

		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
			.then(res => this.setState({ todos: res.data }));
	}

	/* Toggle Complete */
	markComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if(todo.id === id) {
				todo.Completed = !todo.Completed
			}
			return todo;
		}) });
	}

	/* Delete ToDo */
	delTodo = (id) => {

		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
	}

	/* Add ToDo */
	addTodo = (title) => {

		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
		.then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
