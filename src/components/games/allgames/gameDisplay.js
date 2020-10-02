import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
		let youtube;
		
		if (this.props.data.video != null && this.props.data.video != "")
		{
			let youtube_link = "https://youtube.com/watch?v=" + this.props.data.video;
			let opts = {
				width: "100%",
			};
			youtube = 	<div className="w3-center">
							<YouTube videoId={this.props.data.video} opts={opts}/>
							<a href={youtube_link} target="_blank">Youtube</a>
						</div>;
		}
		
		let pics;
		// console.log(this.props.data.pics);
		if (Array.isArray(this.props.data.pics) && this.props.data.pics.length > 0 )
		{
			// console.log(this.props.data.pics);
			let images = new Array();
			this.props.data.pics.map((pic, id) => {
				images.push({
					original: pic,
					thumbnail: pic,
				});
			});
			
			pics = <ImageGallery items={images} />
		}
		
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
						
						<div className="font-comic w3-hide-small" style={{whiteSpace: "pre-wrap", maxHeight: "500px", overflowY: "auto"}}>
							{this.props.data.mo_ta}
							<br/>
							{pics}
							{youtube}
						</div>
						
						<div className="font-comic w3-hide-large w3-hide-medium" style={{whiteSpace: "pre-wrap", maxHeight: "350px", overflowY: "auto"}}>
							{this.props.data.mo_ta}
							{pics}
							{youtube}
						</div>
						<br/>
						
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