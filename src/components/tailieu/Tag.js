import React from 'react';

function Tag(props){
    let doc = props.doc;
    
    return(
        <div className="w3-light-gray w3-card-4 w3-padding">
            <div className="">   
                <h3 className="w3-center">{doc.title}</h3>
                <div className="w3-center"><i>{doc.tacgia}</i></div>
                
                <div className="w3-section w3-text-grey">{doc.tomtat}</div>

                <div className="w3-padding w3-center">
                    <a style={{textDecoration:"none"}} target="_blank" href={doc.link}>
                        <div className="w3-btn w3-green">Xem tài liệu</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Tag;