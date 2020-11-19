import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {list } from './matthuList';
import Tag from './Tag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function Level(props){

    let previousBtn, nextBtn;
    if (parseInt(props.match.params.id) == 0){
        previousBtn = <span>
            <button className="w3-margin w3-disabled w3-btn"><FontAwesomeIcon icon={faBackward} /></button>
        </span>
    }
    else{
        previousBtn = <NavLink to={'/matthu/'+(parseInt(props.match.params.id)-1)}>
                <span className="w3-margin w3-btn"><FontAwesomeIcon icon={faBackward} /></span>
            </NavLink>
    }

    if (parseInt(props.match.params.id) == (list.length-1)){
        nextBtn = <span>
            <button className="w3-margin w3-disabled w3-btn"><FontAwesomeIcon icon={faForward} /></button>
        </span>
    }
    else{
        nextBtn = <NavLink to={'/matthu/'+(parseInt(props.match.params.id)+1)}>
                <span className="w3-margin w3-btn"><FontAwesomeIcon icon={faForward} /></span>
            </NavLink>
    }

    return(
        <div className="w3-content w3-display-container  w3-container w3-animate-opacity ">
            <div className="w3-center">
                {previousBtn}
                <NavLink to='/matthu/'><span className="w3-xlarge w3-btn w3-text-green w3-margin">
                    <FontAwesomeIcon icon={faListAlt} size="lg" />
                </span></NavLink>
                {nextBtn}
            </div>
            <h2 className="w3-center">Màn {props.match.params.id}</h2>
            <br/>
            <br/>
            <Tag matthu={list[props.match.params.id]} />
            <br/>
            <br/>
            
        </div>
    );
}

export default Level;