import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Tag(props){

    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    useEffect(()=>{                 //If change matthu, then re-initialize
        setUserInput("");
        setResult(false);
        setShowHelp(false);
    }, [props.matthu]);

    useEffect(()=>{
        if (userInput == props.matthu.solution){
            setResult(true);
        }
        else{
            setResult(false);
        }
    }, [userInput]);

    let content;
    if (props.matthu.type == 'text'){
        content = 
        <div className="w3-margin w3-center ">
            <p className="w3-card w3-padding-large w3-pale-red">
                {props.matthu.content}
            </p>
        </div>
    }
    else if (props.matthu.type == 'table'){
        content = 
        <div className="w3-padding w3-margin" style={{width: "100%"}}>
            <table className="w3-pale-green" style={{border: "1px solid black", margin: "0 auto", maxWidth: "90%"}}>
                {props.matthu.content.map((row, row_id) =>{
                    return(
                        <tr style={{border: "1px solid black"}}>
                            {row.map((col, col_id) => {
                                return (
                                    <td className="w3-padding" style={{border: "1px solid black"}}>
                                        {col}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </table>
        </div>
    }
    else if (props.matthu.type == 'img'){
        let src = require("./pics/" + props.matthu.content);
        content = 
        <div className="w3-padding w3-margin w3-center">
            <img src={src} style={{maxWidth: "90%"}} />
        </div>
    }

    return(
        <div className="w3-container w3-padding-large w3-card-4 w3-white w3-animate-zoom" key={props.matthu.id}>
            <h2 className="w3-center">{props.matthu.title}</h2>
            <p className="w3-center"><i>{props.matthu.subtitle}</i></p>
            <br/><br/>
            {content}
            <br/>
            <div className="w3-center"><b>Khoá: </b> {props.matthu.key}</div>
            <br/>
            <div    className="w3-center w3-large w3-text-green animate__animated animate__tada" 
                    key={result}
                    style={(result?{display: "block"}:{visibility:"hidden"})}
            >
                Đúng rồi! Chúc mừng bạn
            </div>
            <input  className="w3-input w3-margin" 
                    placeholder="Điền đáp án của bạn vô đây" 
                    value={userInput} 
                    onChange={(e)=>{setUserInput(e.target.value)}}
            />
            <div className="w3-center"><b>Lưu ý: </b>{props.matthu.note}</div>
            <br/>
            <div className="w3-center">
                Bí quá thì bấm &nbsp;
                <span className="w3-text-red w3-xlarge" onClick={()=>{setShowHelp(!showHelp)}}>
                    <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                </span>
                <br/>
                <div    className="animate__animated animate__fadeIn" 
                        key={showHelp} style={(showHelp)?{display: "block"}:{visibility:"hidden"}}>
                    {props.matthu.help} 
                </div>
            </div>
            <br/>
        </div>
    );
}

export default Tag;