import React from 'react';
import axios from 'axios';
import './allgames.css';
import {URL} from './url.js';
import Verify from './verify';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch, faCheckSquare, faAngleUp, faAngleDown, faChild } from '@fortawesome/free-solid-svg-icons';

class AllGames extends React.Component{
	constructor(){
		super();
		
		this.overlayRef = React.createRef();
		this.filterRef = React.createRef();
		
		this.state = {
			games1 : [],
			games2 : [],
			games : [],
			isOpen : [],
			trochoi: "Trò chơi sinh hoạt tập thể",
			f_doihinh : "",
			f_soluong : "",
			f_child : false,
			the_loai : 1,
			btn_sinhhoat: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-green w3-padding",
			btn_kinang: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-border w3-border-green w3-padding",
		}
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.closeFilter = this.closeFilter.bind(this);
		this.switchGames = this.switchGames.bind(this);
		this.handleGameOpen = this.handleGameOpen.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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
		var data = {psw: "sc0utgames"}, i = 0;
		axios({
			method: "post",
			data: data,
			url : URL + "/getgames",
		}).then(res => {return res.data}).then(data => {
			this.shuffle(data);
			let g1 = new Array(), g2 = new Array(), openClose = new Array();
			data.map((i) => {
				if (i.the_loai == 1){
					g1.push(i);
					openClose.push(false);
				}
				else if (i.the_loai == 2)
					g2.push(i);
			});
			// console.log(g1,g2);
			this.setState({games1: g1, games2: g2, games: g1, isOpen: openClose});
			// console.log(data);
			setTimeout(() => {this.overlayRef.current.style.display = "none"}, 500);
		})
	}
	
	componentDidMount(){
		this.overlayRef.current.style.display = "block";
		this.getGames();
	}
	
	handleChange(event){
		const target = event.target;
		const name = target.name;
		let value = target.value;
		if (value === "A") value = "";
		this.setState({[name] : value});
		// console.log(this.state.games);
	}
	
	handleSearch(e){
		if (this.filterRef.current.style.display == "none")
			this.filterRef.current.style.display = "block";
		else
			this.filterRef.current.style.display = "none";
	}
	
	closeFilter() {
		this.filterRef.current.style.display = "none";
		this.setState({f_doihinh: "", f_soluong: "", f_child: false});
	}
	
	switchGames(e){
		let value = e.target.value;
		
		if (value == 1){
			let games = this.state.games1;
			let isOpen = new Array();
			games.map((i) => { isOpen.push(false);});
			this.setState({
				games: games,
				btn_sinhhoat: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-green w3-padding",
				btn_kinang: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-border w3-border-green w3-padding",
				f_doihinh : "",
				f_soluong : "",
				trochoi: "Trò chơi sinh hoạt tập thể",
				isOpen : isOpen,
			});
		}
		else if (value == 2){
			let games = this.state.games2;
			let isOpen = new Array();
			games.map((i) => { isOpen.push(false);});
			// console.log(games);
			this.setState({
				games: games,
				btn_sinhhoat: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-border w3-border-green w3-padding",
				btn_kinang: "w3-center w3-margin w3-col w3-large m5 w3-btn w3-green w3-padding",
				f_doihinh : "",
				f_soluong : "",
				trochoi: "Trò chơi rèn luyện kĩ năng",
				isOpen : isOpen,
			});
		}
	}
	
	handleGameOpen (e){
		let id = e.currentTarget.id;
		let a = this.state.isOpen;
		let value = !a[id];
		a[id] = value;
		this.setState({isOpen: a});
	}
	
	handleCheckboxChange(e){
		let value = e.target.checked;
		if (value){
			this.setState({f_child: true});
		}
		else{
			this.setState({f_child: false});
		}
	}
	
