import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
uuidv4();
const TodoFormWrapper = () => {
	//use state set todo
	const [todos, setTodos] = useState([]);
	//set todo
	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		]);
	};
	//completed task
	const toggleCompleted = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};
	//deleting
	const deletedTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	//editing
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
			),
		);
	};

	//edit Task
	const editTask = (task,id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo,
			),
		);
	};
	return (
		<div className='todoWrapper'>
			<h1>Get Things Done!</h1>
			<TodoForm add={addTodo} />
			{todos.map((todo, index) =>
				todo.isEditing ? (
					<EditTodoForm edit={editTask} task={todo} key={index} />
				) : (
					<Todo
						task={todo}
						toggleCompleted={toggleCompleted}
						key={index}
						deletedTodo={deletedTodo}
						editTodo={editTodo}
					/>
				),
			)}
		</div>
	);
};

export default TodoFormWrapper;
