
import './App.css';
import Title from './Title';
import Form from './Form';
import SubmitTask from './SubmitTask';
import List from './List';
import Item from './Item';
import React from 'react';
class App extends React.Component{
 constructor(props){
		super(props);
		this.state = {
			tasks: []
		};
	} 


	addTask = task => {
		console.log(task);
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		

		});

	}
	render(){
	return(
	<div className="App">
	<Title />
	<Form addTask={this.addTask}/>
	<List tasks={this.state.tasks}/>
	</div>
	         );

		}
	}

export default App;
