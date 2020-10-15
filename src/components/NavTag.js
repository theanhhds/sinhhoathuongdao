import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavTag extends React.Component{
	constructor(props){
		super(props);	//props = [url, pic, title, description, bg]
	}
	
	render(){
		return(
			<div className="animate__animated animate__bounceIn w3-hover-opacity">
				<NavLink to={this.props.url} style={{textDecoration: "none"}}>
					<div 	className={"w3-margin w3-card-4 w3-container w3-padding-large " + this.props.bg}
							style={{maxHeight: "500px"}}>
						<div className="w3-center">
							<img src={this.props.pic} style={{width: "70%"}}/>
						</div>
						<h2 className="w3-center">{this.props.title}</h2>
						<p className="font-comic">{this.props.description}</p>
					</div>
				</NavLink>
			</div>
		);
	}
}

export default NavTag;