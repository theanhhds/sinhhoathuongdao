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
		this.state={
			overlayClass : "0",
		}
	}
	
	componentDidMount(){
		setTimeout(()=>{this.setState({overlayClass: "1"})} , 1000);
		setTimeout(()=>{this.setState({overlayClass: "2"})} , 1500);
	}
	
	render(){
		let overlay;
		if (this.state.overlayClass == "0")
			overlay = <div className="w3-overlay" style={{backgroundColor: "rgb(255, 230, 255)", display: "block"}}/>
		else if (this.state.overlayClass == "1")
			overlay = <div className="w3-overlay animate__animated animate__fadeOut" style={{backgroundColor: "rgb(255, 230, 255)", display: "block"}}/>
		else overlay = "";
		return (
		<div className="w3-display-container">
			{overlay}
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
