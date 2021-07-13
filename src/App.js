import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const [ tasks, setTasks ] = useState([
		{
			id       : 1,
			text     : 'Appointment',
			day      : '01/02/2021',
			reminder : true
		},
		{
			id       : 2,
			text     : 'Pick up dinner',
			day      : '01/03/2021',
			reminder : false
		}
	]);

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

	return (
		<div className='container'>
			<Header title='Task Tracker' />
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No more tasks'}
		</div>
	);
}

export default App;
