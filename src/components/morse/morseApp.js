import React from 'react';
import { withRouter } from 'react-router-dom';
import morsify from 'morsify';
import randomWords from 'random-words';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faRandom, faArrowAltCircleDown, faArrowAltCircleUp, faHome } 
		from '@fortawesome/free-solid-svg-icons';
import stringSimilarity from 'string-similarity';
import ProgressBar from '@ramonak/react-progress-bar';

class MorseApp extends React.Component{
	constructor(){
		super();
		this.state = {
			user_input : "hello",
			user_output: ".... . .-.. .-.. ---",
			user_result: "",
			user_speed : "0.1",
			user_pitch : "700",
			user_type : "sine",
			show_result : false,
			morseHandler : "",
			playButtonDisabled : false,
			showRandomMess : false,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOutputChange = this.handleOutputChange.bind(this);
		this.playMorse = this.playMorse.bind(this);
		this.stopMorse = this.stopMorse.bind(this);
		this.randomWords = this.randomWords.bind(this);
		this.handleToggleCheck = this.handleToggleCheck.bind(this);
	}
	
	componentDidMount(){
		document.title = "Morse Challenge"
	}
	
	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({[name]: value});
	}
	
	handleInputChange(e){
		let name = e.target.name;
		let value = e.target.value;
		let encoded = morsify.encode(value);
		this.setState({[name]: value, user_output: encoded});
	}
	
	handleOutputChange(e){
		let name = e.target.name;
		let value = e.target.value;
		let decoded = morsify.decode(value);
		this.setState({[name]: value, user_input: decoded.toLowerCase()});
	}
	
	playMorse(){
		this.setState({playButtonDisabled: true});	//Change play/ pause btn
		
		let words = this.state.user_input;
		let option = {
			unit: this.state.user_speed,
			oscillator: {
				type: this.state.user_type,
				frequency: this.state.user_pitch,
				onended: () => {this.setState({playButtonDisabled: false})}
			},
		};
		
		let init = () => {
			let handler = morsify.audio(words, option);
			this.setState({morseHandler: handler});
			handler.play();
		}
		setTimeout(()=>{init()}, 1000);
	}
	
	stopMorse(){
		if (this.state.morseHandler)
		{
			this.state.morseHandler.stop();
			this.setState({morseHandler: "", playButtonDisabled: false});
		}
	}
	
	randomWords(){
		let rW = randomWords({min: 3, max: 5, join:' '});
		this.setState({user_input: rW, user_output: morsify.encode(rW), user_result: "", showRandomMess: true});
		setTimeout(()=>{this.setState({showRandomMess: false})}, 1500);
	}
	
	handleToggleCheck(event){
		this.setState({"show_result": !this.state.show_result});
	}
	
