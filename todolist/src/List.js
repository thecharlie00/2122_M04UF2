import React from 'react';
import Item from './Item';

function List(){

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.tasks
		};
	}

	render ()
	{
		let t = this.state.tasks;

		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<Item task={t[i]} key={i} />);
		}

		return (
		<ul>
			{tasks}
		</ul>
		);
	}	


}

export default List;
