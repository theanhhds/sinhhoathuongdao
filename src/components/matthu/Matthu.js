import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Level from './Level';
import ScrollToTop from './scroll';

function Matthu(props){

    useEffect(()=>{
        document.title="Giải mật thư";
    }, []);

    return(
        <div className="w3-animate-opacity w3-container w3-display-container">
            <h1 className="w3-center w3-wide">Mật thư</h1>
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route path='/matthu' exact component={MainPage} />
                        <Route path='/matthu/:id' exact component={Level} />
                    </Switch>
                </ScrollToTop>
                <div className="w3-center w3-text-grey w3-opacity">
                    Liên hệ <i><a href="mailto:sinhhoathuongdao@gmail.com">sinhhoathuongdao@gmail.com</a></i> nếu mật thư có vấn đề
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Matthu;