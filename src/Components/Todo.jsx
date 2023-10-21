import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleCompleted, deletedTodo,editTodo }) => {
	return (
		<div className='todo'>
			<p onClick={() => toggleCompleted(task.id)}  className={`${task.completed ? "completed" : "" }`} >{task.task}</p>
			<div>
				<FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
				<FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deletedTodo(task.id)} />
			</div>
		</div>
	);
};

export default Todo;
