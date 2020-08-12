import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Home from './components/home';
import Error from './components/error';
import AddNew from './components/addnew';
import AllGames from './components/allgames';
import Navbar from './components/navbar';
import Verify from './components/verify';
import axios from 'axios';
import {URL} from './components/url';

class App extends React.Component{
	constructor(){
		super();
		this.myRef = React.createRef();
	}
	
	componentDidMount(){
		axios({method: "get", url: URL+"/wake"}).then(res => {return res.data}).then(data => {
			console.log(data);
			setTimeout( () => {this.myRef.current.className="w3-hide"},1000);
		});
	}
	render(){
		return (
		<div>
			<div className="overlay w3-display-container" ref={this.myRef}>
				<div className="w3-display-middle w3-spin">
					<FontAwesomeIcon icon={faDiceFive} className="w3-jumbo w3-text-red" />
				</div>
			</div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/addnew" exact component={AddNew} />
					<Route path="/allgames" exact component={AllGames} />
					<Route path="/verify" exact component={Verify} />
					<Route component={Error}/>
				</Switch>
			</BrowserRouter>
		</div>
		);
	}
}

export default App;
