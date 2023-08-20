import React from "react";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
           
           <h3>Knowledge Cafe</h3>
            <div className="header-container">
                <a href="/book">Book</a>
                <a href="/story">Story</a>
                <a href="/nobel">Nobel</a>
                <a href="/login">Login</a>
            </div>
        </nav>
            <hr></hr>
        </div>
    );
};

export default Header;