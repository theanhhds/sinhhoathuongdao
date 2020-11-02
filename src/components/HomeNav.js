import React from 'react';
import {NavLink} from 'react-router-dom';
import { pathNames, pathInfo } from './pathName';
import NavTag from './NavTag';
import trochoiLogo from './pics/trochoi.png';
import morseLogo from './pics/morse.png';
import tailieuLogo from './pics/tailieu.png';

class HomeNav extends React.Component{
	constructor(){
		super();
		this.state = {
			gamesTag: true,
			morseTag: false,
		};
	}
	
	render(){
		let morseTag =  <NavTag url={pathNames.morse} 
								title = {pathInfo.morse.title} 
								description = {pathInfo.morse.description}
								bg = {pathInfo.morse.bg}
								pic = {morseLogo}
								status = {this.state.morseTag}
						/>;
						
		let gamesTag = 	<NavTag url={pathNames.trochoi} 
								title = {pathInfo.trochoi.title} 
								description = {pathInfo.trochoi.description}
								bg = {pathInfo.trochoi.bg}
								pic = {trochoiLogo}
						/>;
						
		let tailieuTag = 	<NavTag url={pathNames.tailieu} 
									title = {pathInfo.tailieu.title} 
									description = {pathInfo.tailieu.description}
									bg = {pathInfo.tailieu.bg}
									pic = {tailieuLogo}
							/>;

		return(
			<div>
				<div className="w3-row-padding">
					<div className="w3-col m6">
						{gamesTag}
					</div>
					
					<div className="w3-col m6">
						{morseTag}
					</div>
				</div>
				<div className="w3-row-padding">
					<div className="w3-col m6">
						{tailieuTag}
					</div>
				</div>
			</div>
		);
	}
}

export default HomeNav;