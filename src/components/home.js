import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			
		};
	}
	
	render(){
		return (
			<div className="w3-container">
				<h1 className=" w3-center w3-wide animate__animated animate__fadeIn">Chào mừng đến với kho trò chơi!</h1>
				<br/>
				<div className="w3-row-padding animate__animated animate__slideInUp">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container w3-padding-large font-comic">
						Trò chơi là một hoạt động thường dùng để giải trí và đôi khi cũng được sử dụng như một công cụ giáo dục. Nhiều trò chơi đã phát triển thành những môn thể thao và được tổ chức với quy mô lớn như các Đại hội thể thao. Những đặc điểm của trò chơi là: vui, độc lập (hạn chế trong một địa điểm và một khoảng thời gian), may rủi, không sinh lợi (những người chơi không đạt tới một lợi ích vật chất cụ thể), có luật chơi.<br/><br/>
						Trong những buổi sinh hoạt, hoạt động của các tập thể, những trò chơi, những game show vui nhộn luôn là một phần không thể thiếu giúp để duy trì không khí trong suốt buổi sinh hoạt tập thể hay những buổi tiệc gala,…..Đóng vai trò như một khóa học hay khóa tập huấn ngắn về tinh thần đoàn kết, phối hợp đội nhóm, trò chơi tập thể không chỉ giúp người chơi thư giãn mà còn như một cầu nối giúp cả tập thể xích lại gần nhau hơn.<br/><br/>
						Trên những tinh thần đó, Games4scout được ra đời để làm kho dữ liệu lưu trữ trực tuyến các trò chơi sinh hoạt dành cho mọi người. Mong rằng ai cũng sẽ được chơi, và chơi thật vui.<br/><br/>
						-- GDD --<br/><br/>
						(Nguồn: <a href="https://vi.wikipedia.org/wiki/Tr%C3%B2_ch%C6%A1i" target="_blank">Wikipedia</a>, <a href="https://www.quangbinhtravel.vn/mot-so-tro-choi-danh-cho-cac-buoi-sinh-hoat-ngoai-khoa.html" target="_blank">Netin Travel</a>)
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
				<br/><br/>
			</div>
		);
	}
}

export default withRouter(Home);