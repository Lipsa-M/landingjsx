import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Illustration from './images/Illustration.png'
import varaint2 from './images/varaint2.png'
import variant3 from './images/variant3.png'
import frame6 from '../assets/Frame6.png'
import frame10 from '../assets/Frame10.png'
import frame29 from '../assets/Frame29.png'
import group53 from '../assets/Group53.png'
import fire from '../assets/noto_fire.png'
import eclipes from '../assets/Ellipse16.jpg'
import rec8 from'../assets/Rectangle8.jpg'
import rec7 from '../assets/Rectangle7.jpg'
import Verticalcarousel from '../components/Verticalcarousel';

export default function LandingPage() {
  return (
    <section className='hero'>
        <section className='hero-left'>
            <span id='slogan'>More than faster</span>

            <div className='hero-content'>
                <p>
                <span>Fastest, Simplest & Hassel - Free</span>
                <span id='booking'><Verticalcarousel/></span>
                </p>
            </div>
            <span id='text1'>Our job is to filling your tummy with delicious food</span>
            <span id='text2'>and with fast and free delivery </span>
            <div className="search-bar">
        
        <div className="search-location">
        
        {/* <box-icon name='location-plus' ></box-icon> */}
        <span id='location'>Location</span>
          
        </div>
        <div className="search-divider"></div>
        <div className="search-restaurants">
          <span id="searchText">Search by restaurants and dishes</span>
          
        </div>
      </div>
            
        </section>
        <section className='hero-right'>
            <div>
                <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    stopOnHover={false}
                    showIndicators={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    className="slider"
                    >
                    <div>
                    <img
                        style={{ height: "60%", width: "70%" }}
                        src={Illustration}
                        alt=""
                        />
                    </div>
                    <div>
                    <img
                        style={{ height: "60%", width: "70%" }}
                        src={varaint2}
                        alt=""
                        />
                    </div>
                    <div>
                    <img
                        style={{ height: "60%", width: "70%" }}
                        src={variant3}
                        alt=""
                        />
                    </div>
                </Carousel>
            </div>
            <div className='images'>
                <img src={frame6} alt="" id='img1' />
                <img src={frame10} alt="" id='img2'/>
                <img src={frame29} alt="" id='img3'/>
                <img src={group53} alt="" id='img4'/>
                <img src={fire} alt="" id='img5'/>
                <img src={eclipes} alt="" id='img6'/>
                <img src={rec7} alt="" id='img7'/>
                <img src={rec8} alt="" id='img8'/>
                


            </div>
            
        </section>
        
    </section>
  )
}