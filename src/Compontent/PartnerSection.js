import "../Compontent/PartnerStyle.css";
import React from 'react';
import Brand1 from "../Assets/Brand1.png";
import Brand2 from "../Assets/brand2.png";
import Brand3 from "../Assets/brand3.png";
import Brand4 from "../Assets/brand4.png";
import Brand5 from "../Assets/brand 5.png";
import Brand6 from "../Assets/brand6.png";
import Brand7 from "../Assets/brand7.png";
import Brand8 from "../Assets/brand8.png";
import Brand9 from "../Assets/brand9.png";
import Brand10 from "../Assets/brand10.png";
import Brand11 from "../Assets/brand11.png";
import Brand12 from "../Assets/brand12.png";
import Brand13 from "../Assets/brand13.png";
import Brand14 from "../Assets/brand14.png";
import Brand15 from "../Assets/brand15.png";
import Brand16 from "../Assets/brand16.png";
import Brand17 from "../Assets/brand17.png";
import Brand18 from "../Assets/brand18.png";

const PartnerSection = () => {
  return (
    <div className="Container">
      <h2>Our Lending Partners </h2>
      <div className="cont-top">
        <div className="brands">
          <img src={Brand1} alt="img1" className="img1" />
          <img src={Brand2} alt="img2" className="img1" />
          <img src={Brand3} alt="img3" className="img1" />
        </div>
        <div className="brands">
          <img src={Brand4} alt="img4" className="img1" />
          <img src={Brand5} alt="img5" className="img1" />
          <img src={Brand6} alt="img6" className="img1" />
        </div>
        <div className="brands1">
          <img src={Brand7} alt="img7" className="img1" />
          <img src={Brand8} alt="img8" className="img1" />
          <img src={Brand18} alt="img18" className="img3" />
        </div>
      </div>
      <div className="cont-down">
        <div className="brands">
          <img src={Brand9} alt="img9" className="img2" />
          <img src={Brand10} alt="img10" className="img2" />
          <img src={Brand11} alt="img11" className="img2" />
        </div>
        <div className="brands">
          <img src={Brand12} alt="img12" className="img2" />
          <img src={Brand13} alt="img13" className="img2" />
          <img src={Brand14} alt="img14" className="img2" />
        </div>
        <div className="brands">
          <img src={Brand15} alt="img15" className="img2" />
          <img src={Brand16} alt="img16" className="img2" />
          <img src={Brand17} alt="img17" className="img2" />
        </div>

      </div>

    </div>
  )
}

export default PartnerSection;