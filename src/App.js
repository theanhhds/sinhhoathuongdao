import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

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
			this.myRef.current.className="w3-hide";
		});
	}
	render(){
		return (
		<div>
			<div className="overlay w3-display-container" ref={this.myRef}>
				<div className="w3-display-middle w3-spin">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="120" height="120" viewBox="0 0 48 48"><path fill="#64dd17" d="M25.894 11.018c-.945-.543-2.018-1.09-2.99-1.422V3.564l3.617 2.64L26.167 8.21l.571.37 1.115-3.141L21 0v10.544c1.659.252 3.277.745 4.623 1.176L25.894 11.018zM31.038 8.438l-2.53 4.021c0 0 2.972 1.927 4.37 2.983 2.114-.924 4.122-2.05 4.122-2.05L31.038 8.438zM30.056 12.019l1.486-2.094 3.883 3.159c0 0-1.091.541-2.441 1.159C32.076 13.556 30.056 12.019 30.056 12.019zM31.131 20.43c-.816.732-1.453 1.175-2.771 1.821l2.93 6.546 3.914-6.731L31.131 20.43zM30.25 23.122c.576-.337 1.113-.785 1.505-1.254l2.176.996-2.098 3.534L30.25 23.122zM25.153 23.294l.491 1.768c-1.168.682-2.627.739-2.627.739v15.956l4.087-6.506-1.353-6.045.862-.462 1.884 7.074L21 48V24.112C22.69 23.976 23.91 23.729 25.153 23.294zM9 17.253c0 0 1.591 1.224 2.951 1.569.975-.523 1.798-1.387 3.473-2.316 2.087-1.158 4.14-1.183 5.354-1.168 1.437.019 3.344.14 5.602 1.149 2.258 1.009 3.011 1.522 3.977 1.896C31.47 17.841 32 17.122 32 17.122s-.907-.009-1.103 0c-.393-.271-1.755-1.202-3.524-2.176-1.865-1.027-2.925-1.784-6.509-1.933-3.584-.149-5.089 1.102-7.159 2.27-1.543.87-2.104 1.336-3.173 1.896C10.249 17.215 9 17.253 9 17.253z"></path><path fill="#64dd17" d="M17.168,17.516c0,0,1.651,1.908,3.798,1.821c2.207-0.089,3.755-1.887,3.755-1.887l2.72,1.317 c0,0-2.69,2.246-6.282,2.232c-3.759-0.015-6.287-1.849-6.287-1.849S16.116,18.179,17.168,17.516z"></path></svg>
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
