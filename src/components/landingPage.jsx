import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function landingPage() {
  return (
    <>
      <>
      <section className="navbar" style={{ color: "#fff" }}>
        <div className="nav-image">
        <img
            // style={{ position: "absolute", left: "8rem", top: "1rem" }}
            src="./images/Group 93.png"
          ></img>
        </div>
          <nav className="stroke">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Restaurant</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        <div>
          <div>
            <h1 className="heading1">
              Fastest, Simplest & <br></br>
            </h1>
            <h1 className="heading3">Hassel - Free</h1>
            <h1 className="heading2">Booking</h1>
            <button className="topButton">More than faster</button>
            <p className="para">
              Our job is to filling your tummy with delicious food<br></br> and
              with fast and free delivery
            </p>
          </div>
          <div className="body">
            <div className="fixed-img courasel">
              <img
                style={{
                  top: "13vh",
                  position: "absolute",
                  left: "55vw",
                  height: "15vh",
                  width: "7vw",
                }}
                src="/images/Frame 29.png"
              />
              <img
                style={{
                  position: "absolute",
                  left: "48.7vw",
                  top: "59vh",
                  height: "22vh",
                  width: "28vw",
                }}
                src="/images/Frame 6.png"
              />
              <img
                style={{
                  position: "absolute",
                  top: "67vh",
                  left: "75vw",
                  height: "23vh",
                  width: "23vw",
                }}
                src="/images/Frame 10.png"
              />
              <img
                style={{
                  position: "absolute",
                  left: "88vw",
                  top: "29vh",
                  height: "auto",
                  width: "auto",
                }}
                src="/images/Group 53.png"
              />
              <img
                style={{
                  position: "absolute",
                  top: "20vh",
                  left: "86vw",
                  height: "auto",
                  width: "auto",
                }}
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
                  src="/images/Illustration.png"
                />
              </div>
              <div>
                <img
                  style={{ height: "60%", width: "70%" }}
                  src="/images/varaint2.png"
                />
              </div>
              <div>
                <img
                  style={{ height: "60%", width: "70%" }}
                  src="/images/variant3.png"
                />
              </div>
            </Carousel>
          </div>
        
        </div>
      </>
      <div className="searchbar">
        <i className="uil uil-search"></i>
        <input className="search" type="text" placeholder="Search here..." />
        <button className="button">Search</button>
      </div>
    </>
  );
}

export default landingPage;
