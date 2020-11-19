import React from 'react';
import {NavLink} from 'react-router-dom';
import {list } from './matthuList';

function MainPage(props){
    return(
        <div className="w3-content w3-container w3-display-container w3-animate-opacity ">
            <div className="w3-center">
                <i>Cảm ơn Nai Thận Trọng đã soạn ra các mật thư này</i>
            </div>
            <br/><br/>
            <table className="w3-table w3-bordered">
                <tr><th>Màn</th><th>Tên màn</th><th></th></tr>
                {list.map((item, index)=>{
                    return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <NavLink to={"/matthu/" + item.id}>
                                <span className="w3-btn w3-green">Go!</span>
                            </NavLink>
                        </td>
                    </tr>);
                })}
            </table>
        </div>
    );
}

export default MainPage;