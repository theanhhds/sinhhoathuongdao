import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faBaby, faChild, faMale } from '@fortawesome/free-solid-svg-icons';

class Filter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name_kinang: [["#Nhanh", "#Teamwork" ,"#Trí" ,"#Dũng", "#Khéo"], ["#Nút", "#Truyền", "#Cứu", "#Hướng", "#Trại"]],
		};
	}
	
	render(){
		let check = ["w3-large w3-text-grey w3-margin w3-opacity", "w3-large w3-text-grey w3-margin w3-opacity", "w3-large w3-text-grey w3-margin w3-opacity"];
		if (this.props.child[0] == 1) 
			check[0] = "w3-large w3-text-amber w3-margin";
		if (this.props.child[1] == 1) 
			check[1] = "w3-large w3-text-green w3-margin";
		if (this.props.child[2] == 1) 
			check[2] = "w3-large w3-text-red w3-margin";
		
		let check1 = ["w3-text-grey w3-opacity", "w3-text-grey w3-opacity", "w3-text-grey w3-opacity", "w3-text-grey w3-opacity", "w3-text-grey w3-opacity"];
		if (this.props.ki_nang[0] == 1) 
			check1[0] = "w3-text-green bold";
		if (this.props.ki_nang[1] == 1) 
			check1[1] = "w3-text-purple bold";
		if (this.props.ki_nang[2] == 1) 
			check1[2] = "w3-text-orange bold";
		if (this.props.ki_nang[3] == 1) 
			check1[3] = "w3-text-blue bold";
		if (this.props.ki_nang[4] == 1) 
			check1[4] = "w3-text-indigo bold";
		
		return(
			<div>
				<div className="w3-card w3-padding-large w3-round-xlarge w3-margin-bottom w3-display-container w3-animate-opacity">
					<div className=" w3-right" onClick={this.props.refreshFilter} style={{cursor: "pointer"}}>
						<FontAwesomeIcon icon={faSync} color="green"/>
					</div>
					<div className="w3-center w3-text-grey">{this.state.trochoi}</div>
					<br/>
					
					<div className="w3-row-padding w3-stretch">
						<div className="w3-col s6">
							<select className="w3-select" name="f_soluong" value={this.props.so_luong} 
								onChange={this.props.handleChange}>
								<option value="0" disabled selected>Số lượng</option>
								<option value="A">-- Tất cả --</option>
								<option value="1">1-10 người</option>
								<option value="2">10-25 người</option>
								<option value="3">Trên 25 người</option>
							</select>
						</div>
						<div className="w3-col s6">	
							<select className="w3-select" name="f_doihinh" value={this.props.doi_hinh} 
								onChange={this.props.handleChange}>
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
						<div className="w3-center">
							<span className={check[0]} title="Ngành ấu" 
								onClick={() => {this.props.handleCheck(0)}} style={{cursor: "pointer"}}>
								<FontAwesomeIcon size="lg" icon={faBaby} />
							</span>
							<span className={check[1]} title="Ngành thiếu" 
								onClick={() => {this.props.handleCheck(1)}} style={{cursor: "pointer"}}>
								<FontAwesomeIcon  size="lg" icon={faChild} />
							</span>
							<span className={check[2]} title="Ngành kha" 
								onClick={() => {this.props.handleCheck(2)}} style={{cursor: "pointer"}}>
								<FontAwesomeIcon size="lg" icon={faMale} />
							</span>
						</div>
					</div>
					
					<div className="w3-margin-top">
						<div className="w3-center">
						{
							this.state.name_kinang[this.props.the_loai-1].map((i, stt) => {
								return (
									<span className={check1[stt]} 
										onClick={() => {this.props.handleCheck1(stt)}} style={{cursor: "pointer"}}>
										<span className="w3-center">{i} &nbsp;</span>
									</span>
								);
							})
						}
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Filter;