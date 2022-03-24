import "./Plantilla.css"
import MenuItem from './MenuItem.js'

function Plantilla (){
return(
<div id = "menu">
<nav>
<ul>
<MenuItem text = "Texto ejemplo" url = "/ejemplo" />
<MenuItem text = "HomePage"  url = "/App" />
<MenuItem text = "Curriculum" url = "/cv"/>
<MenuItem text = "Contacto"  url = "/contact"/>
</ul>
</nav>
</div>
);
}
export default Plantilla;
