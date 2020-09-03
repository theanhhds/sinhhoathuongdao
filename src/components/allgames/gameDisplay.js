import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


class gameDisplay extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
		
		this.modalRef = React.createRef();
		
		this.closeM = this.closeM.bind(this);
		this.closeX = this.closeX.bind(this);
	}
	
	closeM(ref, e){
		// console.log(ref.current, e.target);
		if (e.target == ref.current){
			this.modalRef.current.style.display = "none";
			this.props.close();	//return display as false
		}
	}
	
	closeX(){
		this.modalRef.current.style.display = "none";
		this.props.close();		//return display as false
	}
	
	render(){
		// console.log(this.props.data);
		let style = {display: (this.props.display)?"block":"none"};
		
		return (
		<div className="w3-modal" onClick={(e) => {this.closeM(this.modalRef, e)}} 
			ref={this.modalRef} style={style}>
			
			<div className="w3-modal-content w3-animate-zoom">
				<div className={this.props.data.bg}>
					<div className="w3-padding-large w3-card-4 w3-display-container">
						<div className="w3-display-topright w3-margin" style={{cursor:"pointer"}} 
							onClick={this.closeX}>
							
							<FontAwesomeIcon icon = {faWindowClose} size="lg"/>
						</div>
						<h2 className="w3-center w3-xlarge font-palatino">{this.props.data.ten}</h2>
						<div className="w3-row "><i>
							<div className="w3-center w3-col m4 w3-text-red">{this.props.data.so_luong}</div>
							<div className="w3-center w3-col m4 w3-text-red">{this.props.data.doi_hinh}</div>
							<div className="w3-center w3-col m4 w3-text-red">{this.props.data.child}</div></i>
						</div>
						<div className="w3-center"><i>{this.props.data.ki_nang}</i></div>
						<br/>
						<div className="font-comic" style={{whiteSpace: "pre-wrap", maxHeight: "250px", overflowY: "auto"}}>
							{this.props.data.mo_ta}
						</div>
						<br/>
						<div className="w3-center w3-text-grey"><i>-- by {this.props.data.dong_gop} --</i></div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default gameDisplay;