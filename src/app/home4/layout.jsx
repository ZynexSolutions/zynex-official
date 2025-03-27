import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import Header4 from '../Components/Header/HeaderStyle4';
import Footer4 from '../Components/Footer/Footer4';

const layout = ({ children }) => {
    return (
        <div className='main-page-area3'>
            <Header1></Header1>
            {children}
            <Footer1></Footer1>
        </div>
    );
};

export default layout;