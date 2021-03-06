/* ToDo's Component */

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

	render() {
		return this.props.todos.map((item, index) => (

			<TodoItem
				todo={item}
				key={index}
				markComplete={this.props.markComplete}
				delTodo={this.props.delTodo}
			/>
		));
	}
}

// PropTypes
Todos.propTypes = {
	// array!
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

export default Todos;
