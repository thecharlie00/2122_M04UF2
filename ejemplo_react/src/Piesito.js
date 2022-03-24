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

<<<<<<< HEAD
       <p>Copy(c)2022 Plantilla React</p>
	   </footer>
=======
>>>>>>> bce0c8a911c6ceed5bbc99b38c7fa91e571b9877

  





}

export default Piesito;