	render(){
		let games = "";
		
		games = this.state.games.map((i, index) => {
			if (1){		//If game has been checked
				let so_luong;
				{
					if (i.so_luong == 1) so_luong = "#dưới10người";
					else if (i.so_luong == 2) so_luong = "#từ10đến25người";
					else so_luong = "#trên25người";
				}
				
				let doi_hinh = "";
				{
					if (i.doi_hinh == 1) doi_hinh = "#cánhân";
					else if (i.doi_hinh == 2) doi_hinh = "#vòngtròn";
					else if (i.doi_hinh == 3) doi_hinh = "#chianhóm";
					else if (i.doi_hinh == 4) doi_hinh = "#khác";
				}
				
				let ki_nang, ten_ki_nang = [
					[],
					["Nhanh nhẹn", "Làm việc nhóm", "Trí tuệ", "Dũng cảm", "Khéo léo"],
					["Nút dây", "Truyền tin", "Cứu thương", "Phương hướng", "Cắm trại"]
				], mau_ki_nang = [
					[],
					["w3-margin w3-padding-small w3-tag w3-round-xlarge w3-green", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-purple", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-deep-orange", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-blue", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-indigo"],
					["w3-margin w3-padding-small w3-tag w3-round-xlarge w3-indigo", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-blue", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-red", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-deep-orange", "w3-margin w3-padding-small w3-tag w3-round-xlarge w3-green"]
				];
				
					ki_nang = i.ki_nang.map((j, ind) => {
						if (j == 1)
							return  <span className={mau_ki_nang[i.the_loai][ind]}>{ten_ki_nang[i.the_loai][ind]}</span>;
						return "";
					});
					
				let cond = true;
					
				cond = (this.state.f_soluong === "" || this.state.f_soluong === i.so_luong) && 
							(this.state.f_doihinh === "" || this.state.f_doihinh === i.doi_hinh) && (i.child == 1 || !this.state.f_child);	
					
				let author = "Unknown";
				if (i.dong_gop != "" && ('dong_gop' in i))
					author = i.dong_gop;
				
				let iconOpen, openOrClose;
				
				if (this.state.isOpen[index]){
					iconOpen = faAngleUp;
					openOrClose = "w3-animate-opacity";
				}
				else {
					iconOpen = faAngleDown;
					openOrClose = "w3-hide";
				}
				
				let pColor = index%2==0?"anchor-bg":"food-bg";
				let forChild = (i.child==1)?"w3-left w3-section w3-text-green":"w3-hide";
				if (cond)
					return(
						<div >
							<div className="w3-card w3-animate-bottom">
								<div className={pColor}>
									<div className="w3-container">
									<div className={forChild} title="Thích hợp cho trẻ em">
										<FontAwesomeIcon icon={faChild} size="lg"/>
									</div>
									<div className="w3-right w3-btn" id={index} onClick={this.handleGameOpen}>
										<FontAwesomeIcon icon={iconOpen}/>
									</div>
									<h3 className="w3-center font-comic">{i.ten}</h3>
									<div className="w3-center w3-text-grey"><i>by {author}</i></div>
									<div className="w3-row-padding">
										<div className="w3-center w3-col l4 w3-text-red"><i>{so_luong} {doi_hinh}</i></div>
										<div><div className="w3-center w3-col l8 font-comic">{ki_nang}</div></div>
									</div>
									<div className={openOrClose}>
										<div className="w3-clear"></div>
										<div><div className="w3-margin" style={{whiteSpace: "pre-wrap"}}>{i.mo_ta}</div></div>
									</div>
									</div>
								</div>
							</div>
							<br/><br/>
						</div>
					);
			}
		})
		
		let filter;
		filter = (
		<div>
			
			<div className="w3-sand w3-card w3-padding-large w3-round-xlarge w3-margin-bottom w3-display-container">
				<div className=" w3-right" onClick={this.closeFilter} style={{cursor: "pointer"}}>&times;</div>
				<div className="w3-center w3-text-grey">{this.state.trochoi}</div>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l4">
						<select className="w3-select" name="f_soluong" value={this.state.f_soluong} 
							onChange={this.handleChange}>
							<option value="0" disabled selected>Số lượng</option>
							<option value="A">-- Tất cả --</option>
							<option value="1">1-10 người</option>
							<option value="2">10-25 người</option>
							<option value="3">Trên 25 người</option>
						</select>
					</div>
					<div className="w3-col l4">	
						<select className="w3-select" name="f_doihinh" value={this.state.f_doihinh} 
							onChange={this.handleChange}>
							<option value="0" disabled selected>Đội hình</option>
							<option value="A">-- Tất cả --</option>
							<option value="1">Cá nhân</option>
							<option value="2">Vòng tròn</option>
							<option value="3">Chia nhóm</option>
							<option value="4">Khác</option>
						</select>
					</div>
					<div className="w3-col l4">
						<input type="checkbox" className="w3-check" onChange={this.handleCheckboxChange} /><lable> Cho trẻ em</lable>
					</div>
				</div>
				
			</div>
		</div>
		);
		
		return (
			<div className="w3-container">
				<div class="w3-overlay w3-display-container" style={{backgroundColor:"rgba(230,230,230,0.7)"}} ref={this.overlayRef}>
					<FontAwesomeIcon icon={faSpinner} className="w3-display-middle w3-jumbo w3-text-green" spin />
				</div>
				
				<h1 className="w3-center w3-wide">Tất cả trò chơi</h1>
				<h5 className="w3-center"><i>Cùng chơi cùng vui!</i></h5>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container">
						<div className="w3-row-padding w3-center">
							<button className={this.state.btn_sinhhoat} value='1' onClick={this.switchGames}>Trò chơi sinh hoạt</button>
							<button className={this.state.btn_kinang}  value='2' onClick={this.switchGames}>Trò chơi kĩ năng</button>
						</div>
						<div className="w3-display-container w3-padding w3-margin-bottom">
							<div className="w3-btn w3-large w3-text-green w3-display-topleft" onClick={this.handleSearch}>
								<FontAwesomeIcon className="w3-margin-right" icon={faSearch}  size="lg"/>
								Tìm kiếm
							</div>
							<NavLink to="/verify">
								<div className="w3-btn w3-large w3-text-green w3-display-topright">
									Quản lý &nbsp; <FontAwesomeIcon className="w3-margin-right" icon={faCheckSquare}  size="lg"/>
								</div>
							</NavLink>
							<br/>
						</div>
						<div className="w3-display-container w3-animate-opacity" ref={this.filterRef} style={{display: "none"}}>
							{filter}
						</div>
						{games}
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
				<br/><br/>
			</div >
		);
	}
}

export default withRouter(AllGames);