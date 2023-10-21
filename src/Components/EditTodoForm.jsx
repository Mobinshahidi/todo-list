import React, { useState } from 'react';

const EditTodoForm = ({ edit , task }) => {
	const [value, setValue] = useState(task.task);

	const submitHandler = (e) => {
		e.preventDefault();
		edit(value, task.id);
		setValue('');
	};
	return (
		<>
			<form className="todoForm" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Update Task..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
                    className='todo-input'
				/>
				<button type="submit" className='todo-btn' >Update Task</button>
			</form>
		</>
	);
};

export default EditTodoForm;
