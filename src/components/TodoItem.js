/* TodoItem class-based component (created with 'rce') */
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

export default TodoItem;
