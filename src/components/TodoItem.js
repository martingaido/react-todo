/* TodoItem class-based component (created with 'rce' snippet) */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

	getStyle = () => {

		return {
			background: '#ededed',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.Completed ? 'line-through' : 'none'
		}
	}

	render() {

		const { Id, Title } = this.props.todo;

		return (

			/* Style Div calling a function */
			<div style={this.getStyle()}>
				<p>
					{/* On change pass event to Todo.js, then to App.js */}
					<input type="checkbox" onChange={this.props.markComplete.bind(this, Id)} />
					{ ' ' } { Title }
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, Id)}>X</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	// object!
	todo: PropTypes.object.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem;
