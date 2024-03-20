import React from 'react';
import '../../assets/css/main.css';
import Navigation from './Navigation';

function Header() {
                
    return (
        <>
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
        
                <div className="logo">
                    <h1><a href="/">Imarika</a></h1>
                {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                </div>
        
                <Navigation />
        
            </div>
        </header>
        </>
    );
}

export default Header;