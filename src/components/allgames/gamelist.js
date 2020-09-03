import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faBaby, faMale } from '@fortawesome/free-solid-svg-icons';

class GameList extends React.Component{
	constructor(props){
		super(props);
		this.game_gen = this.game_gen.bind(this);
	}
	
	game_gen(){
			// console.log(this.state.games);
			let gamesa = new Array();
			this.props.games.map((i, index) => {
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
				
				let bg = ["anchor-bg", "food-bg", "shape-bg", "bubble-bg"];
				let pColor = bg[index%4];
				
				let style_icon = ["w3-large w3-text-grey w3-opacity", 
								  "w3-large w3-text-grey w3-opacity", 
								  "w3-large w3-text-grey w3-opacity"];
								  
				if (this.props.f.child[0] == 1) style_icon[0] = "w3-large w3-text-amber";
				if (this.props.f.child[1] == 1) style_icon[1] = "w3-large w3-text-green";
				if (this.props.f.child[2] == 1) style_icon[2] = "w3-large w3-text-red";
				
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
								  
				if (this.props.f.ki_nang[0] == 1) style_icon1[0] = "w3-text-green";
				if (this.props.f.ki_nang[1] == 1) style_icon1[1] = "w3-text-purple";
				if (this.props.f.ki_nang[2] == 1) style_icon1[2] = "w3-text-orange";
				if (this.props.f.ki_nang[3] == 1) style_icon1[3] = "w3-text-blue";
				if (this.props.f.ki_nang[4] == 1) style_icon1[4] = "w3-text-indigo";
				
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
								<div className={pColor} id={index} onClick={this.props.handleGameOpen}>
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
				
				let cond = true;
					
				cond = (this.props.f.so_luong == "" || this.props.f.so_luong == i.so_luong) && 
						(this.props.f.doi_hinh == "" || this.props.f.doi_hinh == i.doi_hinh) && 
						(	
							(this.props.f.child[0] == i.child[0] && this.props.f.child[0]==1) || 
							(this.props.f.child[1] == i.child[1] && this.props.f.child[1]==1) || 
							(this.props.f.child[2] == i.child[2] && this.props.f.child[2]==1)
						) &&
						(
							(this.props.f.ki_nang[0] == i.ki_nang[0] && this.props.f.ki_nang[0]==1) || 
							(this.props.f.ki_nang[1] == i.ki_nang[1] && this.props.f.ki_nang[1]==1) || 
							(this.props.f.ki_nang[2] == i.ki_nang[2] && this.props.f.ki_nang[2]==1) || 
							(this.props.f.ki_nang[3] == i.ki_nang[3] && this.props.f.ki_nang[3]==1) || 
							(this.props.f.ki_nang[4] == i.ki_nang[4] && this.props.f.ki_nang[4]==1)
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
			if (ind < this.props.limit){
				cols.push(
					<div className="w3-col m4 w3-margin-bottom">{i}</div>
				);
				
				if ((ind+1)%3 == 0 || (ind+1 == n)){
					games.push(
						<div className="w3-row-padding">{cols}</div>
					);
					cols = new Array();
				}
			}
		});
		
		return(
			games
		);
	}
}

export default GameList;