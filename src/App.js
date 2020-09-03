import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from './components/home/home';
import Error from './components/error';
import AddNew from './components/addnew/addnew';
import AllGames from './components/allgames/allgames';
import Navbar from './components/navbar';
import Verify from './components/verify/verify';
import axios from 'axios';
import {URL} from './components/url';
import CoverPic from './pics/cover.png';
import FooterPic from './pics/footer.png';
import ScrollToTop from './scroll';

class App extends React.Component{
	constructor(){
		super();
		this.myRef = React.createRef();
	}
	
	componentDidMount(){
		axios({method: "get", url: URL+"/wake"}).then(res => {return res.data}).then(data => {
			// console.log(data);
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
			<div>
				<img src={CoverPic} style={{width: "100%"}} />
			</div>
			<BrowserRouter>
				<Navbar />
				<ScrollToTop>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/addnew" exact component={AddNew} />
						<Route path="/allgames" exact component={AllGames} />
						<Route path="/verify" exact component={Verify} />
						<Route component={Error}/>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
			<div>
				<img src={FooterPic} style={{width: "100%"}} />
			</div>
		</div>
		);
	}
}

export default App;
