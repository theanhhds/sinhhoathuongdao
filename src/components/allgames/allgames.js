import React from 'react';
import axios from 'axios';
import './allgames.css';
import {URL} from '../url.js';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch, faDisease } from '@fortawesome/free-solid-svg-icons';

import GameDisplay from './gameDisplay';
import Filter from './filter';
import GameList from './gamelist';

const LIMIT = 15;	//Must be number % 3 == 0
const LIMIT2 = 15; 	//Limit for filter

class AllGames extends React.Component{
	constructor(){
		super();
		
		this.overlayRef = React.createRef();
		this.filterRef = React.createRef();
		this.gameOverlayRef = React.createRef();
		
		this.state = {
			games2 : [],
			games1 : [],
			games : [],
			trochoi: "Trò chơi sinh hoạt tập thể",
			f_doihinh : "",
			f_soluong : "",
			f_child : [1,1,1],
			f_kinang: [1,1,1,1,1],
			the_loai : 1,
			c_ten : "",
			c_doihinh: 0,
			c_soluong: 0,
			c_donggop: "",
			c_mota: "",
			c_child: 0,
			c_kinang: [],
			c_bg: "",
			limit: LIMIT,
			limit_btn : false,
			btn_sinhhoat: "w3-center w3-col w3-large m6 w3-btn w3-green w3-padding",
			btn_kinang: "w3-center w3-col w3-large m6 w3-btn w3-border w3-border-green w3-padding",
			name_kinang: [["#Nhanh", "#Teamwork" ,"#Trí" ,"#Dũng", "#Khéo"], ["#Nút", "#Truyền", "#Cứu", "#Hướng", "#Trại"]],
			displayGameModal : false,
		}
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.refreshFilter = this.refreshFilter.bind(this);
		this.switchGames = this.switchGames.bind(this);
		this.handleGameOpen = this.handleGameOpen.bind(this);
		this.handleGameClose = this.handleGameClose.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.handleCheck1 = this.handleCheck1.bind(this);
		this.handleIncreaseLimit = this.handleIncreaseLimit.bind(this);
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
			// this.shuffle(data);
			let g1 = new Array(), g2 = new Array(), openClose = new Array();
			data.reverse().map((i) => {
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
		this.setState({[name] : value, limit: LIMIT2, limit_btn: false});
		// console.log(this.state.games);
	}
	
	handleCheck(value){
		let clone = [0,0,0];
		clone[value] = 1;
		this.setState({f_child: clone,  limit: LIMIT2, limit_btn: false});
	}
	
	handleCheck1(value){
		let clone = [0,0,0,0,0];
		clone[value] = 1;
		this.setState({f_kinang: clone,  limit: LIMIT2, limit_btn: false});
	}
	
	handleSearch(e){
		if (this.filterRef.current.style.display == "none")
			this.filterRef.current.style.display = "block";
		else
			this.filterRef.current.style.display = "none";
	}
	
	refreshFilter() {
		// this.filterRef.current.style.display = "none";
		this.setState({f_doihinh: "", f_soluong: "", f_child: [1,1,1], f_kinang: [1,1,1,1,1], limit: LIMIT2, limit_btn: false});
		document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
	}
	
	switchGames(e){
		let value = e.target.value;
		
		if (value == 1){
			let games = this.state.games1;
			let isOpen = new Array();
			games.map((i) => { isOpen.push(false);});
			this.setState({
				the_loai: 1,
				games: games,
				btn_sinhhoat: "w3-center w3-col w3-large m6 w3-btn w3-green w3-padding",
				btn_kinang: "w3-center w3-col w3-large m6 w3-btn w3-border w3-border-green w3-padding",
				f_doihinh : "",
				f_soluong : "",
				f_child : [1,1,1],
				f_kinang: [1,1,1,1,1],
				trochoi: "Trò chơi sinh hoạt tập thể",
				isOpen : isOpen,
				limit: LIMIT,
				limit_btn: false,
			});
		}
		else if (value == 2){
			let games = this.state.games2;
			let isOpen = new Array();
			games.map((i) => { isOpen.push(false);});
			// console.log(games);
			this.setState({
				the_loai: 2,
				games: games,
				btn_sinhhoat: "w3-center w3-col w3-large m6 w3-btn w3-border w3-border-green w3-padding",
				btn_kinang: "w3-center w3-col w3-large m6 w3-btn w3-green w3-padding",
				f_doihinh : "",
				f_soluong : "",
				f_child : [1,1,1],
				f_kinang: [1,1,1,1,1],
				trochoi: "Trò chơi rèn luyện kĩ năng",
				isOpen : isOpen,
				limit: LIMIT,
				limit_btn: false,
			});
		}
	}
	
	handleGameOpen (e){
		let id = e.currentTarget.id;
		let i = this.state.games[id];
		let so_luong;
		
		if (i.so_luong == 1) so_luong = "#dưới10người";
		else if (i.so_luong == 2) so_luong = "#10~25người";
		else so_luong = "#trên25người";
				
		let doi_hinh = "";

		if (i.doi_hinh == 1) doi_hinh = "#cánhân";
		else if (i.doi_hinh == 2) doi_hinh = "#vòngtròn";
		else if (i.doi_hinh == 3) doi_hinh = "#chianhóm";
		else if (i.doi_hinh == 4) doi_hinh = "#khác";
		
		let child = new Array();
		if (i.child[0] == 1) child.push(<span className='w3-text-amber'>#Ấu </span>); 
		if (i.child[1] == 1) child.push(<span className='w3-text-green'>#Thiếu </span>);  
		if (i.child[2] == 1) child.push(<span className='w3-text-red'>#Kha </span>);
				
		let ki_nang, ten_ki_nang = [
					[],
					["#nhanhnhẹn ", "#teamwork ", "#trítuệ ", "#dũngcảm", "#khéoléo"],
					["#nútdây ", "#truyềntin ", "#cứuthương ", "#phươnghướng ", "#cắmtrại "]
				], mau_ki_nang = [
					[],
					["w3-text-green", "w3-text-purple", "w3-text-orange", "w3-text-blue", "w3-text-indigo"],
					["w3-text-green", "w3-text-purple", "w3-text-orange", "w3-text-blue", "w3-text-indigo"]
				];
						
				ki_nang = i.ki_nang.map((j, ind) => {
					if (j == 1)
						return  <span className={mau_ki_nang[i.the_loai][ind]}><i>{ten_ki_nang[i.the_loai][ind]} &nbsp;</i></span>;
					return "";
				});
		let bg = ["anchor-bg", "food-bg", "shape-bg", "bubble-bg"];
				let pColor = bg[id%4];
		
		let author = "someone";
				if (i.dong_gop != "" && ('dong_gop' in i))
					author = i.dong_gop;
		
		this.setState({c_ten: i.ten, c_mota: i.mo_ta, c_doihinh: doi_hinh, c_soluong: so_luong, c_donggop: author, c_child: child, c_kinang: ki_nang, c_bg: pColor});
		
		this.setState({displayGameModal : true});
		// this.gameOverlayRef.current.style.display = "block";
		
	}
	
	handleGameClose(){
		// console.log("close");
		this.setState({displayGameModal: false});
	}
	
	handleIncreaseLimit(){
		let value = parseInt(this.state.limit) + LIMIT;
		let len = this.state.games.length;
		if (value >= len)
			this.setState({limit_btn: true});
		// console.log(value, len);
		this.setState({limit: value});
	}
	
	
	render(){
		let data = {	bg: this.state.c_bg, 
						ten: this.state.c_ten, 
						so_luong: this.state.c_soluong, 
						doi_hinh: this.state.c_doihinh, 
						ki_nang: this.state.c_kinang,
						child: this.state.c_child,
						mo_ta: this.state.c_mota,
						dong_gop: this.state.c_donggop
					}
					
		let filterData = {	child: this.state.f_child, ki_nang: this.state.f_kinang, 
									doi_hinh: this.state.f_doihinh, so_luong: this.state.f_soluong }
		
		return (
			<div className="w3-container ">
				<div className="w3-overlay w3-display-container" style={{backgroundColor:"rgba(230,230,230,0.9)"}} ref={this.overlayRef}>
					<FontAwesomeIcon icon={faSpinner} className="w3-display-middle w3-jumbo w3-text-green" spin />
				</div>
				
				<GameDisplay 	
					data = {data} 
					// displayRef = {this.gameOverlayRef} 
					display = {this.state.displayGameModal}
					close = {this.handleGameClose} 
				/>
				
				<div className="">
					<h1 className="w3-center w3-wide">
						Tất cả trò chơi
					</h1>
					<h5 className="w3-center" ><i>
						Cùng chơi <NavLink to="/verify" style={{textDecoration:"none",cursor: "text"}}>cùng vui!</NavLink>
					</i></h5>
					<br/>
				</div>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container">
						<div className="w3-row-padding w3-center w3-stretch">
							<button className={this.state.btn_sinhhoat} value='1' onClick={this.switchGames}>
								Trò chơi sinh hoạt ({parseInt(this.state.games1.length)})
							</button>
							<button className={this.state.btn_kinang}  value='2' onClick={this.switchGames}>
								Trò chơi kĩ năng ({parseInt(this.state.games2.length)})
							</button>
						</div>
						<div className="w3-display-container w3-padding w3-margin-bottom">
							<div className="w3-btn w3-large w3-text-green w3-display-topleft" onClick={this.handleSearch}>
								<FontAwesomeIcon className="w3-margin-right" icon={faSearch} size="lg"/>
								Tìm kiếm
							</div>
							
							<div className="w3-btn w3-large w3-text-green w3-display-topright" id={Math.floor(Math.random() * this.state.games.length)} onClick={this.handleGameOpen} title="Chọn ngẫu nhiên 1 trò chơi">
								Lucky me! &nbsp; <FontAwesomeIcon className="w3-margin-right animate__animated animate__swing animate__infinite" icon={faDisease}  size="lg"/>
							</div>
							<br/>
						</div>
						
						<div className="w3-display-container w3-animate-opacity" 
							ref={this.filterRef} style={{display: "none"}}>
							<Filter 
								refreshFilter = {this.refreshFilter}
								handleChange = {this.handleChange}
								handleCheck = {this.handleCheck}
								handleCheck1 = {this.handleCheck1}
								the_loai = {this.state.the_loai}
								ki_nang = {this.state.f_kinang}
								child = {this.state.f_child}
								so_luong = {this.state.f_soluong}
								doi_hinh = {this.state.f_doihinh}
							/>
						</div>	
						
					</div>
					<div className="w3-col l3"><br/></div>
					<div className="w3-container">
						<GameList 
							games = {this.state.games}
							f = {filterData}
							limit = {this.state.limit}
							handleGameOpen = {this.handleGameOpen}
						/>
					</div>
					<div className="w3-center w3-margin">
						<button className="w3-btn w3-green" disabled = {this.state.limit_btn} 
							onClick={this.handleIncreaseLimit}>Tải thêm</button>
					</div>
					
				</div>
				
				<br/><br/>
			</div >
		);
	}
}

export default withRouter(AllGames);