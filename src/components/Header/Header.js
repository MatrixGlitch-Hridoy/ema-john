import React from 'react';
import logo from '../../images/logo.png'
import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-12 text-center">
                        <img src={logo} alt="" className="w-25"/>
                    </div>
                </div>
            </div>
            <Nav></Nav> 
        </>
    );
};

export default Header;