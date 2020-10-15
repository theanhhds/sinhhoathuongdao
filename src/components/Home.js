import React from 'react';
import HomeNav from './HomeNav';
import HeaderPic from './pics/header.png';
import FooterPic from './pics/footer.png';
import Text from './pics/text.png';

class HomePage extends React.Component{
	constructor(){
		super();
		
	}
	
	componentDidMount(){
		document.title = "Scoutivity - Sinh hoạt hướng đạo";
	}
	
	render(){
		
		return(
			<div>
				
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
				<h4 className="w3-center">Và nhiều điều mới mẻ nữa sẽ tới</h4>
				<br/><br/><br/><br/>
				<div className="w3-center w3-text-grey w3-opacity">
					Liên hệ <i><a href="https://www.facebook.com/theanhhds/">Gấu ĐĐ</a></i> nếu có vấn đề về website
				</div>
				<img src={FooterPic} style={{width: "100%", bottom: "0px"}} />
			</div>
		);
	}
}

export default HomePage;