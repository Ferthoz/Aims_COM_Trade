import React from 'react';
import "../Compontent/Navbarstyle.css";
import Logo from '../Assets/Aims-logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { handleClick } from "react-router-dom";


    const Navbar = () => {
        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
        const [color, setColor] = useState(false);
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        window.addEventListener("scrollY", changeColor);
        return (
            <div className='Header'>
                <div className='Aims-logo'>
                    <img src={Logo} alt="Aims-comtrade" />
                </div>
                <div className='Menu'>
                    <ul className={click ? "Menu-list active" : "Menu-list"}>
                        <li>
                            <Link to="/" className='Home'>Home</Link>
                        </li>
                        <li>
                            <Link to="/Service" className='Home'>Service</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className='Home'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#fff" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "#fff" }} />)}


                </div>
            </div>
        )
    }

    export default Navbar
