import './Piesito.css';
import React from 'react';

class Piesito extends React.Component
function Piesito(){
	constructor(props){
		super(props);

		this.state = {
			date: new Date()
		};

		setInterval( () => {
			this.setState({
				date: new Date()
			});
		}, 1000);

	}


	render(){

		return(
			<footer>
				<p>Copy (c)2022 Copyright malo</p>
				<p>{this.state.date.toLocaleTimeSring()}</p>
			</footer>
           

		);

	}


  





}

export default Piesito;
