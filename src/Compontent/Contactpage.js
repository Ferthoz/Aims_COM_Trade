import "../Compontent/ContactStyle.css";
import React from 'react';
import Image from "../Assets/Contact1.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";
// import ReactDOM from 'react-dom';

const Contactpage = () => {
    return (
        <div className="Contact-container">
            <h1 className="title">PRATIMA GROUP OF COMPANIES</h1>
            <div className="address-cont">
                <div className="cont-left">
                    <p><strong className="topic">Regd. office :</strong> Sulekha Dutta Market, G.Floor, Bakrahat
                        (Beside of Khadims), 24 Pgs.(S), Pin-743377, W.B.</p>
                    <p>
                        <strong className="topic">Branch office :</strong> New Alipore, Kontai, Asansol, Dhanbad,
                        Durgapur, Burdhwan, Bankura,</p>
                    <div className="Browser-cont">
                        <div className="contact-sec">
                            <div className="address-icons">
                                <FiPhoneCall size={40} className="icon" style={{ color: "#fff" }} />
                                <p><Link to="/" className="link">www.aimscomtrade.co.in</Link></p>
                            </div>
                            <div className="address-icons">
                                <TbMessage size={40} className="icon" style={{ color: "#fff" }} />
                                <p><Link to="/" className="link">www.aimscomtrade.co.in</Link></p>
                            </div>
                        </div>
                        <div className="contact-sec">
                            <div className="address-icons">
                                <FiPhoneCall size={40} className="icon" style={{ color: "#fff" }} />
                                <p><Link to="/" className="link">87776 59439, 98312 82033</Link></p>
                            </div>
                            <div className="address-icons">
                                <FiPhoneCall size={40} className="icon" style={{ color: "#fff" }} />
                                <p><Link to="/" className="link">87770 13479, 98312 60696</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont-right">
                    <img src={Image} alt="img" />
                </div>
            </div>
            <div className="Map-container">
                <div className="Map-left">
                    <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Surekha Dutta Market,  &t=&z=6&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className="Map-right">
                    <HiOutlineLocationMarker size={40} className="icon" style={{ color: "#fff" }} />
                    <h6>PRATIMA GROUP OF COMPANIES</h6>
                    <p>Sulekha Dutta Market, <br />
                        G.Floor, Bakrahat (Beside of Khadims), <br />
                        24 Pgs.(S), Pin-743377, W.B.</p><br />
                    <h6>Contact Us </h6>
                    <form className="form-cont">
                        <label className="form">
                            <input type="text" name="name" placeholder="Enter Your Email" />
                        </label>
                        <input type="submit" value="Submit" className="sumbit" />
                    </form>
                </div>
            </div>

        </div>
    )
};

export default Contactpage;
