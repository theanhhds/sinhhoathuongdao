import React from 'react';
import axios from 'axios';
import {URL} from './url.js';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';

class Verify extends React.Component{
	constructor(){
		super();
		this.state = {
			games : [],
			isUser : false,
			message: "Nhập mã xác nhận của bạn",
			username: "",
			ten: "ai đây ta?",
			isHidden : true,
			isHiddenMess : "Đang ẩn các trò chơi đã duyệt",
			e_ten: "",
			e_soluong : 0,
			e_doihinh : 0,
			e_mota: "",
			e_id: "",
			e_theloai : 0,
			e_mess : " ",
			editOpen : false,
		}
		this.overlayRef = React.createRef();
		
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleUserConfirm = this.handleUserConfirm.bind(this);
		this.handleConfirmButton = this.handleConfirmButton.bind(this);
		this.handleNoButton = this.handleNoButton.bind(this);
		this.handleYesButton = this.handleYesButton.bind(this);
		this.handleConfirmButton2 = this.handleConfirmButton2.bind(this);
		this.handleNoButton2 = this.handleNoButton2.bind(this);
		this.handleYesButton2 = this.handleYesButton2.bind(this);
		this.handleHidden = this.handleHidden.bind(this);
		this.handleYesButton3 = this.handleYesButton3.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
		this.handleEditSave = this.handleEditSave.bind(this);
		this.handleEditOpen = this.handleEditOpen.bind(this);
		this.closeOverlay = this.closeOverlay.bind(this);
	}
	
	getGames(){
		var data = {psw: "sc0utgames"}
		axios({
			method: "post",
			data: data,
			url : URL + "/unverified",
		}).then(res => {return res.data}).then(data => {
			// console.log(data);
			// this.shuffle(data);
			let confirm_button = new Array(), confirm_button2 = new Array();
			data.map(i => {
				confirm_button.push(false);
				confirm_button2.push(false);
			});
			// console.log(confirm_button);
			this.setState({games: data, confirm_button: confirm_button, confirm_button2: confirm_button2});
		})
	}
	
	componentDidMount(){
		this.getGames();
		let ten = sessionStorage.getItem("ten");
		if (ten != null){
			this.setState({ten: ten, isUser: true});
		}
	}
	
	shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	
	handleUserChange(e){
		let value = e.target.value;
		this.setState({username: value});
	}
	
	handleUserConfirm(){
		let data = {psw: this.state.username};
		// console.log(data);
		axios({
			method: "post",
			data: data,
			url : URL + "/user_confirm",
		}).then(res => {return res.data}).then(data => {
			// console.log(data);
			if (data.status == "ok"){
				this.setState({isUser: true, ten: data.username});
				sessionStorage.setItem("ten", data.username);
			}
			else{
				this.setState({message: "Mã xác nhận không đúng rồi, vui lòng nhập lại nhé!"});
			}
		});
	}
	
	handleConfirmButton(ind){
		// let id = this.state.games[ind]._id;
		let clone = this.state.confirm_button;
		clone[ind] = true;
		this.setState({confirm_button: clone});
	}
	
	handleNoButton(ind){
		let clone = this.state.confirm_button;
		clone[ind] = false;
		this.setState({confirm_button: clone});
	}
	
	handleYesButton(ind){
		let id = this.state.games[ind]._id;
		let data = {id: id};
		data.ten = this.state.ten;
		axios({
			method: "post",
			data: data,
			url: URL + "/confirm_yes",
		}).then(res => {return res.data}).then(data => {
			if (data.status == "ok"){
				// console.log("OK đã xác nhận");
				this.getGames();
			}
		});
	}
	
	handleConfirmButton2(ind){
		// let id = this.state.games[ind]._id;
		let clone = this.state.confirm_button2;
		clone[ind] = true;
		this.setState({confirm_button2: clone});
	}
	
	handleNoButton2(ind){
		let clone = this.state.confirm_button2;
		clone[ind] = false;
		this.setState({confirm_button2: clone});
	}
	
	handleYesButton2(ind){
		let id = this.state.games[ind]._id;
		let data = {id: id};
		data.ten = this.state.ten;
		axios({
			method: "post",
			data: data,
			url: URL + "/confirm_remove",
		}).then(res => {return res.data}).then(data => {
			if (data.status == "ok"){
				// console.log("OK đã xác nhận");
				this.getGames();
			}
		});
	}
	
	handleYesButton3(ind){
		let id = this.state.games[ind]._id;
		let data = {id: id};
		data.ten = this.state.ten;
		axios({
			method: "post",
			data: data,
			url: URL + "/confirm_hide",
		}).then(res => {return res.data}).then(data => {
			if (data.status == "ok"){
				// console.log("OK đã xác nhận");
				this.getGames();
			}
		});
	}
	
	handleHidden(){
		let value = !this.state.isHidden;
		let mess = value?"Đang ẩn các trò chơi đã duyệt":"Đang hiện các trò chơi đã duyệt";
		this.setState({isHidden: value, isHiddenMess: mess});
	}
	
