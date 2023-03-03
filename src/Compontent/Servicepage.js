import "../Compontent/ServiceStyle.css";
import React from 'react';
import { FaBrush, FaCarSide, FaCity, FaUserCog, FaTshirt } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { TbCurrencyRupee, TbMessages } from "react-icons/tb";

const Service = () => {
    return (
        <div className="Service-Container">
            <h1>Our Service</h1>
            <div className="Cont-top">
                <h2>PRATIMA</h2>
                <div className="pratima-box">
                    <div className="Box1">
                        <FaBrush size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Brush Works & Co</Link></p>
                    </div>
                    <div className="Box1">
                        <FaUserCog size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Agency</Link></p>
                    </div>
                    <div className="Box1">
                        <FaCarSide size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Tour & Travels</Link></p>
                    </div>
                    <div className="Box1">
                        <FaCity size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Commercial</Link></p>
                    </div>
                </div>
            </div>
            <div className="Cont-down">
                <h2>AIMS</h2>
                <div className="Aims-box">
                    <div className="Box1">
                        <TbCurrencyRupee size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Comtrade</Link></p>
                    </div>
                    <div className="Box1">
                        <FaTshirt size={50} className="icon"style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Aims Garments</Link></p>
                    </div>
                    <div className="Box1">
                        <AiOutlineThunderbolt size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Electrical</Link></p>
                    </div>
                    <div className="Box1">
                        <MdCastForEducation size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Aims Education</Link></p>
                   </div>
                    <div className="Box1">
                        <TbMessages size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Communication</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service;

