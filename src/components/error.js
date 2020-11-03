import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';

class Error extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	
	render(){
		return (
			<div className="w3-display-container w3-center">
				<br/><br/><br/>
				<h1>Trang bạn muốn vào hiện không thể tìm thấy. Vui lòng thử lại!</h1>
				<h2>Bấm vào <NavLink to="/">đây</NavLink> để về trang chủ</h2>
				<br/><br/><br/>
			</div>
		);
	}
}

export default withRouter(Error);