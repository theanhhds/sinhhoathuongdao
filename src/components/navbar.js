import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle, faListAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className="w3-bar w3-center w3-green w3-bottom">
				<div className="w3-center w3-large" style={{display: "inline-block"}}>
					<NavLink to="/"><div className="w3-button w3-margin-right w3-green w3-bar-item">
						<FontAwesomeIcon icon={faHome} size="lg" /> 
					</div></NavLink> 
					<NavLink to="/addnew"><div className="w3-button w3-margin-right w3-green w3-bar-item">
						<FontAwesomeIcon icon={faPlusCircle} size="lg" /> 
					</div></NavLink> 
					<NavLink to="/allgames"><div className="w3-button w3-margin-right w3-green w3-bar-item">
						<FontAwesomeIcon icon={faListAlt} size="lg" />
					</div></NavLink> 
					<NavLink to="/verify"><div className="w3-button w3-margin-right w3-green w3-bar-item">
						<FontAwesomeIcon icon={faCheckSquare} size="lg" inverse />
					</div></NavLink>
				</div>
			</div>
		);
	}
}

export default Navbar;