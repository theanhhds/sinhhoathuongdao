import React, {useState, useEffect} from 'react';
import Modal from 'react-awesome-modal';
import {stories} from './story.js';

function SMminute(){

    useEffect(()=>{
        document.title="Câu chuyện dưới cờ";
    }, []);

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    
    let openModal = (storyTitle, storyContent) => {
        setModalOpen(true);
        setModalTitle(storyTitle);
        setModalContent(storyContent);
    }

    let storiesElement = new Array()
    let cols = new Array(), item, n = stories.length;
    stories.forEach((item, ind) => {
        cols.push(
            <div    className="w3-col m6 w3-padding hvr-grow-shadow" 
                    onClick={(title, content)=>{openModal(item.title, item.content)}} >
                <div className="w3-light-gray w3-card-4 w3-padding">
                    <div className="">   
                        <h3 className="w3-center">{item.title}</h3>
                    </div>
                </div>
            </div>
        );

        if ((ind+1)%2 == 0 || (ind+1 == n)){
            storiesElement.push(
                <div className="w3-row-padding">{cols}</div>
            );
            cols = new Array();
        }
    });

    return(
        <div>
            <Modal visible={isModalOpen} onClickAway={()=>setModalOpen(false)} width="75%" height="70%">
                <div className="w3-padding-large" style={{whiteSpace: "pre-wrap", maxHeight: "90%", overflowY: "auto"}}>
                    <h2 className="w3-center">{modalTitle}</h2>
                    <br/>
                    <div className="w3-justify">{modalContent}</div>
                </div>
            </Modal>
            <br/>
            <h1 className='w3-center'>Câu chuyện dưới cờ</h1>
            <h3 className="w3-center">Scoutmaster minute</h3>
            <br/><br/>
            <div className="w3-content w3-center w3-padding-large">
                {storiesElement}
            </div>
        </div>
    );
}

export default SMminute;