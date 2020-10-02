import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './scroll';
import { pathNames } from './components/pathName';
import GamesApp from './components/games/GamesApp';
import MorseApp from './components/morse/MorseApp';
import Error from './components/error';
import HomePage from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
class App extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		console.log(pathNames);
		return (
		<div className="w3-display-container">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path={pathNames.trochoi} component={GamesApp} />
						<Route path={pathNames.morse} component={MorseApp} />
						<Route component={Error}/>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
		);
	}
}

export default App;
