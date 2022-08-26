import React, {useState, useEffect} from 'react';
import FlagDisplay from './FlagDisplay';

import randomWords from 'random-words';
import stringSimilarity from 'string-similarity';
import ProgressBar from '@ramonak/react-progress-bar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faRandom } from '@fortawesome/free-solid-svg-icons';

function Semaphore(){

    let [mess, setMess] = useState("hello");
    let [indexChar, setIndexChar] = useState(0);
    let [character, setCharacter] = useState(" ");
    let [intv, setIntv] = useState(1000);
    let [userInput, setUserInput] = useState("");
    let [randomMessClass, setRandomMessClass] = useState("animate__animated animate__fadeOut");
    let [playBtnClass, setPlayBtnClass] = useState("w3-text-green w3-jumbo w3-margin");
    let [playBtnAvailable, setPlayBtnAvailable] = useState(true);
    let [randomBtnClass, setRandomBtnClass] = useState("w3-text-blue w3-jumbo w3-margin");
    let [resultBtnValue, setResultBtnValue] = useState("Xem đáp án");
    let [resultDisplay, setResultDisplay] = useState(" ");

    let similarity = stringSimilarity.compareTwoStrings(mess, userInput);	
    let bar_color;
		similarity = (similarity*100).toFixed(0);
		if (similarity < 30)
			bar_color = "#ff3300";
		else if (similarity >= 30 && similarity < 60)
			bar_color = "#cc66ff";
		else if (similarity >= 60 && similarity < 90)
			bar_color = "#0099ff";
		else bar_color = "#33cc33";

    useEffect(()=>{
        document.title = "Semaphore Challenge";
    }, []);

    useEffect(()=>{
        similarity = stringSimilarity.compareTwoStrings(mess, userInput);
    }, [userInput]);
    
    useEffect(()=>{
        if (playBtnAvailable){
            setPlayBtnClass("w3-text-green w3-jumbo w3-margin");
            setRandomBtnClass("w3-text-blue w3-jumbo w3-margin")
        }
        else{
            setPlayBtnClass("w3-text-green w3-jumbo w3-margin w3-disabled");
            setRandomBtnClass("w3-text-blue w3-jumbo w3-margin w3-disabled");
        }
    }, [playBtnAvailable]);

    useEffect(()=>{
        setRandomMessClass("animate__animated animate__fadeIn");
        setTimeout(()=>{
            setRandomMessClass("animate__animated animate__fadeOut");
        },1000);
    }, [mess])

    const randomMess = () => {
        if (playBtnAvailable){
            let rW = randomWords({min: 3, max: 5, join:' '});
            setMess(rW);
            setResultBtnValue("Xem đáp án");
            setResultDisplay(" ");
        }
    }

    const play = ()=>{
        if (playBtnAvailable){
            setPlayBtnAvailable(false);
            let i = 0;
            let id = setInterval(()=> {
                setCharacter(mess.charAt(i));
                setIndexChar(i);
                i++;
                if (i>mess.length){
                    setPlayBtnAvailable(true);
                    setCharacter(' ');
                    clearInterval(id);
                }
            }, intv);
        }
    }

    const toggleResult = () =>{
        // console.log(mess);
        if (resultBtnValue == "Xem đáp án"){
            setResultBtnValue("Ẩn đáp án");
            setResultDisplay(mess);
        }
        else{
            setResultBtnValue("Xem đáp án");
            setResultDisplay(" ");
        }
    }

    return(
        <div className="w3-display-container w3-container w3-animate-opacity ">
            <div className="w3-container w3-white w3-content">
                <br/><br/>
                <h1 className="w3-center">Semaphore Challenge</h1>
                <div className="w3-center font-comic">
                    <p>Tại đây bạn có thể tập dịch bản tin truyền bằng <a href="https://vi.wikipedia.org/wiki/Semaphore" target="_blank">semaphore</a></p>
                    <p>Bản tin sẽ là những từ ngẫu nhiên trong tiếng anh</p>
                </div>
                <br/><br/>
                <div className="" style={{}}>
                    <FlagDisplay character={character} index={indexChar}/>
                </div>
                <div className="w3-center w3-content">
                    <span className={playBtnClass} onClick={()=>{play()}}>
                        <FontAwesomeIcon icon={faPlayCircle} size="lg" style={{"cursor":"pointer"}}/>
                    </span>
                    <span className={randomBtnClass} onClick={()=>{randomMess()}}>
                        <FontAwesomeIcon icon={faRandom} size="lg" style={{"cursor":"pointer"}}/>
                    </span>
                    <div className="w3-center">
                        <div className={randomMessClass}>Đã tạo bản tin mới</div>
                    </div>
                    <br/>
                    <b>Tốc độ:</b> <select style={{"width":"60%"}} className="w3-select" value={intv} onChange={(e)=>{setIntv(e.target.value)}}>
                        <option value={700}>Nhanh (85 kí tự/ phút)</option>
                        <option value={1000}>Trung bình (60 kí tự/ phút)</option>
                        <option value={1500}>Chậm (40 kí tự/ phút)</option>
                    </select>
                    <br/><br/><br/>
                    <input
						placeholder = "Điền đáp án của bạn vào đây"
						className="w3-input"
						type="text"
						value={userInput}
						onChange = {(e)=>{setUserInput(e.target.value)}}
					/>
                    <br/>
                    <div className>
                        <ProgressBar completed={similarity} bgcolor={bar_color} height="40px" width="100%"/>
                    </div>
                </div>
            <br/><br/>
            <div className="w3-container w3-center">
                <div className="w3-btn w3-white w3-text-light-grey" onClick={()=>{toggleResult()}}>{resultBtnValue}</div>
                <br/><br/>
                <input className="w3-input w3-center w3-border-0" disabled="disabled" value={resultDisplay} placeholder="Đáp án..."></input>
            </div>
            <br/><br/>
            </div>
            <br/><br/><br/><br/>
        </div>
    );
}

export default Semaphore;