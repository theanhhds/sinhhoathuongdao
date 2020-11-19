import React from 'react';
import { pathNames, pathInfo } from './pathName';
import NavTag from './NavTag';
import trochoiLogo from './pics/trochoi.png';
import morseLogo from './pics/morse.png';
import tailieuLogo from './pics/tailieu.png';
import historyLogo from './pics/history.png';
import semaphoreLogo from './pics/semaphore.png';
import matthuLogo from './pics/matthu.png';

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

		let semaphoreTag = 	<NavTag url={pathNames.semaphore} 
						title = {pathInfo.semaphore.title} 
						description = {pathInfo.semaphore.description}
						bg = {pathInfo.semaphore.bg}
						pic = {semaphoreLogo}
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

		let historyTag = 	<NavTag url={pathNames.history} 
							title = {pathInfo.history.title} 
							description = {pathInfo.history.description}
							bg = {pathInfo.history.bg}
							pic = {historyLogo}
					/>;

		let matthuTag = 	<NavTag url={pathNames.matthu} 
							title = {pathInfo.matthu.title} 
							description = {pathInfo.matthu.description}
							bg = {pathInfo.matthu.bg}
							pic = {matthuLogo}
					/>;

		return(
			<div>
				<div className="w3-row-padding">
					<div className="w3-col m6">
						{historyTag}
					</div>
					
					<div className="w3-col m6">
						{tailieuTag}
					</div>
				</div>

				<div className="w3-row-padding">
					<div className="w3-col m6">
						{morseTag}
					</div>

					<div className="w3-col m6">
						{semaphoreTag}
					</div>
				</div>

				<div className="w3-row-padding">
					<div className="w3-col m6">
						{gamesTag}
					</div>
					<div className="w3-col m6">
						{matthuTag}
					</div>
				</div>
			</div>
		);
	}
}

export default HomeNav;