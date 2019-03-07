import React from "react";

import Equipe from "../../assets/images/equipe.jpg";

import "./CarouselADM.scss";

const carouselADM = () => (
  <div className="carouselADM">
    <div className="carouselADM__slides">
      <div className="carouselADM__slide">
        <img src={Equipe} alt="Equipe" />
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
      </div>

      <div className="carouselADM__controuls-btn">&#10094;</div>
      <div className="carouselADM__controuls-btn carouselADM__controuls-btn--next">
        &#10095;
      </div>
    </div>
    <ul>
      <li />
      <li />
      <li />
    </ul>
  </div>
);

export default carouselADM;
