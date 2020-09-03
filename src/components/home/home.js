import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './home.css';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			
		};
	}
	
	render(){
		return (
		<div>
			<div className="w3-container w3-large">
				<h1 className="w3-center w3-wide w3-animate-zoom">Chào mừng đến
					<div className="title"><b><span className="w3-text-blue">Games</span><span className="w3-text-red">4</span><span className="w3-text-green">scout</span></b></div>
				</h1>
				<br/>
				
				<div className="w3-row-padding w3-justify w3-animate-bottom">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container w3-padding-large font-comic">
						<div class="w3-panel w3-leftbar">
						  <p class="w3-xlarge w3-serif w3-text-red">
						  <i>"Trò chơi là dụng cụ phi thường trong tay nhà giáo dục nào biết cách sử dụng nó"</i></p>
						  <p>-Emile Guillen-</p>
						</div>
						
						Trò chơi là một phần không thể thiếu trong sinh hoạt tập thể. Đó thường là những hoạt động giải trí hoặc được sử dụng như một công cụ giáo dục. Trò chơi thường có các đặc điểm như vui, độc lập (cố định trong không gian và thời gian), may rủi, không sinh lợi (không nhắm đến các lợi ích vật chất), có tính cạnh tranh và có luật chơi. Có những môn thể thao lớn trên thế giới thường được bắt đầu từ những trò chơi nhỏ.
						<br/><br/>
						Đặc biệt trong phong trào Hướng đạo, trò chơi được sử dụng như một công cụ giáo dục đặc biệt, nhằm phát triển đoàn sinh một cách toàn diện. Bằng các trò chơi, các em sẽ được rèn luyện sức khoẻ, tăng sức chịu đựng, luyện ý chí và ý thức, hình thành tính cách và phát triển các giác quan. Thông qua các trò chơi, các trưởng rèn luyện cho đoàn sinh mình những đức tính và kĩ năng cần thiết của một người hướng đạo sinh.
						<br/><br/>
						Trên những tinh thần đó, <b><span className="w3-text-blue">Games</span><span className="w3-text-red">4</span><span className="w3-text-green">scout</span></b> được ra đời để làm kho dữ liệu lưu trữ trực tuyến các trò chơi sinh hoạt dành cho mọi người. Xin chân thành cảm ơn tất cả đóng góp của tất cả mọi người đã giúp xây dựng và phát triển ứng dụng này. Mong rằng ai cũng sẽ được chơi, và chơi thật vui.
						<br/><br/>
				
						<div className="w3-center"><i className="w3-text-grey">-- Gấu DD --</i><br/><br/></div>
						<br/><br/><br/>
						<div className="w3-center"><NavLink to="/allgames"><button className=" w3-btn w3-green w3-large animate__animated animate__heartBeat animate__infinite">Xem trò chơi</button></NavLink></div>
					</div>
					<br/><br/>
					<div className="w3-col l3"><br/></div>
					<div className="w3-clear"></div>
					<br/><br/><br/>
					<div className="w3-center w3-medium w3-text-grey w3-opacity-max">
						<a href='https://www.freepik.com/vectors/tree'>Tree vector created by brgfx - www.freepik.com</a><br/>
						<a href="https://www.freepik.com/vectors/children">Children vector created by pch.vector - www.freepik.com</a><br/>
						<a href="http://www.freepik.com">Designed by brgfx / Freepik</a>

					</div>
				</div>
				<br/><br/><br/><br/><br/><br/>
			</div>
		</div>
		);
	}
}

export default withRouter(Home);