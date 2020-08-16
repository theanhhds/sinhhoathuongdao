import React from 'react';
import {URL, CC_key} from './url.js';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

class AddNew extends React.Component {
	constructor(){
		super();
		this.state = {
			n_ten: "",
			n_donggop : "",
			n_soluong: 0,
			n_mota: "",
			n_doihinh : 0,
			n_theloai : 0,
			n_kinang: [0,0,0,0,0],		//Add more here when more ki nang
			n_child : 0,
			child_mess : "Không",
			captcha_OK: false,
		};
		
		this.notEnoughRef = React.createRef();
		this.overlayRef = React.createRef();
		this.openAddNew = React.createRef();
		this.thankyou = React.createRef();
		this.attention = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleCheckBox = this.handleCheckBox.bind(this);
		this.handleCheckBox1 = this.handleCheckBox1.bind(this);
		this.onChangeCaptcha = this.onChangeCaptcha.bind(this);
		this.onExpiredCaptcha = this.onExpiredCaptcha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	onChangeCaptcha(value){
		// console.log("Captcha value:", value);
		this.setState({captcha_OK : true});
	}
	
	onExpiredCaptcha(){
		this.setState({captcha_OK : false});
	}
	
	handleChange(event){
		const target = event.target;
		const name = target.name;
		const value = target.value;
		console.log(value);
		this.setState({[name] : value});
	}
	
	handleChange1(event){
		const target = event.target;
		const name = target.name;
		const value = target.value;
		
		this.setState({[name] : value});
		this.openAddNew.current.style.display="none";
		setTimeout(() => {this.openAddNew.current.style.display="block";}, 100);
	}
	
	handleCheckBox(event){
		const target = event.target;
		const name = target.value;
		const status = target.checked;
		
		let clone = this.state.n_kinang;
		clone[name] = status==1?1:0;
		this.setState({n_kinang: clone});
		
		// console.log(clone);
	}
	
	handleCheckBox1(event){
		const target = event.target;
		const name = target.value;
		const status = target.checked;
		if (status)
			this.setState({n_child: 1, child_mess: "Có"});
		else
			this.setState({n_child: 0, child_mess: "Không"});
	}
	
	announce(){
		
	}
	
	handleSubmit(){
		//Since backend is using Express, it cannot handle form data,
		//=> using normal JSON to send data
		// this.overlayRef.current.style.display = "block";
		
		let data = {};
		data.ten = this.state.n_ten;
		data.so_luong = this.state.n_soluong;
		data.ki_nang = this.state.n_kinang;
		data.mo_ta = this.state.n_mota;
		data.doi_hinh = this.state.n_doihinh;
		data.dong_gop = this.state.n_donggop;
		data.the_loai = this.state.n_theloai;
		data.child = this.state.n_child;
		// console.log(data);
		if (data.ten == "" || data.so_luong == 0 || data.mo_ta == "" || data.doi_hinh == 0 || data.the_loai == 0){
			this.notEnoughRef.current.style.display = "block";
			this.attention.current.style.display = "block";
			setTimeout(() => {this.notEnoughRef.current.style.display = "none"; 
								this.attention.current.style.display = "none"}, 4000);
		}
		else{
			// console.log(URL + "/addnew");
			this.overlayRef.current.style.display = "block";
			axios({
				method: 'post',
				url: URL+"/addnew",
				data: data,
			}).then(res =>{return res.data}).then(data => {
				// console.log(data);
				// this.setState({n_ten: "", n_kinang: [], n_mota: "", n_soluong: 0, captcha_OK: false});
				// document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );	//Uncheck all checkboxes
				// alert("Trò chơi đã được lưu vào dữ liệu và đang đợi để được xác nhận bởi admin");
				this.setState({n_ten : "", n_soluong: 0, n_doihinh: 0, n_mota: "", n_kinang : [0,0,0,0,0], n_donggop: ""});
				document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );	//Uncheck all checkboxes
				setTimeout(() => {this.overlayRef.current.style.display = "none"}, 4000);
				// this.props.history.push('/allgames');
			});
			
			// console.log(ten, so_luong, ki_nang, mo_ta);
		}
	}
	
