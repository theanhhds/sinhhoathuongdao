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
			n_soluong: 0,
			n_mota: "",
			n_doihinh : 0,
			captcha_OK: false,
			n_kinang: [0,0,0,0,0],		//Add more here when more ki nang
		};
		this.overlayRef = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleCheckBox = this.handleCheckBox.bind(this);
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
		
		this.setState({[name] : value});
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
	
	announce(){
		
	}
	
	handleSubmit(){
		//Since backend is using Express, it cannot handle form data,
		//=> using normal JSON to send data
		// this.overlayRef.current.style.display = "block";
		this.overlayRef.current.style.display = "block";
		let data = {};
		data.ten = this.state.n_ten;
		data.so_luong = this.state.n_soluong;
		data.ki_nang = this.state.n_kinang;
		data.mo_ta = this.state.n_mota;
		data.doi_hinh = this.state.n_doihinh;
		// console.log(URL + "/addnew");
		axios({
			method: 'post',
			url: URL+"/addnew",
			data: data,
		}).then(res =>{return res.data}).then(data => {
			console.log(data);
			// this.setState({n_ten: "", n_kinang: [], n_mota: "", n_soluong: 0, captcha_OK: false});
			// document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );	//Uncheck all checkboxes
			// alert("Trò chơi đã được lưu vào dữ liệu và đang đợi để được xác nhận bởi admin");
			this.setState({n_ten : "", n_soluong: 0, n_doihinh: 0, n_mota: "", n_kinang : [0,0,0,0,0]});
			document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );	//Uncheck all checkboxes
			setTimeout(() => {this.overlayRef.current.style.display = "none"}, 4000);
			// this.props.history.push('/allgames');
		});
		
		// console.log(ten, so_luong, ki_nang, mo_ta);
	}
	
	render(){
		return(
			<div className="w3-container">
				<div className="w3-overlay w3-display-container" ref={this.overlayRef}>
					<div className="w3-pale-red w3-display-middle w3-padding-large">
						<h3 className="w3-red w3-padding w3-center">Cảm ơn bạn</h3>
						<h4 className="w3-section">
							Trò chơi đã được lưu vào dữ liệu và đang đợi để được xác nhận
						</h4>
					</div>
				</div>
				<h1 className="w3-center">Thêm trò chơi mới</h1>
				<div className="w3-row">
					<div className="w3-col l2"><br/></div>
					<div className="w3-col l8 w3-container w3-padding-large">
						<lable><b> Tên trò chơi </b></lable>
							<input type="text" className="w3-input w3-margin" name="n_ten" value={this.state.n_ten} onChange={this.handleChange}/>
						<lable><b> Kĩ năng rèn luyện </b></lable>
							<div className="w3-container w3-margin w3-bar">
								<div className="w3-bar-item"><input className="w3-check" value="0" type="checkbox" 
									onChange={this.handleCheckBox}/> Nhanh nhẹn </div>
								<div className="w3-bar-item"><input className="w3-check" value="1" type="checkbox" 
									onChange={this.handleCheckBox}/> Hoạt bát </div>
								<div className="w3-bar-item"><input className="w3-check" value="2" type="checkbox" 
									onChange={this.handleCheckBox}/> Trí tuệ </div>
								<div className="w3-bar-item"><input className="w3-check" value="3" type="checkbox" 
									onChange={this.handleCheckBox}/> Dũng cảm </div>
								<div className="w3-bar-item"><input className="w3-check" value="4" type="checkbox" 
									onChange={this.handleCheckBox}/> Khéo léo </div>
							</div>
						<lable><b> Số lượng người chơi </b></lable>
							<select className="w3-select w3-margin" name="n_soluong" value={this.state.n_soluong} onChange={this.handleChange}>
								<option value="0" disabled selected>Chọn</option>
								<option value="1">1-10 người</option>
								<option value="2">10-25 người</option>
								<option value="3">Trên 25 người</option>
							</select>
							
						<lable><b> Đội hình chơi </b></lable>
							<select className="w3-select w3-margin" name="n_doihinh" value={this.state.n_doihinh} onChange={this.handleChange}>
								<option value="0" disabled selected>Chọn</option>
								<option value="1">Cá nhân</option>
								<option value="2">Vòng tròn</option>
								<option value="3">Chia nhóm</option>
								<option value="4">Khác</option>
							</select>
							
						<lable><b> Mô tả </b></lable>
							<textarea className="w3-block w3-margin" value={this.state.n_mota} style={{height:200}} name="n_mota"  
								onChange={this.handleChange} />
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
					<div className="w3-col l2"><br/></div>
				</div>
				<br/><br/>
			</div>
		);
	}
}

export default withRouter(AddNew);