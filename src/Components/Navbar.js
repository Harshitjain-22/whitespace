import { useState } from "react";
import OutboundRoundedIcon from '@mui/icons-material/OutboundRounded';
import { Link} from "react-router-dom";
import "./main.css"

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	// const [color, setColor] = useState("white");
	// const nav = document.getElementsByClassName('bar');
	// window.onscroll = function () { 
	// 	if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
	// 		nav.classList.add("nav-colored");
	// 		// nav.classList.remove("nav-transparent");
	// 	} 
	// 	// else {
	// 	// 	nav.classList.add("nav-transparent");
	// 	// 	nav.classList.remove("nav-colored");
	// 	// }
	// };

	return (
		<div className="bar" style={{paddingTop:"120px"}}>
		<nav style={{height:" 100px",width: "1900px", marginTop:"50px",border: "3px solid rgb(211,211,211)"}}>
		<Link to="#Home" className="title">
		  <img src={require('./whitespace.png')} width={69} height={69} />
		</Link>
		{/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
		</div> */}
		<ul className={menuOpen ? "open" : ""} style={{marginLeft:"1300px"}}>
		  <li>
		  <a href="#Home">Home</a>
		  </li>
		  <li>
		  <a href="#Client">Client</a>
		  </li>
		  <li>
		  <a href="#Service">Service</a>
		  </li>
		</ul>
		<OutboundRoundedIcon font-fontSize="large" style={{width:"100px", height:"100px"}}/>
	  </nav>
	  </div>
	);
}

export default Navbar;