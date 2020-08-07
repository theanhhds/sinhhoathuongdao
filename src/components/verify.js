import React from 'react';
import axios from 'axios';
import {URL} from './url.js';
import {withRouter} from 'react-router-dom';

class Verify extends React.Component{
	constructor(){
		super();
		this.state = {
			games : [],
			isUser : false,
			message: "Nhập mã xác nhận của bạn",
			username: "",
			ten: "ai đây ta?"
		}
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleUserConfirm = this.handleUserConfirm.bind(this);
		this.handleConfirmButton = this.handleConfirmButton.bind(this);
		this.handleNoButton = this.handleNoButton.bind(this);
		this.handleYesButton = this.handleYesButton.bind(this);
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
			let confirm_button = new Array();
			data.map(i => {
				confirm_button.push(false);
			});
			// console.log(confirm_button);
			this.setState({games: data, confirm_button: confirm_button});
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
	
	render(){
		let games = "";
		games = this.state.games.map((i, ind) => {
			if (1){		//If game has been checked
				let so_luong;
				if (i.so_luong == 1) so_luong = "Dưới 10 người";
					else if (i.so_luong == 2) so_luong = "Từ 10 đến 25 người";
					else so_luong = "Trên 30 người";
				
				let ki_nang = i.ki_nang.map((j, ind) => {
					if (j==1 && ind == 0) return "[Nhanh nhẹn] ";
					if (j==1 && ind == 1) return "[Hoạt bát] ";
					if (j==1 && ind == 2) return "[Trí tuệ] ";
					if (j==1 && ind == 3) return "[Dũng cảm] ";
					if (j==1 && ind == 4) return "[Khéo léo] ";
					return "";
				});
				
				let buttons;
				if (this.state.confirm_button[ind]){
					buttons = 	(<div>
									<button className="w3-btn w3-green w3-margin-right" value={ind} 
										onClick={() => {this.handleYesButton(ind)}}>Yes</button>
									<button className="w3-btn w3-red" value={ind} 
										onClick={() => {this.handleNoButton(ind)}}>No</button>
								</div>
					);
				}
				else{
					buttons = <button className="w3-btn w3-green" value={ind} onClick={() => {this.handleConfirmButton(ind)}}>Xác nhận</button>
				}
				
				return(
					<div>
						<div className="w3-container w3-card w3-sand w3-padding">
							<h3 className="w3-center">{i.ten}</h3>
							<div><b>Số lượng người chơi: </b>{so_luong}</div>
							<div><b>Kĩ năng rèn luyện: </b>{ki_nang}</div>
							<div><b>Mô tả:</b><div className="w3-margin">{i.mo_ta}</div></div>
							{buttons}
						</div>
						<br/><br/>
					</div>
				);
			}
		})
		
		let verify, login;
		
		login = (
			<div className="w3-col l6 w3-container">
				<input type='password' placeholder="" value={this.state.username} 
					onChange={this.handleUserChange} className="w3-input" autofocus="true"/>
				<div className="w3-center">{this.state.message}</div>
				<br/>
				<button className="w3-btn w3-red w3-right" onClick={this.handleUserConfirm}>Xác nhận</button>
			</div>
		);
		
		if (this.state.isUser) 
			verify = (<div className="w3-col l6 w3-container">{games}</div>);
		else
			verify = (login);
		
		return (
			<div className="w3-container">
				<h1 className="w3-center">Kiểm duyệt trò chơi</h1>
				<br/>
				<div className="w3-center">--- Xin chào, {this.state.ten} ---</div>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
						{verify}
					<div className="w3-col l3"><br/></div>
				</div>
			</div >
		);
	}
}

export default withRouter(Verify);