import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Tools.scss';

const Tools = () => {
  const rightSliderRef = useRef(null);
  const leftSliderRef = useRef(null);

  const rightSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
         
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const leftSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,  // Disable default autoplay
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const nextSlideRight = () => {
    if (rightSliderRef.current) {
      rightSliderRef.current.slickNext();
    }
  };

  const prevSlideLeft = () => {
    if (leftSliderRef.current) {
      leftSliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (leftSliderRef.current) {
        leftSliderRef.current.slickPrev(); 
      }
    },2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Tools-main-body'>
      <div className="Tools-body">
        <div className="Tools-heading">
          <p>Tools Covered</p>
        </div>
        <div className="Toolss-img">
          <Slider ref={rightSliderRef} {...rightSliderSettings}>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                  <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Django</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>API</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Tornado</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Pyramid</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>CherryPy</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Pyramid</p>
                </div>
              </div>
            </div>
          </Slider>
          <div className="tools-img-arrow" onClick={nextSlideRight}>
            <img src="/Images/right-arrow-blue.png" alt="Next" />
          </div>
        </div>

        <div className="Tools-img2-div">
          <Slider ref={leftSliderRef} {...leftSliderSettings}>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Django</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>API</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Tornado</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Pyramid</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>CherryPy</p>
                </div>
              </div>
            </div>
            <div>
              <div className="tools-img tools-img-white">
                <div className="tools-image-sub">
                <img src="/Images/3-tornado.png" alt="Django" />
                </div>
                <div className="image-description">
                  <p>Pyramid</p>
                </div>
              </div>
            </div>
          </Slider>
          <div className="tools-img-arrow-prev" onClick={prevSlideLeft}>
            <img src="/Images/right-arrow-blue.png" alt="Previous" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
