import React from 'react';
import HomeNav from './HomeNav';
import HeaderPic from './pics/header.png';
import FooterPic from './pics/footer.png';

import Text from './pics/text.png';

class HomePage extends React.Component{
	constructor(){
		super();
		this.state={
			overlayClass : "0",
		}
	}
	
	componentDidMount(){
		document.title = "Scoutivity - Sinh hoạt hướng đạo";
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

		return(
			<div className="" style={{position: "relative"}}>
				{overlay}
				<img src={HeaderPic} style={{width: "100%"}}/>
				<br/><br/><br/><br/>
				<div className="w3-center animate__animated animate__bounceIn">
					<img src={Text} style={{width: "80%", maxWidth: "800px"}}/>
				</div>
				<br/><br/><br/><br/>
				<div className="w3-content">
					<HomeNav />
				</div>
				<br/><br/><br/><br/>
				<div className="w3-center w3-text-grey w3-opacity">
					Liên hệ <i><a href="mailto:sinhhoathuongdao@gmail.com">sinhhoathuongdao@gmail.com</a></i> nếu có vấn đề về website
				</div>
				<img src={FooterPic} style={{width: "100%", bottom: "0px"}} />
			</div>
		);
	}
}

export default HomePage;