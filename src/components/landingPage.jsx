import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function landingPage() {
  return (
    <div>
      <div>
        <h1 className="heading1">
          Fastest, Simplest & <br></br>
        </h1>
        <h1 className="heading3">Hassel - Free</h1>
        <h1 className="heading2">Booking</h1>
        <button className="topButton">More than faster</button>
        <p className="para">
          Our job is to filling your tummy with delicious food<br></br> and with
          fast and free delivery
        </p>
      </div>
      <div className="body ">
        <div className="fixed-img">
        <img
          style={{ top: "4rem", position: "absolute", left: "47rem" }}
          src="/images/Frame 29.jpg"
        />
        <img
          style={{ position:"absolute", left: "46rem", top: "35rem" , height:"auto"}}
          src="/images/Frame 6.png"
        />
        <img
          style={{ position: "absolute", top: "35rem", left: "75rem" , height:"auto"}}
          src="/images/Frame 10.png"
        />
        <img
          style={{ position: "absolute", left: "90rem", top: "12rem", height:"auto" }}
          src="/images/Group 53.png"
        />
        <img
          style={{ position: "absolute", left: "88rem", top: "7rem" , height:"auto"}}
          src="/images/noto_fire.png"
        />

        </div>
        
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          stopOnHover={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          className="slider"
        >
          <div>
            <img
              style={{ height: "60%", width: "70%" }}
              src="/images/img1.jpg"
            />
          </div>
          <div>
            <img
              style={{ height: "60%", width: "70%" }}
              src="/images/img2.jpg"
            />
          </div>
          <div>
            <img
              style={{ height: "60%", width: "70%" }}
              src="/images/img3.jpg"
            />
          </div>
        </Carousel>
      </div>
      <img src="./images/Group 93.png"></img>
          </div>
  );
}
export default landingPage;
