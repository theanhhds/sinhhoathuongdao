import React from 'react';
import {Route, Switch, BrowserRouter, withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive, faHome } from '@fortawesome/free-solid-svg-icons';
import Home from './home/home';
import Error from './error';
import AddNew from './addnew/addnew';
import AllGames from './allgames/allgames';
import Verify from './verify/verify';
import Navbar from './navbar';
import axios from 'axios';
import {URL} from './url';
import CoverPic from './pics/cover.png';
import FooterPic from './pics/footer.png';
import ScrollToTop from './scroll';

class GamesApp extends React.Component{
	
	constructor(props){
		super(props);
		this.myRef = React.createRef();
	}
	
	componentDidMount(){
		document.title = "Games4Scout- Trò chơi sinh hoạt";
		axios({method: "get", url: URL+"/wake"}).then(res => {return res.data}).then(data => {
			// console.log(data);
			setTimeout( () => {this.myRef.current.className="w3-hide"},1000);
		});
	}
	
	render(){
		return (
		<div className="w3-display-container">
			<span className="w3-text-red w3-xxlarge w3-btn">
				<NavLink to="/"><FontAwesomeIcon icon = {faHome}/></NavLink>
			</span>
			<div className="overlay w3-display-container" ref={this.myRef}>
				<div className="w3-display-middle w3-spin">
					<FontAwesomeIcon icon={faDiceFive} className="w3-jumbo w3-text-red" />
				</div>
			</div>
			<div >
				<img src={CoverPic} style={{width: "100%", top: "100px"}} />
			</div>
			<BrowserRouter>
				<Navbar url={this.props.match.path} />
				<ScrollToTop>
					<Switch>
						<Route path={this.props.match.path} exact>
							<Home url = {this.props.match.path} />
						</Route>
						<Route path={this.props.match.path + "/addnew"} exact>
							<AddNew url = {this.props.match.path} />
						</Route>
						<Route path={this.props.match.path + "/allgames"} exact>
							<AllGames url={this.props.match.path} />
						</Route>
						<Route path={this.props.match.path + "/verify"} exact>
							<Verify url = {this.props.match.path} />
						</Route>
						<Route>
							<Error url = {this.props.match.path} />
						</Route>
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

export default withRouter(GamesApp);