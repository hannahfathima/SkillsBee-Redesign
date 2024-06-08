import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Library.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 

const Library = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="custom-dot">
        <div className="line"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };



  return (
    <div className='library-main-body'>
      <div className="stories-sub-body">
        <div className="storeis-main-heading"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          <h1>Video Library</h1>
        </div>
        <div className="carousel-video">
    
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
                    <img src="Images/play.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="1000">
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-4.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="1400">
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-3.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
        <div>
              <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="2000">
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-3.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="">
                <div className="video-card" data-aos="fade-up"  data-aos-duration="1900">
                  <div className="skillsbee-logo">
                    <img src="/Images/skillsbee-logo-name.png" alt="" />
                  </div>
                  <div className="video-card-background">
                    <img src="/Images/vid-3.jpg" alt="" />
                  </div>
                  <div className="video-card-icon">
                    <img src="/Images/play.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </Slider>
     
        </div>
      </div>
    </div>
  );
}

export default Library;
