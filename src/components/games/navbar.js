import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlusCircle, faListAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';

class Navbar extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
	}
	
	render(){
		return(
			<div className="w3-bar w3-center navbar-bg w3-bottom">
				<div className="w3-center w3-large" style={{display: "inline-block"}}>
					<NavLink to={this.props.url}><div className="w3-btn w3-margin-right w3-text-white w3-bar-item">
						<FontAwesomeIcon icon={faInfoCircle} size="lg" /> 
					</div></NavLink>
					<NavLink to={this.props.url + "/allgames"}><div className="w3-btn w3-margin-right w3-text-white w3-bar-item">
						<FontAwesomeIcon icon={faListAlt} size="lg" />
					</div></NavLink> 
					<NavLink to={this.props.url + "/addnew"}><div className="w3-btn w3-margin-right w3-text-white w3-bar-item">
						<FontAwesomeIcon icon={faPlusCircle} size="lg" /> 
					</div></NavLink> 
				</div>
			</div>
		);
	}
}

export default withRouter(Navbar);