	handleChange(e) {
		let id = e.target.value;
		let game = this.state.games[id];
		// console.log(game);
		this.setState({e_ten: game.ten, e_soluong: game.so_luong, e_mota: game.mo_ta, e_doihinh: game.doi_hinh, e_id: game._id, e_mess: " ", e_theloai: game.the_loai});
	}
	
	handleEditChange(e){
		let name = e.target.name;
		let value = e.target.value;
		// console.log(name, value);
		this.setState({[name]: value});
	}
	
	handleEditSave(){
		let data = {};
		data.id = this.state.e_id;
		data.ten = this.state.e_ten;
		data.so_luong = this.state.e_soluong;
		data.doi_hinh = this.state.e_doihinh;
		data.mo_ta = this.state.e_mota;
		data.the_loai = this.state.e_theloai;
		axios({
			method: 'post',
			url: URL+"/editGame",
			data: data,
		}).then(res =>{return res.data}).then(data => {
			// console.log(data);
			this.getGames();
			this.setState({e_mess: "Đã lưu!"});
		});
	}
	
	handleEditOpen(){
		let value = !this.state.editOpen;
		this.setState({editOpen: value});
		this.overlayRef.current.style.display = "block";
	}

	closeOverlay(){
		this.overlayRef.current.style.display = "none";
		this.setState({editOpen: false});
	}
	