	render(){
		let similarity = stringSimilarity.compareTwoStrings(this.state.user_input, this.state.user_result);
		let bar_color;
		similarity = (similarity*100).toFixed(2);
		if (similarity < 30)
			bar_color = "#ff3300";
		else if (similarity >= 30 && similarity < 60)
			bar_color = "#cc66ff";
		else if (similarity >= 60 && similarity < 90)
			bar_color = "#0099ff";
		else bar_color = "#33cc33";
		
		
		// play button
		let play_pause_btn;
		let randomDisabledStyle, randomDisabledClass;
		if (this.state.playButtonDisabled) {
			play_pause_btn = 
				<div className="w3-jumbo w3-text-red w3-center">
					<FontAwesomeIcon 	icon={faPauseCircle} 
										className="w3-hover-opacity"
										size="lg" 
										style={{cursor: "pointer"}} 
										onClick={this.stopMorse}
					/>
				</div>;
				
			randomDisabledStyle = {pointerEvents: "none", cursor: "noDrop"};
			randomDisabledClass = "w3-xlarge w3-hover-opacity w3-disabled";
		}
		else {
			play_pause_btn = 
				<div className="w3-jumbo w3-text-green w3-center">
					<FontAwesomeIcon 	icon={faPlayCircle} 
										className="w3-hover-opacity"
										size="lg"
										style={{cursor: "pointer"}} 
										onClick={this.playMorse}
					/>
				</div>;
				
			randomDisabledClass = "w3-xlarge w3-text-blue w3-hover-opacity";
			randomDisabledStyle = {cursor: "pointer"};
		}
			
		//show results
		let inputValue1 = "", inputValue2 = "";
		let open_btn;
		let result_input, classI;
		if (this.state.show_result){
			open_btn = <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={this.handleToggleCheck}/>;
			classI = "animate__animated animate__fadeIn";
			
		}
		else{
			open_btn = <FontAwesomeIcon icon={faArrowAltCircleDown} onClick={this.handleToggleCheck}/>;
			classI = "animate__animated animate__fadeOut";
		}
		
		result_input = 
				<div className={classI}>
					<p>	Bạn có thể chỉnh sửa đoạn văn hoặc mã morse và bấm play để phát. <br/>
						Bấm vào nút mũi tên bên cạnh để ẩn bản tin
					</p>
					<input 
						className="w3-input"
						type="text" 
						value={this.state.user_input} 
						name="user_input" 
						onChange={this.handleInputChange} 
					/>
					<br/>
					<input 
						className="w3-input" 
						type="text"  
						value={this.state.user_output}
						name="user_output" 
						onChange={this.handleOutputChange} 
					/>
				</div>;
		
		//random btn
		let random_mess;
		if (this.state.showRandomMess)
			random_mess = <span className="w3-margin animate__animated animate__rotateIn">Đã tạo bản tin mới</span>;
		else
			random_mess = <span className="w3-margin animate__animated animate__rotateOut">Đã tạo bản tin mới</span>;
		
		return(
		<div className="" style={{position: "relative"}}>			
			<div className="w3-content font-comic w3-padding-large w3-container">
				<div className="w3-container w3-large  w3-white  w3-card">
					<br/>
					<h1 className="w3-center w3-wide">Morse Challenge</h1>
					<br/><br/>
					{play_pause_btn}
					<br/>
					
					<br/>
					
					<input
						placeholder = "Điền đáp án của bạn vào đây"
						className="w3-input"
						type="text"
						value={this.state.user_result}
						name="user_result"
						onChange = {this.handleChange}
					/>
					<br/>

					<ProgressBar completed={similarity} bgcolor={bar_color} height="40px"/>
					
					<br/>
					<div className="w3-center w3-xxlarge">
						<span className={randomDisabledClass} onClick={this.randomWords} style={randomDisabledStyle}>
							<FontAwesomeIcon icon={faRandom} size="lg" />
						</span>
						<br/>
						<span className="w3-large">{random_mess}</span>
					</div>
					
					<br/>
					<p>
						<b>Lưu ý:</b> Chỉnh volume bằng máy của bạn. Bản tin sẽ là những từ ngẫu nhiên trong tiếng anh
					</p>		
					<br/>
					<div className="w3-row-padding w3-stretch">
						<div className="w3-col s4">
							<b>Tốc độ</b>
							<select 
								className="w3-select"
								type="select"
								onChange={this.handleChange}
								value={this.state.user_speed}
								name = "user_speed"
							>
								<option value="0" disabled>Chọn tốc độ</option>
								<option value="0.2">Tân sinh</option>
								<option value="0.1">Hạng nhì</option>
								<option value="0.08">Hạng nhất</option>
							</select>
						</div>
						
						<div className="w3-col s4">
							<b>Cao độ</b>
							<select 
								className="w3-select"
								type="select"
								onChange={this.handleChange}
								value={this.state.user_pitch}
								name = "user_pitch"
							>
								<option value="0" disabled>Chọn cao độ</option>
								<option value="400">Thấp</option>
								<option value="700">Trung bình</option>
								<option value="1000">Cao</option>
							</select>
						</div>
						
						<div className="w3-col s4">
							<b>Âm thanh</b>
							<select 
								className="w3-select"
								type="select"
								onChange={this.handleChange}
								value={this.state.user_type}
								name = "user_type"
							>
								<option value="0" disabled>Chọn loại âm</option>
								<option value="sine">Sinewave</option>
								<option value="triangle">Triangle</option>
								<option value="square">Square</option>
								<option value="sawtooth">Sawtooth</option>
							</select>
						</div>
					</div>
					
					<br/>
					
					<span className="w3-xxlarge w3-right w3-text-red" style={{cursor: "pointer"}}>
						{open_btn}
					</span>
					
					<br/>
					<br/>
					{result_input}
					<br/>
					
					
				</div>
			</div>
			<br/><br/><br/><br/><br/><br/>
		</div>	
		);
	}
}

export default withRouter(MorseApp);