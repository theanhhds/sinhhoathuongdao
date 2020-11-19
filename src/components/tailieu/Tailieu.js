import React, {useEffect} from 'react';
import ListTailieu from './ListTailieu';

function Tailieu(){

    useEffect(()=>{
        document.title = "Tài liệu sinh hoạt hướng đạo";
    }, []);

    return(
        <div className="w3-animate-opacity " style={{position: "relative"}}>
            <br/><br/><br/>
            <h1 className="w3-center">
                Tài liệu sinh hoạt hướng đạo
            </h1>
            <div className="w3-center w3-container">
                Dưới đây là những tài liệu được tổng hợp và chia sẻ một cách <b>phi lợi nhuận</b> từ nhiều nguồn khác nhau cho anh chị em dân tay trái. <br/>
                Nếu có vấn đề về tác quyền hoặc mong muốn đóng góp thêm tác phẩm, xin vui lòng liên hệ email <a href="mailto:sinhhoathuongdao@gmail.com">sinhhoathuongdao@gmail.com</a> 
            </div>
            <br/><br/><br/>
            <ListTailieu/>
            <br/><br/><br/>
            <br/><br/><br/>
        </div>
    );
}

export default Tailieu;