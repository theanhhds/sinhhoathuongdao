import React from "react";
import Sidebar from "react-sidebar";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class SidebarApp extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 

  //NOTE: IMPORTANT !!!! SET POSITION TO RELATIVE
  render() {

    let sidebar_content = 
            <div className="w3-green w3-container">
                <br/><br/>
                <h1 className="w3-center w3-padding-large">Scoutivity</h1>
                <br/><br/>
                <div><NavLink to='/'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Trang chủ</div></NavLink></div>
                <hr/><br/>
                <div><NavLink to='/history'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Lịch sử phong trào</div></NavLink></div>
                <div><NavLink to='/trochoi'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Trò chơi</div></NavLink></div>
                <div><NavLink to='/morse'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Luyện Morse</div></NavLink></div>
                <div><NavLink to='/semaphore'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Luyện Semaphore</div></NavLink></div>
                <div><NavLink to='/tailieu'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Tài liệu</div></NavLink></div>
            </div>

    return (
    <div>
      <Sidebar
        sidebar={sidebar_content}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#4CAF50", position: "fixed"}}}>

        <div className="w3-xlarge w3-green w3-card w3-top">
            <button className="w3-btn w3-xlarge" onClick={() => this.onSetSidebarOpen(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <span className="w3-wide"><NavLink to='/'><div className="w3-btn w3-padding-large" onClick={() => this.onSetSidebarOpen(false)}>Scoutivity</div></NavLink></span>
        </div>  
        
      </Sidebar>
      <br/><br/><br/>
      </div>
    );
  }
}
 
export default SidebarApp;