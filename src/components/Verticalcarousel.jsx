import React,{useEffect} from "react";
import { TimelineMax, Elastic } from "gsap";

export default function Verticalcarousel() {
    useEffect(() => {
        const vsOpts = {
          slides: document.querySelectorAll(".v-slide"),
          list: document.querySelector(".v-slides"),
          duration: 6,
          lineHeight: 50,
        };
    
        const vSlide = new TimelineMax({
          paused: true,
          repeat: -1,
        });
    
        vsOpts.slides.forEach((slide, i) => {
          vSlide.to(vsOpts.list, vsOpts.duration / vsOpts.slides.length, {
            y: i * -1 * vsOpts.lineHeight,
            ease: Elastic.easeOut.config(1, 0.4),
          });
        });
    
        vSlide.play();
      }, []);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="v-slider-frame col-sm-3 offset-sm-3">
            <ul class="v-slides">
              <li class="v-slide">Booking</li>
              <li class="v-slide">Dining</li>
              <li class="v-slide">Payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
