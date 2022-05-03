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
    const [modalEng, setModalEng] = useState("");
    
    let openModal = (storyTitle, storyContent, storyEng) => {
        setModalOpen(true);
        setModalTitle(storyTitle);
        setModalContent(storyContent);
        setModalEng(storyEng);
    }

    let storiesElement = new Array()
    let cols = new Array(), item, n = stories.length;
    stories.forEach((item, ind) => {
        cols.push(
            <div    className="w3-col m4 w3-padding hvr-shrink"
                    style={{cursor: "pointer"}}
                    onClick={()=>{openModal(item.title, item.content, item.eng)}} >
                <div className="w3-light-gray w3-card-4 w3-padding">
                    <div className="">   
                        <h4 className="w3-center font-palatino">{item.title}</h4>
                    </div>
                </div>
            </div>
        );

        if ((ind+1)%3 == 0 || (ind+1 == n)){
            storiesElement.push(
                <div className="w3-row-padding">{cols}</div>
            );
            cols = new Array();
        }
    });

    let randomize = () => {
        let number = Math.floor(Math.random() * stories.length);
        openModal(stories[number].title, stories[number].content, stories[number].eng);
    }

    return(
        <div className="w3-animate-opacity w3-container w3-display-container">
            <h1 className='w3-center'>Câu chuyện dưới cờ</h1>
            <h3 className="w3-center">Scoutmaster minute</h3>
            <h6 className="w3-center"><i>Bản dịch của Tráng Đoàn Tắc Khái dựa trên tài liệu <a href="https://filestore.scouting.org/filestore/pdf/smminute.pdf" target="_blank">Scoutmaster's Minute</a> của Hội Hướng đạo Mỹ</i></h6>
            <h6 className="w3-center" style={{color:"#a3a3a3"}}>Mọi ý kiến đóng góp xin gửi về <a href="mailto:sinhhoathuongdao@gmail.com">sinhhoathuongdao@gmail.com</a></h6>
            <br/><br/>
            <div className="w3-bar w3-center">
                <div className="w3-btn w3-green w3-large w3-padding w3-round-xlarge" onClick={()=>randomize()}>Kể tôi nghe!</div>
            </div>
            <br/><br/>
            <div className="w3-content w3-center w3-padding-large">
                {storiesElement}
            </div>
            <Modal visible={isModalOpen} onClickAway={()=>setModalOpen(false)} width="75%" height="80%">
                <div className="w3-padding-large" style={{whiteSpace: "pre-wrap", maxHeight: "90%", overflowY: "auto"}}>
                    <div className="w3-bar w3-center"><div className="w3-btn w3-circle w3-green" onClick={()=>randomize()}>»</div></div>
                    <h2 className="w3-center">{modalTitle}</h2>
                    <h6 className="w3-center">{modalEng}</h6>
                    <br/>
                    <div className="w3-justify font-comic" >{modalContent}</div>
                </div>
            </Modal>
        </div>
        
    );
}

export default SMminute;