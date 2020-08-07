import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className="w3-bar w3-pale-green w3-padding-large">
				<NavLink to="/"><div className="w3-btn w3-margin-right w3-left w3-green w3-bar-item w3-mobile">Trang chủ</div></NavLink> 
				<NavLink to="/addnew"><div className="w3-btn w3-margin-right w3-left w3-green w3-bar-item w3-mobile">Thêm trò chơi</div></NavLink> 
				<NavLink to="/allgames"><div className="w3-btn w3-margin-right w3-left w3-green w3-bar-item w3-mobile">Các trò chơi</div></NavLink> 
			</div>
		);
	}
}

export default Navbar;