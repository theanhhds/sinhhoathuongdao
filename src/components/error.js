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
			<div className="w3-container">
				<h1>Trang bạn muốn vào hiện không thể tìm thấy. Vui lòng thử lại!</h1>
			</div>
		);
	}
}

export default withRouter(Error);