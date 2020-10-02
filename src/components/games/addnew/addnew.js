import React from 'react';
import {URL, CC_key} from '../url.js';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faBaby, faMale  } from '@fortawesome/free-solid-svg-icons';
import getYoutubeID from 'get-youtube-id';

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
			n_child : [0,0,0],
			n_video : "",
			n_pics : [],
			input_pic: "",
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
		this.onChangeCaptcha = this.onChangeCaptcha.bind(this);
		this.onExpiredCaptcha = this.onExpiredCaptcha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.handleAddPicLink = this.handleAddPicLink.bind(this);
		this.handleRemoveLink = this.handleRemoveLink.bind(this);
		// this.handlePicLinkChange = this.handlePicLinkChange.bind(this);
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
		// console.log(value);
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
	
	handleCheckBox(value){
		let clone = this.state.n_kinang;
		clone[value] = 1-clone[value];
		this.setState({n_kinang: clone});
		// console.log(clone);
	}
	
	handleCheck(value){
		// let value = e.target.name;
		// console.log(value);
		let clone = this.state.n_child;
		clone[value] = 1-clone[value];
		this.setState({n_child: clone});
	}
	
	handleAddPicLink(){
		if (this.state.input_pic != ""){
			let clone = this.state.n_pics;
			clone.push(this.state.input_pic);
			this.setState({n_pics: clone, input_pic: ""});
		}
	}
	
	handleRemoveLink(id){
		let clone = this.state.n_pics;
		clone.splice(id, 1);
		this.setState({n_pics: clone});
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
		data.video = getYoutubeID(this.state.n_video);
		data.pics = this.state.n_pics;
		// console.log(data);
		if (data.ten == "" || data.so_luong == 0 || data.mo_ta == "" || data.doi_hinh == 0 || data.the_loai == 0 
			|| data.child.reduce((a,b) => a+b, 0) == 0 || data.ki_nang.reduce((a,b) => a+b, 0) == 0){
			this.notEnoughRef.current.style.display = "block";
			this.attention.current.style.display = "block";
			setTimeout(() => {this.notEnoughRef.current.style.display = "none"; 
								this.attention.current.style.display = "none"}, 3000);
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
				this.setState({n_ten : "", n_soluong: 0, n_doihinh: 0, n_mota: "", n_kinang : [0,0,0,0,0], n_donggop: "", n_child: [0,0,0], n_video: "", n_pics: [], });
				document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );	//Uncheck all checkboxes
				setTimeout(() => {this.overlayRef.current.style.display = "none"}, 3000);
				// this.props.history.push('/allgames');
			});
			
			// console.log(ten, so_luong, ki_nang, mo_ta);
		}
	}
	
	
	render(){
		let style_kinang = ["w3-text-grey w3-col s4 w3-opacity", "w3-text-grey w3-col s4 w3-opacity", 
							"w3-text-grey w3-col s4 w3-opacity", 
							"w3-text-grey w3-col s4 w3-opacity", "w3-text-grey w3-col s4 w3-opacity"];
		
		let i;
		for (i=0; i<5; i++)
			if (this.state.n_kinang[i] == 1) style_kinang[i] = "bold w3-text-green w3-col s4";
		
		let kinang;
		if (this.state.n_theloai == 1)
			kinang = (
						<div className="w3-container">
							<div className="w3-row-padding">
								<span className={style_kinang[0]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(0)}}>#NhanhNhẹn</span>
								<span className={style_kinang[2]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(2)}}>#TríTuệ</span>
								<span className={style_kinang[3]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(3)}}>#DũngCảm</span>
							</div>
							<div className="w3-row-padding">
								<span className={style_kinang[4]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(4)}}>#KhéoLéo</span>
								<span className={style_kinang[1]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(1)}}>#Teamwork</span>	
							</div>
						</div>
					);
		else
			kinang = (
					<div className="w3-container">
							<div className="w3-row-padding">
								<span className={style_kinang[0]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(0)}}>#NútDây</span>
								<span className={style_kinang[2]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(2)}}>#CứuThương</span>
								<span className={style_kinang[3]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(3)}}>#PhươngHướng</span>
							</div>
							<div className="w3-row-padding">
								<span className={style_kinang[4]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(4)}}>#Cắm trại</span>
								<span className={style_kinang[1]} style={{cursor: "pointer"}} 
									onClick={() => {this.handleCheckBox(1)}}>#TruyềnTin</span>	
							</div>
						</div>
		);
		
		let check = ["w3-large w3-text-grey w3-opacity w3-left", "w3-large w3-text-grey w3-center w3-opacity", "w3-large w3-text-grey w3-opacity w3-right"];
		if (this.state.n_child[0] == 1) 
			check[0] = "w3-large w3-text-amber w3-left";
		if (this.state.n_child[1] == 1) 
			check[1] = "w3-large w3-text-green w3-center";
		if (this.state.n_child[2] == 1) 
			check[2] = "w3-large w3-text-red w3-right";
		
		let pics_list;
		pics_list = this.state.n_pics.map((i, ind) => {
			return (
				<div className="">
					<a href={i} target="_blank">{i}</a>
					<span style={{cursor: "pointer"}} onClick={() => {this.handleRemoveLink(ind)}}> [&times;]</span>
				</div>
			);
		})
		
		return(
			<div className="w3-container">
			
				<div className="w3-overlay w3-display-container" ref={this.overlayRef}>
					<div className=" w3-display-middle ">
						<div className="w3-pale-green w3-padding-large w3-animate-opacity" ref={this.thankyou}>
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
				
				<h1 className="w3-center w3-wide w3-animate-top">Thêm trò chơi</h1>
				<h5 className="w3-center"><i>Bạn có ý tưởng trò chơi mới? Hãy chia sẻ ngay nhé</i></h5>
				<div className="w3-center w3-text-grey">Những nơi có dấu (*) là bắt buộc</div>
				<div className="w3-row">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container w3-padding-large">
					
						<lable><b> Thể loại trò chơi (*)</b></lable>
						<select className="w3-select w3-margin" name="n_theloai" value={this.state.n_theloai} onChange={this.handleChange1}>
							<option value="0" disabled selected>Chọn</option>
							<option value="1">Trò chơi sinh hoạt tập thể</option>
							<option value="2">Trò chơi rèn luyện kĩ năng</option>
						</select>
						
						<div ref={this.openAddNew} className="w3-animate-opacity" style={{display:"none"}}>
							<lable><b> Tên trò chơi (*)</b></lable>
								<input type="text" className="w3-input w3-margin" name="n_ten" value={this.state.n_ten} onChange={this.handleChange}/>
								
							<span><b> Kĩ năng rèn luyện (*)</b></span>
								{kinang}
							<div className="w3-row-padding w3-stretch">
								<div className="w3-col s6">
									<span><b> Số lượng (*)</b></span>
									<select className="w3-select w3-margin" name="n_soluong" value={this.state.n_soluong} 
									onChange={this.handleChange}>
										<option value="0" disabled selected>Số lượng</option>
										<option value="1">1-10 người</option>
										<option value="2">10-25 người</option>
										<option value="3">Trên 25 người</option>
									</select>
								</div>
								<div className="w3-col s6">
									<span><b> Đội hình (*)</b></span>
									<select className="w3-select w3-margin" name="n_doihinh" value={this.state.n_doihinh} 
									onChange={this.handleChange}>
										<option value="0" disabled selected>Đội hình</option>
										<option value="1">Cá nhân</option>
										<option value="2">Vòng tròn</option>
										<option value="3">Chia nhóm</option>
										<option value="4">Khác</option>
									</select>
								</div>
							</div>
							
							<span><b> Mô tả (*)</b></span>
								<textarea className="w3-block w3-margin" value={this.state.n_mota} style={{height:200}} name="n_mota"  
									onChange={this.handleChange} />
							
							<lable><b> Video minh hoạ (link Youtube) </b></lable>
								<input type="text" className="w3-input w3-margin" name="n_video" value={this.state.n_video} onChange={this.handleChange}/>
							
							<lable><b> Hình minh hoạ (tải và dán link <a href="https://imgbox.com/" target="_blank">Imgbox</a> có dạng imgbox.com/????????) </b></lable>
							
							<div className="">
								{pics_list}
							</div>
							
							<div className="w3-row-padding w3-stretch w3-margin">
								<div className=" w3-col s10"><input type="text" className="w3-input" name="input_pic" value={this.state.input_pic} onChange={this.handleChange}/></div>
								<div className=" w3-col s2"><button className="w3-btn w3-green" 
									onClick = {this.handleAddPicLink}>Thêm</button></div>
							</div>
							<div className="w3-row">
								<div className="w3-col s6">
									<lable><b>Độ tuổi (*)</b></lable>
									<div class="w3-margin w3-center">
										<span className={check[0]} title="Ngành ấu" 
											onClick={() => {this.handleCheck(0)}} style={{cursor: "pointer"}}>
											<FontAwesomeIcon size="lg" icon={faBaby} />
										</span>
										<span className={check[1]} title="Ngành thiếu" 
											onClick={() => {this.handleCheck(1)}} style={{cursor: "pointer"}}>
											<FontAwesomeIcon  size="lg" icon={faChild} />
										</span>
										<span className={check[2]} title="Ngành kha" 
											onClick={() => {this.handleCheck(2)}} style={{cursor: "pointer"}}>
											<FontAwesomeIcon size="lg" icon={faMale} />
										</span>
									</div>
								</div>
								<div className="w3-col s6">
									<lable><b> Người đóng góp </b></lable>
										<input type="text" className="w3-input w3-margin" name="n_donggop" value={this.state.n_donggop} onChange={this.handleChange} style={{width: "85%"}} />
								</div>
							</div>	
							<div className="w3-row">		
								<div className="w3-col l7">
									<ReCAPTCHA
									sitekey={CC_key}
									onExpired={this.onExpiredCaptcha}
									onChange={this.onChangeCaptcha}/></div>
								<br/>
								
								<div className="w3-col l5 w3-margin-top">
									
									<button class="w3-btn w3-red w3-right " 
									disabled={!this.state.captcha_OK} onClick={this.handleSubmit}> Tạo trò chơi </button>
								</div>
							</div>
						</div>
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
				<br/><br/><br/><br/><br/><br/><br/><br/>
			</div>
		);
	}
}

export default withRouter(AddNew);