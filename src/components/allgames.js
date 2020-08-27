import React from 'react';
import axios from 'axios';
import './allgames.css';
import {URL} from './url.js';
import Verify from './verify';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch, faCheckSquare, faChild, faBaby, faMale, faWindowClose, faSync } from '@fortawesome/free-solid-svg-icons';

class AllGames extends React.Component{
	constructor(){
		super();
		
		this.overlayRef = React.createRef();
		this.filterRef = React.createRef();
		this.gameOverlayRef = React.createRef();
		
		this.state = {
			games1 : [],
			games2 : [],
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
			btn_sinhhoat: "w3-center w3-col w3-large m6 w3-btn w3-green w3-padding",
			btn_kinang: "w3-center w3-col w3-large m6 w3-btn w3-border w3-border-green w3-padding",
			name_kinang: [["#Nhanh", "#Teamwork" ,"#Trí" ,"#Dũng", "#Khéo"], ["#Nút", "#Truyền", "#Cứu", "#Hướng", "#Trại"]],
		}
		this.getGames = this.getGames.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.closeFilter = this.closeFilter.bind(this);
		this.switchGames = this.switchGames.bind(this);
		this.handleGameOpen = this.handleGameOpen.bind(this);
		this.handleGameClose = this.handleGameClose.bind(this);
		this.handleGameCloseM = this.handleGameCloseM.bind(this);
		this.game_gen = this.game_gen.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.handleCheck1 = this.handleCheck1.bind(this);
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
	
	handleCheck(value){
		let clone = [0,0,0];
		clone[value] = 1;
		this.setState({f_child: clone});
	}
	
	handleCheck1(value){
		let clone = [0,0,0,0,0];
		clone[value] = 1;
		this.setState({f_kinang: clone});
	}
	
	handleSearch(e){
		if (this.filterRef.current.style.display == "none")
			this.filterRef.current.style.display = "block";
		else
			this.filterRef.current.style.display = "none";
	}
	
	closeFilter() {
		// this.filterRef.current.style.display = "none";
		this.setState({f_doihinh: "", f_soluong: "", f_child: [1,1,1], f_kinang: [1,1,1,1,1]});
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
		
		this.gameOverlayRef.current.style.display = "block";
	}
	
	handleGameCloseM(e){
			let modal = this.gameOverlayRef.current;
			if (e.target == modal) {
				this.gameOverlayRef.current.style.display = "none";
			}
	}
	
	handleGameClose(e){
		this.gameOverlayRef.current.style.display = "none";	
	}

	
	game_gen(){
			// console.log(this.state.games);
			let gamesa = new Array();
			this.state.games.map((i, index) => {
			if (1){		//If game has been checked
				let so_luong;
				{
					if (i.so_luong == 1) so_luong = "#dưới10người";
					else if (i.so_luong == 2) so_luong = "#10~25người";
					else so_luong = "#trên25người";
				}
				
				let so_luong_n;
				{
					if (i.so_luong == 1) so_luong_n = "#dưới10";
					else if (i.so_luong == 2) so_luong_n = "#10~25";
					else so_luong_n = "#trên25";
				}
				
				let doi_hinh = "";
				{
					if (i.doi_hinh == 1) doi_hinh = "#cánhân";
					else if (i.doi_hinh == 2) doi_hinh = "#tròn";
					else if (i.doi_hinh == 3) doi_hinh = "#nhóm";
					else if (i.doi_hinh == 4) doi_hinh = "#khác";
				}
				
				
				let cond = true;
					
				cond = (this.state.f_soluong == "" || this.state.f_soluong == i.so_luong) && 
						(this.state.f_doihinh == "" || this.state.f_doihinh == i.doi_hinh) && 
						(	
							(this.state.f_child[0] == i.child[0] && this.state.f_child[0]==1) || 
							(this.state.f_child[1] == i.child[1] && this.state.f_child[1]==1) || 
							(this.state.f_child[2] == i.child[2] && this.state.f_child[2]==1)
						) &&
						(
							(this.state.f_kinang[0] == i.ki_nang[0] && this.state.f_kinang[0]==1) || 
							(this.state.f_kinang[1] == i.ki_nang[1] && this.state.f_kinang[1]==1) || 
							(this.state.f_kinang[2] == i.ki_nang[2] && this.state.f_kinang[2]==1) || 
							(this.state.f_kinang[3] == i.ki_nang[3] && this.state.f_kinang[3]==1) || 
							(this.state.f_kinang[4] == i.ki_nang[4] && this.state.f_kinang[4]==1)
						);
							
				let bg = ["anchor-bg", "food-bg", "shape-bg", "bubble-bg"];
				let pColor = bg[index%4];
				
				let style_icon = ["w3-large w3-text-grey w3-opacity", 
								  "w3-large w3-text-grey w3-opacity", 
								  "w3-large w3-text-grey w3-opacity"];
								  
				if (this.state.f_child[0] == 1) style_icon[0] = "w3-large w3-text-amber";
				if (this.state.f_child[1] == 1) style_icon[1] = "w3-large w3-text-green";
				if (this.state.f_child[2] == 1) style_icon[2] = "w3-large w3-text-red";
				
				let symbols = [];
				if (i.child[0] == 1)
					symbols.push(<span className={style_icon[0]}>
									<FontAwesomeIcon title="Ngành ấu" icon={faBaby} size="lg"/> &nbsp;
								</span>);
				if (i.child[1] == 1)
					symbols.push(<span className={style_icon[1]}>
									<FontAwesomeIcon title="Ngành thiếu" icon={faChild} size="lg"/> &nbsp;
								</span>);
				if (i.child[2] == 1)
					symbols.push(<span className={style_icon[2]}>
									<FontAwesomeIcon title="Ngành kha" icon={faMale} size="lg"/> &nbsp;
								</span>);
								
				let style_icon1 = ["w3-text-grey w3-opacity", 
								  "w3-text-grey w3-opacity", 
								  "w3-text-grey w3-opacity", 
								  "w3-text-grey w3-opacity", 
								  "w3-text-grey w3-opacity"];
								  
				if (this.state.f_kinang[0] == 1) style_icon1[0] = "w3-text-green";
				if (this.state.f_kinang[1] == 1) style_icon1[1] = "w3-text-purple";
				if (this.state.f_kinang[2] == 1) style_icon1[2] = "w3-text-orange";
				if (this.state.f_kinang[3] == 1) style_icon1[3] = "w3-text-blue";
				if (this.state.f_kinang[4] == 1) style_icon1[4] = "w3-text-indigo";
				
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
						return  <span className={style_icon1[ind]}><i>{ten_ki_nang[i.the_loai][ind]} &nbsp;</i></span>;
					return "";
				});
				
				let card = (<div className="w3-card w3-display-container w3-animate-bottom">
								<div className={pColor} id={index} onClick={this.handleGameOpen}>
									<div className="w3-container" style={{cursor: "pointer"}}>
										<h3 className="w3-center font-comic">{i.ten}</h3>
										<div className="w3-hide-small">
											<div className="w3-row-padding">
												<div className="w3-center w3-col l6 w3-text-red"><i>{so_luong}</i></div>
												<div className="w3-center w3-col l6 w3-text-red"><i>{doi_hinh}</i></div>
											</div>
											<div className="w3-center">
												{ki_nang}
											</div>
											<div className="w3-center w3-margin">
												{symbols}
											</div>
										</div>
										
										<div className="w3-hide-large w3-hide-medium">
											<div className="w3-row-padding">
												<div className="w3-center w3-col s4 w3-text-red"><i>{so_luong_n}</i></div>
												<div className="w3-center w3-col s4 w3-text-red"><i>{symbols}</i></div>
												<div className="w3-center w3-col s4 w3-text-red"><i>{doi_hinh}</i></div>
											</div>
											<br/>
										</div>
									</div>
								</div>
							</div>
				);
			if (cond)
				gamesa.push(card);
			}
		})
		return gamesa;
		}
	
	render(){
		let list = this.game_gen();
		let n = list.length;
		let games = new Array(), cols = new Array(), i;
		list.forEach((i, ind) => {
			cols.push(
				<div className="w3-col m4 w3-margin-bottom">{i}</div>
			);
			
			if ((ind+1)%3 == 0 || (ind+1 == n)){
				games.push(
					<div className="w3-row-padding">{cols}</div>
				);
				cols = new Array();
			}
			
		});
		
		let check = ["w3-large w3-text-grey w3-margin w3-opacity", "w3-large w3-text-grey w3-margin w3-opacity", "w3-large w3-text-grey w3-margin w3-opacity"];
		if (this.state.f_child[0] == 1) 
			check[0] = "w3-large w3-text-amber w3-margin";
		if (this.state.f_child[1] == 1) 
			check[1] = "w3-large w3-text-green w3-margin";
		if (this.state.f_child[2] == 1) 
			check[2] = "w3-large w3-text-red w3-margin";
		
		let check1 = ["w3-text-grey w3-margin w3-opacity", "w3-text-grey w3-margin w3-opacity", "w3-text-grey w3-margin w3-opacity", "w3-text-grey w3-margin w3-opacity", "w3-text-grey w3-margin w3-opacity"];
		if (this.state.f_kinang[0] == 1) 
			check1[0] = "w3-text-green bold w3-margin";
		if (this.state.f_kinang[1] == 1) 
			check1[1] = "w3-text-green bold w3-margin";
		if (this.state.f_kinang[2] == 1) 
			check1[2] = "w3-text-green bold w3-margin";
		if (this.state.f_kinang[3] == 1) 
			check1[3] = "w3-text-green bold w3-margin";
		if (this.state.f_kinang[4] == 1) 
			check1[4] = "w3-text-green bold w3-margin";
		
		// console.log(games);
		let filter;
		filter = (
		<div>
			<div className="w3-card w3-padding-large w3-round-xlarge w3-margin-bottom w3-display-container w3-animate-opacity">
				<div className=" w3-right" onClick={this.closeFilter} style={{cursor: "pointer"}}>
					<FontAwesomeIcon icon={faSync} color="green"/>
				</div>
				<div className="w3-center w3-text-grey">{this.state.trochoi}</div>
				<br/>
				
				<div className="w3-row-padding w3-stretch">
					<div className="w3-col s6">
						<select className="w3-select" name="f_soluong" value={this.state.f_soluong} 
							onChange={this.handleChange}>
							<option value="0" disabled selected>Số lượng</option>
							<option value="A">-- Tất cả --</option>
							<option value="1">1-10 người</option>
							<option value="2">10-25 người</option>
							<option value="3">Trên 25 người</option>
						</select>
					</div>
					<div className="w3-col s6">	
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
				</div>
				<div className="w3-margin-top">
					<div class="w3-center">
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
				
				<div className="w3-margin-top">
					<div class="w3-center">
					{
						this.state.name_kinang[this.state.the_loai-1].map((i, stt) => {
							return (
								<span className={check1[stt]} title="Ngành ấu" 
									onClick={() => {this.handleCheck1(stt)}} style={{cursor: "pointer"}}>
									{i}
								</span>
							);
						})
					}
						
						
					</div>
				</div>
				
			</div>
		</div>
		);
		
		let gameDisplay = (
		
		<div className={this.state.c_bg}>
			<div className="w3-padding-large w3-card-4 w3-display-container">
				<div className="w3-display-topright w3-margin" style={{cursor:"pointer"}} onClick={this.handleGameClose}>
					<FontAwesomeIcon icon = {faWindowClose} size="lg"/>
				</div>
				<h2 className="w3-center w3-xlarge font-palatino w3-wide">{this.state.c_ten}</h2>
				<div className="w3-row "><i>
					<div className="w3-center w3-col m4 w3-text-red">{this.state.c_soluong}</div>
					<div className="w3-center w3-col m4 w3-text-red">{this.state.c_doihinh}</div>
					<div className="w3-center w3-col m4 w3-text-red">{this.state.c_child}</div></i>
				</div>
				<div className="w3-center"><i>{this.state.c_kinang}</i></div>
				<br/>
				<div className="font-comic" style={{whiteSpace: "pre-wrap", maxHeight: "250px", overflowY: "auto"}}>
					{this.state.c_mota}
				</div>
				<br/>
				<div className="w3-center w3-text-grey"><i>-- by {this.state.c_donggop} --</i></div>
			</div>
		</div>
		);
		
		return (
			<div className="w3-container ">
				<div className="w3-overlay w3-display-container" style={{backgroundColor:"rgba(230,230,230,0.9)"}} ref={this.overlayRef}>
					<FontAwesomeIcon icon={faSpinner} className="w3-display-middle w3-jumbo w3-text-green" spin />
				</div>
				
				<div className="w3-modal" ref={this.gameOverlayRef} onClick={this.handleGameCloseM}>
					<div className="w3-modal-content w3-animate-zoom" ref={this.gameOverlayRef}>{gameDisplay}</div>
				</div>
				
				<div className="">
					<h1 className="w3-center w3-wide">Tất cả trò chơi</h1>
					<h5 className="w3-center"><i>Cùng chơi cùng vui!</i></h5>
					<br/>
				</div>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container">
						<div className="w3-row-padding w3-center w3-stretch">
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
						
					</div>
					<div className="w3-col l3"><br/></div>
					<div className="w3-container">
						{games}
					</div>
				</div>
				<br/><br/>
			</div >
		);
	}
}

export default withRouter(AllGames);