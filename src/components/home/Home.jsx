import React from "react";
import CreditCard from "./CreditCard.png";
import VisaCreditCard from './VisaCreditCard.png'
import Serpic1 from "./Serpic1.png";
import Pic2 from "./Pic2.png";
import Pic3 from "./Pic3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
export const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Banner">
        <div className="BannerContent">
          <h1 className="Header">Business Services</h1>
          <h1 className="Finance">Finance</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            adipisci aspernatur! Quas fugit consequuntur corporis molestias
            veritatis et culpa. Nesciunt aliquid optio quasi quibusdam placeat
            quidem fuga eveniet sapiente voluptates.
          </p>
          <a href="#" className="button1">
            Apply Now
          </a>
          <a href="#" className="button2">
            Know more
          </a>
        </div>
        <div className="Caraousal">
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={1500} showArrows={false} showStatus={false}>
            <div>
              <img src={CreditCard} alt="" />
            </div>
            <div>
              <img src={CreditCard} alt="" />
            </div>
            <div>
              <img src={CreditCard} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="Secondry">
        <div className="Names">
          <p>Visa</p>
          <p>Master Card</p>
          <p>American Express</p>
        </div>
        <h1>What We Do ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          adipisci aspernatur! Quas fugit consequuntur corporis molestias
          veritatis et culpa. Nesciunt aliquid optio quasi quibusdam placeat
          quidem fuga eveniet sapiente voluptates. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Soluta voluptatum perferendis autem
          ducimus aperiam impedit, corrupti optio eius ipsam tempore voluptate,
          esse quasi iusto sequi consequatur maxime numquam, recusandae
          corporis?
        </p>
        <div className="SecondryImages">
          <img src={Serpic1} alt="" />
          <img src={Pic2} alt="" />
          <img src={Pic3} alt="" />
        </div>
      </div>
    </div>
  );
};
