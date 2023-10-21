import React, { useState } from 'react';
const TodoForm = ({ add }) => {
	const [value, setValue] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		add(value);
		setValue('');
	};

	const changeHandler = (e) => {
		setValue(e.target.value);
	};
	return (
		<>
			<form className="todoForm" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="What is your task?"
					value={value}
					onChange={changeHandler}
					className="todo-input"
				/>
				<button type="submit" className="todo-btn">
					Add Task
				</button>
			</form>
		</>
	);
};

export default TodoForm;