	render(){
		
		let kinang;
		if (this.state.n_theloai == 1)
			kinang = (
						<div className="w3-container w3-margin w3-bar">
							<div className="w3-bar-item"><input className="w3-check" value="0" type="checkbox" 
									onChange={this.handleCheckBox}/> Nhanh nhẹn </div>
							<div className="w3-bar-item"><input className="w3-check" value="1" type="checkbox" 
									onChange={this.handleCheckBox}/> Làm việc nhóm </div>
							<div className="w3-bar-item"><input className="w3-check" value="2" type="checkbox" 
									onChange={this.handleCheckBox}/> Trí tuệ </div>
							<div className="w3-bar-item"><input className="w3-check" value="3" type="checkbox" 
									onChange={this.handleCheckBox}/> Dũng cảm </div>
							<div className="w3-bar-item"><input className="w3-check" value="4" type="checkbox" 
								onChange={this.handleCheckBox}/> Khéo léo </div>
						</div>
					);
		else
			kinang = (
					<div className="w3-container w3-margin w3-bar">
							<div className="w3-bar-item"><input className="w3-check" value="0" type="checkbox" 
									onChange={this.handleCheckBox}/> Nút dây </div>
							<div className="w3-bar-item"><input className="w3-check" value="1" type="checkbox" 
									onChange={this.handleCheckBox}/> Truyền tin </div>
							<div className="w3-bar-item"><input className="w3-check" value="2" type="checkbox" 
									onChange={this.handleCheckBox}/> Cứu thương </div>
							<div className="w3-bar-item"><input className="w3-check" value="3" type="checkbox" 
									onChange={this.handleCheckBox}/> Phương hướng </div>
							<div className="w3-bar-item"><input className="w3-check" value="4" type="checkbox" 
								onChange={this.handleCheckBox}/> Cắm trại </div>
						</div>
		);
		
		return(
			<div className="w3-container">
			
				<div className="w3-overlay w3-display-container" ref={this.overlayRef}>
					<div className=" w3-display-middle ">
						<div className="w3-pale-green w3-padding-large animate__animated animate__fadeIn" ref={this.thankyou}
							style={{display:"none"}}>
							<h3 className="w3-green w3-padding">Cảm ơn bạn</h3>
							<div className="w3-section">
								Trò chơi đã được lưu vào dữ liệu và đang đợi để được xác nhận
							</div>
						</div>
					</div>
				</div>
				
				<div className="w3-overlay w3-display-container " ref={this.notEnoughRef} >
					<div className=" w3-display-middle ">
						<div className="w3-pale-red w3-padding animate__animated animate__shakeX" ref={this.attention} 
							style={{display:"none"}}>
							<h3 className="w3-red w3-padding">Chú ý</h3>
							<div className="w3-section">
								Bạn hãy điền đầy đủ thông tin vào các nơi có dấu <b>(*)</b> nhé
							</div>
						</div>
					</div>
				</div>
				
				<h1 className="w3-center w3-wide animate__animated animate__jackInTheBox">Thêm trò chơi mới</h1>
				<h5 className="w3-center animate__animated animate__fadeIn"><i>Bạn có ý tưởng trò chơi mới? Hãy chia sẻ ngay nhé</i></h5>
				<div className="w3-center w3-text-grey animate__animated ">Những nơi có dấu (*) là bắt buộc</div>
				<div className="w3-row">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container w3-padding-large" >
					
						<lable><b> Thể loại trò chơi (*)</b></lable>
						<select className="w3-select w3-margin" name="n_theloai" value={this.state.n_theloai} onChange={this.handleChange1}>
							<option value="0" disabled selected>Chọn</option>
							<option value="1">Trò chơi sinh hoạt tập thể</option>
							<option value="2">Trò chơi rèn luyện kĩ năng</option>
						</select>
						
						<div ref={this.openAddNew} className="w3-animate-opacity" style={{display:"none"}}>
							<lable><b> Tên trò chơi (*)</b></lable>
								<input type="text" className="w3-input w3-margin" name="n_ten" value={this.state.n_ten} onChange={this.handleChange}/>
								
							<lable><b> Kĩ năng rèn luyện </b></lable>
								{kinang}
							<div className="w3-row">
								<div className="w3-col s6">
									<lable><b> Số lượng người chơi (*)</b></lable>
									<select className="w3-select w3-margin" name="n_soluong" value={this.state.n_soluong} onChange={this.handleChange} style={{width: "85%"}}>
										<option value="0" disabled selected>Chọn</option>
										<option value="1">1-10 người</option>
										<option value="2">10-25 người</option>
										<option value="3">Trên 25 người</option>
									</select>
								</div>
								<div className="w3-col s6">
									<lable><b> Đội hình chơi (*)</b></lable>
									<select className="w3-select w3-margin" name="n_doihinh" value={this.state.n_doihinh} onChange={this.handleChange} style={{width: "85%"}}>
										<option value="0" disabled selected>Chọn</option>
										<option value="1">Cá nhân</option>
										<option value="2">Vòng tròn</option>
										<option value="3">Chia nhóm</option>
										<option value="4">Khác</option>
									</select>
								</div>
							</div>
							<lable><b> Mô tả (*)</b></lable>
								<textarea className="w3-block w3-margin" value={this.state.n_mota} style={{height:200}} name="n_mota"  
									onChange={this.handleChange} />
							<div className="w3-row">
								<div className="w3-col s6">
									<lable><b> Thích hợp với trẻ em </b></lable><br/>
									<input type="checkbox" className="w3-margin w3-check" name="n_child" 
										onChange={this.handleCheckBox1}/>
									{this.state.child_mess}
								</div>
								<div className="w3-col s6">
									<lable><b> Người đóng góp </b></lable>
										<input type="text" className="w3-input w3-margin" name="n_donggop" value={this.state.n_dongop} onChange={this.handleChange}/>
								</div>
							</div>	
							<div className="w3-container w3-row">		
								<div className="w3-padding-large">
									<ReCAPTCHA
									sitekey={CC_key}
									onExpired={this.onExpiredCaptcha}
									onChange={this.onChangeCaptcha}/></div>
								<br/>
								<div className="w3-padding-large"><button class="w3-btn w3-red" 
									disabled={!this.state.captcha_OK} onClick={this.handleSubmit}> Tạo trò chơi </button></div>
							</div>
						</div>
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
				<br/><br/>
			</div>
		);
	}
}

export default withRouter(AddNew);