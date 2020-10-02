import React from 'react';
import {withRouter} from 'react-router-dom';

class Error extends React.Component {
	constructor(){
		super();
		this.state = {
			
		};
	}
	
	render(){
		return (
			<div className="w3-container w3-center">
				<br/><br/><br/>
				<h1>Trang bạn muốn vào hiện không thể tìm thấy!</h1>
				<h2>Vui lòng dùng bảng điều hướng bên dưới để tới các trang</h2>
				<br/><br/><br/>
			</div>
		);
	}
}

export default withRouter(Error);