import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Stories.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

    const sliderRef = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 300, 
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
         
        ]
      };
    

      const handlePrevious = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
  return (
    <div className='stories-main-body'>
      <div className="stories-sub-body">

    <div className="storeis-main-heading" data-aos="fade-right">
        <h1>Our Students Share </h1>
    </div>
       <div className="carousel-video">
       <div className="quote-img">
        <img src="/Images/quote.png" alt="" />
       </div>
    
       <Slider ref={sliderRef} {...settings}>
      <div>
      <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="400" >
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-5.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
      </div>
      <div>
      <a href="">
      <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="1400" >
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-5.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
    </a>
      </div>
      <div>
      <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="2200" >
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-5.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
      </div>
     
    </Slider>

    <div className="quote-img2">
        <img src="/Images/quote.png" alt="" />
       </div>
        
        
        <div className="video-prev-icon" onClick={handlePrevious}>
            <img src="/Images/right-arrow-blue copy.png" alt="" />
        </div>
        <div className="video-next-icon"  onClick={handleNext}>
            <img src="/Images/right-arrow-blue copy.png" alt="" />
        </div>
        </div>
      
        <div className="storeis-main-heading2" data-aos="fade-left">
        <h1>“Their Stories”</h1>
    </div>
      
      </div>
    </div>
  )
}

export default Stories