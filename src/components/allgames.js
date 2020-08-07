import React from 'react';
import axios from 'axios';
import {URL} from './url.js';
import Verify from './verify';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class AllGames extends React.Component{
	constructor(){
		super();
		
		this.myRef = React.createRef();
		
		this.state = {
			games : [],
			isOverlay : true,
		}
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
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
	
	getGames(){
		// console.log(URL);
		var data = {psw: "sc0utgames"}
		axios({
			method: "post",
			data: data,
			url : URL + "/getgames",
		}).then(res => {return res.data}).then(data => {
			// console.log(data, URL);
			// this.shuffle(data);
			this.setState({games: data});
			alert("done!");
			// setTimeout(() => this.setState({ isOverlay: false}), 1000);
			// this.myRef.current.className="w3-hide";
		})
	}
	
	componentDidMount(){
		this.getGames();
	}
	
	render(){
		let games = "";
		games = this.state.games.map((i) => {
			if (1){		//If game has been checked
				let so_luong;
				if (i.so_luong == 1) so_luong = "Dưới 10 người";
					else if (i.so_luong == 2) so_luong = "Từ 10 đến 25 người";
					else so_luong = "Trên 30 người";
				
				let ki_nang = i.ki_nang.map((j, ind) => {
					if (j==1 && ind == 0) 
							return <span className="w3-tag w3-margin-right w3-round-xlarge w3-deep-orange w3-padding-small">Nhanh nhẹn</span>;
					if (j==1 && ind == 1) 
							return <span className="w3-tag w3-margin-right w3-round-xlarge w3-blue w3-padding-small">Hoạt bát</span>;
					if (j==1 && ind == 2) 
							return <span className="w3-tag w3-margin-right w3-round-xlarge w3-green w3-padding-small">Trí tuệ</span>;
					if (j==1 && ind == 3) 
							return <span className="w3-tag w3-margin-right w3-round-xlarge w3-red w3-padding-small">Dũng cảm</span>;
					if (j==1 && ind == 4) 
							return <span className="w3-tag w3-margin-right w3-round-xlarge w3-purple w3-padding-small">Khéo léo</span>;
					return "";
				});
				
				return(
					<div>
						<div className="w3-container w3-card w3-sand">
							<h3 className="w3-center">{i.ten}</h3>
							<div><b>Số lượng người chơi: </b>{so_luong}</div>
							<div><b>Kĩ năng: </b><br/><div className="w3-margin">{ki_nang}</div></div>
							<div><b>Mô tả:</b><div className="w3-margin">{i.mo_ta}</div></div>
						</div>
						<br/><br/>
					</div>
				);
			}
		})
		
		let isOverlay;
		if (!this.state.isOverlay)
			isOverlay = "w3-hide";
		else
			isOverlay = "overlay w3-display-container";
		return (
			<div className="w3-container">
				
				<h1 className="w3-center">Tất cả các trò chơi</h1>
				<br/>
				<div className="w3-center"><NavLink to="/verify"><div className="w3-btn w3-green">Kiểm tra trò chơi</div></NavLink></div>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container">
						{games}
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
			</div >
		);
	}
}

export default withRouter(AllGames);