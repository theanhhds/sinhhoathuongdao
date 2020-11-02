import React, {useEffect} from 'react';
import Tag from './Tag';
import * as list from './list';


function List(){
    let doc_dangthu = new Array(), doc_nghetruong  = new Array(), doc_sinhhoat  = new Array();

    let cols = new Array(), item, n = list.dangthu.length;
    list.dangthu.forEach((item, ind) => {
        cols.push(
            <div className="w3-col m4 w3-padding"><Tag doc={item}/></div>
        );

        if ((ind+1)%3 == 0 || (ind+1 == n)){
            doc_dangthu.push(
                <div className="w3-row-padding">{cols}</div>
            );
            cols = new Array();
        }
    });

    cols = new Array();
    n = list.sinhhoat.length;
    list.sinhhoat.forEach((item, ind) => {
        cols.push(
            <div className="w3-col m4 w3-padding"><Tag doc={item}/></div>
        );

        if ((ind+1)%3 == 0 || (ind+1 == n)){
            doc_sinhhoat.push(
                <div className="w3-row-padding">{cols}</div>
            );
            cols = new Array();
        }
    });

    cols = new Array();
    n = list.sinhhoat.length;
    list.nghetruong.forEach((item, ind) => {
        cols.push(
            <div className="w3-col m4 w3-padding"><Tag doc={item}/></div>
        );

        if ((ind+1)%3 == 0 || (ind+1 == n)){
            doc_nghetruong.push(
                <div className="w3-row-padding">{cols}</div>
            );
            cols = new Array();
        }
    });

    // doc_sinhhoat = list.sinhhoat.map((item, index) => {
    //     return (
    //         <div className="w3-col m4 w3-padding">
    //             <Tag doc={item}/>
    //         </div>
    //     ); 
    // });

    // doc_nghetruong = list.nghetruong.map((item, index) => {
    //     return (
    //         <div className="w3-col m4 w3-padding">
    //             <Tag doc={item}/>
    //         </div>
    //     ); 
    // });

    return (
        <div className="w3-content w3-padding-large">
            <div className="w3-pale-green w3-card w3-container">
                <div className="w3-container">
                    <h2 className="w3-center">Đẳng thứ ngành thiếu</h2>
                    {doc_dangthu}
                </div>
                <hr/><br/><br/><br/>
                <div className="w3-container">
                    <h2 className="w3-center">Sinh hoạt hướng đạo</h2>
                    {doc_sinhhoat}
                </div>
                <hr/><br/><br/><br/>
                <div className="w3-container">
                    <h2 className="w3-center">Ngành tráng và nghề trưởng</h2>
                    {doc_nghetruong}
                </div>
                <br/><br/><br/>
            </div>
        </div>
    );
}


export default List;