	render(){
		let games = "";
		games = this.state.games.map((i, ind) => {
			if (1){		//If game has been checked
				let so_luong;
				if (i.so_luong == 1) so_luong = "Dưới 10 người";
					else if (i.so_luong == 2) so_luong = "Từ 10 đến 25 người";
					else so_luong = "Trên 25 người";
					
				let doi_hinh = "";
				if (i.doi_hinh == 1) doi_hinh = "Cá nhân";
				else if (i.doi_hinh == 2) doi_hinh = "Vòng tròn";
				else if (i.doi_hinh == 3) doi_hinh = "Chia nhóm";
				else if (i.doi_hinh == 4) doi_hinh = "Khác";
				
				let the_loai;
				if (i.the_loai == 1) the_loai = "Trò chơi sinh hoạt tập thể";
				else if (i.the_loai == 2) the_loai = "Trò chơi rèn luyện kỹ năng";
				
				let buttons;
				if (this.state.confirm_button[ind]){
					buttons = 	(<div className="w3-left w3-animate-zoom">
									<button className="w3-btn w3-green w3-margin-right" value={ind} 
										onClick={() => {this.handleYesButton(ind)}}>Ok</button>
									<button className="w3-btn w3-red" value={ind} 
										onClick={() => {this.handleNoButton(ind)}}>No</button>
								</div>
					);
				}
				
				
				else{
					buttons = <button className="w3-btn w3-green" value={ind} onClick={() => {this.handleConfirmButton(ind)}}>Trò này OK</button>
				}
				
				let buttons2;
				if (this.state.confirm_button2[ind]){
					buttons2 = 	(<div className="w3-right w3-animate-zoom">
									<button className="w3-btn w3-red w3-margin-right" value={ind} 
										onClick={() => {this.handleYesButton2(ind)}}>Ok</button>
									<button className="w3-btn w3-green" value={ind} 
										onClick={() => {this.handleNoButton2(ind)}}>No</button>
								</div>
					);
				}
				
				
				else{
					buttons2 = <button className="w3-btn w3-right w3-red" value={ind} onClick={() => {this.handleConfirmButton2(ind)}}>Xoá 4ever</button>
				}
				
				let hide = "w3-animate-bottom", hide2 = "w3-container w3-card w3-pale-blue w3-padding w3-display-container", 
					hide_status = "Đang ẩn", hide_style = "w3-text-red";
				if (i.check == 1){
					hide_status = "Đang hiện";
					hide_style = "w3-text-green";
					hide2 = "w3-container w3-card w3-sand w3-padding w3-display-container";
					buttons = <button className="w3-btn w3-deep-orange" value={ind} onClick={() => {this.handleConfirmButton(ind)}}>Ẩn trò này</button>
						if (this.state.confirm_button[ind]){
							buttons = 	(<div className="w3-left w3-animate-zoom">
											<button className="w3-btn w3-green w3-margin-right" value={ind} 
												onClick={() => {this.handleYesButton3(ind)}}>Ẩn</button>
											<button className="w3-btn w3-red" value={ind} 
												onClick={() => {this.handleNoButton(ind)}}>No</button>
										</div>
							);
						}
				}
				if (this.state.isHidden && i.check == 1){
						hide += " w3-hide";
				}
				
				
				return(
					<div className={hide}>
						<div className={hide2}>
							<h3 className="w3-center">{i.ten}</h3>
							<div className={hide_style}><b>Status: </b>{hide_status}</div>
							<div><b>Thể loại trò chơi: </b>{the_loai}</div>
							<div><b>Số lượng người chơi: </b>{so_luong}</div>
							<div><b>Đội hình chơi: </b>{doi_hinh}</div>							
							<div><b>Người đóng góp: </b>{i.dong_gop}</div>
							<div><b>Mô tả:</b><div className="w3-margin" style={{whiteSpace: "pre-wrap"}}>{i.mo_ta}</div></div>
							<div className="w3-row-padding">
								<div className="w3-col s6">{buttons}</div>
								<div className="w3-col s6">{buttons2}</div>
							</div>
						</div>
						<br/><br/>
					</div>
				);
			}
		})
		
		
		// ----------------- EDIT -----------------
		
		let edit, editHide = "w3-hide";
		if (this.state.editOpen)
			editHide = "w3-animate-opacity";
		
		let option_list = this.state.games.map((i, ind) => {
			let isHide = " (Hiện) ";
			if (i.check == 0)
				isHide = " (Ẩn) ";
			return (
				<option value={ind}>{ isHide + i.ten }</option>
			);
		});
		
		edit = (
			<div className="w3-pale-red w3-card w3-container w3-padding">
				<div onClick={this.closeOverlay} className="w3-btn w3-right w3-text-red"><FontAwesomeIcon icon={faWindowClose} size="lg"/></div>
				<br/><br/>
				<div className={editHide}>
					<select className="w3-select" onChange={this.handleChange}>
						<option disabled selected>Chọn trò chơi để chỉnh sửa</option>
						{option_list}
					</select>
					<br/><br/>
					
					<div className="w3-row">
						<input className="w3-input w3-margin w3-col l5" placeholder="Tên trò chơi" name="e_ten" value={this.state.e_ten} onChange={this.handleEditChange}/>
						<select name="e_theloai" onChange={this.handleEditChange} value={this.state.e_theloai} className="w3-select w3-margin w3-col l5">
							<option value="0" disabled selected>Thể loại trò chơi</option>
							<option value="1">Trò chơi sinh hoạt tập thể</option>
							<option value="2">Trò chơi rèn luyện kĩ năng</option>
						</select>
					</div>
					
					<div className="w3-row">
						
						<select name="e_soluong" onChange={this.handleEditChange} value={this.state.e_soluong} className="w3-select w3-margin w3-col l5">
							<option value="0" disabled selected>Số lượng</option>
							<option value="1">1-10 người</option>
							<option value="2">10-25 người</option>
							<option value="3">Trên 25 người</option>
						</select>
						<select name="e_doihinh" onChange={this.handleEditChange} value={this.state.e_doihinh} className="w3-select w3-margin w3-col l5">
							<option value="0" disabled selected>Đội hình</option>
							<option value="1">Cá nhân</option>
							<option value="2">Vòng tròn</option>
							<option value="3">Chia nhóm</option>
							<option value="4">Khác</option>
						</select>
					</div>
					
					<textarea className="w3-block" placeholder="Mô tả trò chơi" name="e_mota" value={this.state.e_mota} onChange={this.handleEditChange} style={{height: "200px"}}></textarea>
					<br/>
					<div className="w3-row">
						<button className="w3-btn w3-green w3-right" onClick={this.handleEditSave}>Save</button>
						<div className="w3-col l5 w3-text-red w3-center">{this.state.e_mess}</div>
					</div>
				</div>
			</div>
		);
		
		// ------------ MAIN -------------
		
		let verify, login;
		
		login = (
			<div className="w3-container">
				<input type='password' placeholder="" value={this.state.username} 
					onChange={this.handleUserChange} className="w3-input" autofocus="true"/>
				<div className="w3-center">{this.state.message}</div>
				<br/>
				<button className="w3-btn w3-red w3-right" onClick={this.handleUserConfirm}>Xác nhận</button>
			</div>
		);
		
		if (this.state.isUser) 
			verify   =  (<div className="w3-container">
							<div className="w3-container">
								<div className="w3-center w3-padding-large">
									<input type="checkbox" className="w3-check" value={this.state.isHidden} 
										onChange={this.handleHidden}/> 
									&nbsp; &nbsp; {this.state.isHiddenMess}
								</div>
								<div className="w3-center w3-margin-top">
									<button className="w3-center w3-btn w3-large w3-deep-orange" onClick={this.handleEditOpen}>Chỉnh sửa trò chơi <FontAwesomeIcon icon={faEdit}/> </button>
								</div>
								<div className="w3-modal" ref={this.overlayRef}>
									<div className="w3-modal-content w3-animate-top">
										{edit}
									</div>
								</div>
								<br/>
							</div>
							{games}
						</div>);
		else
			verify = (login);		
		
		return (
			<div className="w3-container">
				<h1 className="w3-center">Quản lý trò chơi</h1>
				<h5 className="w3-center"><i>Cảm ơn bạn đã làm một việc cực kỳ quan trọng</i></h5>
				<br/>
				<div className="w3-center">--- Xin chào, {this.state.ten} ---</div>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6">
						{verify}
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
				<br/><br/>
			</div >
		);
	}
}

export default withRouter(Verify);