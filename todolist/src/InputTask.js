
import React from 'react';



class InputTask extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});

	}

	render(){
	return(
	<label htmlFor="input-task">Tarea
	<input type="text" id="input-task" onChange={this.handleChange} value={this.props.value}/>
	</label>
	);

	}
}

export default InputTask;
