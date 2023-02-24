import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "../Compontent/Herosection.css";
import HeroImg from "../Assets/land-home.svg";

const Herosection = () => {
  return (
    <div className='Main-section'>
      <div className='left'>
        <h1>PRATIMA GROUP OF COMPANIES</h1>
        <h3>Aims Comtrade</h3>
        <h4>Your Search For The Best<br /> Loans Ends Here</h4>
        <p>Your business is precious. It deserves the best business loan. Get hassle-free business financing online in just 3 simple steps.</p>
        <button className='btn-text'>Get Loan<FaArrowRight size={20} style={{ color: "#fff",marginleft:"10px" }} /></button>
      </div>

      <div className='Right'>
        <img src={HeroImg} alt="Img" />
      </div>

    </div>
  )
}

export default Herosection
