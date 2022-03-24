import RemoveTask from './RemoveTask';


function Item(props){

return(
		<li>{props.task} <RemoveTask/></li>


	);


}

export default Item;
