import React from 'react';

function AddNew_Email(){
    return(
        <div className="w3-container">
            <br/><br/><br/><br/>
            <h1 className="w3-center">Đóng góp trò chơi</h1>
            <br/><br/>
            <div className="w3-content w3-padding-large w3-sand">
                Xin chào và cảm ơn bạn đã đến đây để đóng góp trò chơi. <br/>
                Đây là sân chơi mà tất cả chúng ta có thể cùng chia sẻ những trò chơi thú vị 
                để giúp các bạn đoàn sinh có những giờ sinh hoạt đầy vui tươi và bổ ích.<br/>
                <hr/>
                Để đóng góp trò chơi, xin vui lòng gửi những nội dung sau đến địa chỉ email &nbsp;
                <a href="mailto:sinhhoathuongdao@gmail.com">sinhhoathuongdao@gmail.com</a>: <br/><br/>
                <ul style={{listStyleType: "decimal"}}>
                    <li>Thể loại trò chơi (sinh hoạt/ kĩ năng)</li>
                    <li>Tên trò chơi</li>
                    <li>Kĩ năng rèn luyện<br/>
                        Trò chơi sinh hoạt: nhanh nhẹn, trí tuệ, dũng cảm, khéo léo, teamwork
                        <br/>Trò chơi kĩ năng: nút dây, cứu thương, phương hướng, cắm trại, truyền tin</li>
                    <li>Số lượng người chơi (dưới 10 người, từ 10 - 25 người, trên 25 người)</li>
                    <li>Đội hình (cá nhân, vòng tròn, chia nhóm, khác)</li>
                    <li>Mô tả trò chơi (vui lòng ghi rõ cách chơi và các vật dụng cần thiết)</li>
                    <li>Video minh họa (nếu có)</li>
                    <li>Hình ảnh minh họa (nếu có)</li>
                    <li>Độ tuổi (ấu, thiếu, kha)</li>
                    <li>Tên người đóng góp (không bắt buộc)</li>
                </ul>
                <br/>
                <i>Một lần nữa xin cảm ơn sự đóng góp của bạn để làm tăng thêm phần phong phú cho kho trò chơi!</i>
            </div>
            <br/><br/><br/><br/>
        </div>
    );
}

export default AddNew_Email;