import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {
	const [ showAddTask, setShowAddTask ] = useState(false);
	const [ tasks, setTasks ] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	// * Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		console.log(data);
		return data;
	};

	// * Delete task
	const deleteTask = (id) => {
		// filters out from the array if the id matches
		setTasks(tasks.filter((task) => task.id !== id));
		console.log('delete', id);
	};

	// * Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
		console.log('reminder');
	};

	// * Add task
	const addTask = (task) => {
		const id = Math.floor(Math.randon() * 1000) + 1;
		const newTask = { id, ...task };
		setTasks([ ...tasks, newTask ]);
	};

	return (
		<div className='container'>
			<Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No more tasks'}
		</div>
	);
}

export default App;
