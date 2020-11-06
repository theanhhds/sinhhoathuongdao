import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt, faCalendarAlt, faGlobeAmericas, faMarker } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Histroy(){
    useEffect(()=> {
        document.title = "Lịch sử phong trào hướng đạo";
    },[]);

    return(
        <div className="w3-content">
            <h1 className="w3-center">Lịch sử phong trào hướng đạo</h1>
            <h3 className="w3-center">trên thế giới và tại Việt Nam</h3>
            <br/><br/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(207, 151, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(207, 151, 99)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Đảo Brown Sea</h5>
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1-9/8/1907</h5>
                    <hr/>
                    <p> Baden Powell lần đầu dẫn các em trong độ tuổi ngành thiếu đi cắm trại trên đảo Brown Sea ở Anh</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 179, 60)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 179, 60)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1908</h5>
                    <hr/>
                    <p> BP cho xuất bản cuốn Scouting for Boys. Các thiếu đoàn đầu tiên được thành lập trên khắp thế giới</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 0, 102)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(255, 0, 102)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Anh Quốc </h5>
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1910</h5>
                    <hr/>
                    <p> Nữ hướng đạo được thành lập bởi bà Agnes Baden-Powell</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 140, 26)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(255, 140, 26)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 7/11/1916</h5>
                    <hr/>
                    <p> Ngành ấu chính thức được coi là một ngành của phong trào</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(255, 0, 0)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1918</h5>
                    <hr/>
                    <p> Ngành tráng được thành lập</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 153, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 153, 0)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1930</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Hà Nội</h5>
                    <hr/>
                    <p> Trưởng Trần Văn Khắc thành lập đoàn Lê Lợi - đơn vị hướng đạo đầu tiên tại Việt Nam</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(51, 102, 255)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(51, 102, 255)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1936 - 1937</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Tùng Nguyên - Bạch Mã</h5>
                    <hr/>
                    <p> Thiết lập trại trường Tùng Nguyên (1936) và trại trường Bạch Mã (1937)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(179, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(179, 0, 0)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1946</h5>
                    <hr/>
                    <p> Ngành kha được thành lập tại nhiều quốc gia trên thế giới</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(230, 0, 230)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(230, 0, 230)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1946</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Việt Nam</h5>
                    <hr/>
                    <p> Hội hướng đạo Việt Nam ngưng hoạt động lần thứ nhất do chiến tranh</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(51, 102, 255)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(51, 102, 255)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1950</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Việt Nam</h5>
                    <hr/>
                    <p> Nỗ lực phục hồi phong trào hướng đạo tại Việt Nam</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 153, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 153, 51)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 7/5/1957</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Việt Nam</h5>
                    <hr/>
                    <p> Hội hướng đạo Việt Nam được thế giới công nhận là hội viên chính thức</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(230, 0, 230)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(230, 0, 230)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1975</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Việt Nam</h5>
                    <hr/>
                    <p> Hội hướng đạo Việt Nam ngưng sinh hoạt lần thứ hai</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 102, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(255, 102, 0)' }}
                    dateClassName="w3-text-black"
                    iconClassName="w3-large"
                    iconStyle={{ background: 'rgb(255, 77, 77)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} size="lg"/>}
                >
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/> 1993 - nay</h5>
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}/> Sài Gòn</h5>
                    <hr/>
                    <p> Các đơn vị hướng đạo hồi sinh tại Sài Gòn và phát triển cho đến nay</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <br/><br/><br/>
        </div>
    );
}

export default Histroy;