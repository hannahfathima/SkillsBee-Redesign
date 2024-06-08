import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [zoomOut, setZoomOut] = useState(false); 
    const sliderRef = useRef(null); 

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (oldIndex, newIndex) => {
            setZoomOut(true); 
            setTimeout(() => {
                setZoomOut(false); 
            }, 1000); 
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    

    const contents = [
        {
            title: "Explore Our New Courses",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus pariatur ipsa recusandae rerum eum facere, iusto inventore libero culpa eveniet! Architecto quis, eum eaque esse consectetur ipsa fugiat magni odio."
        },
        {
            title: "Odoo",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus pariatur ipsa recusandae rerum eum facere, iusto inventore libero culpa eveniet! Architecto quis, eum eaque esse consectetur ipsa fugiat magni odio."
        },
        {
            title: "Online Market Place",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus pariatur ipsa recusandae rerum eum facere, iusto inventore libero culpa eveniet! Architecto quis, eum eaque esse consectetur ipsa fugiat magni odio."
        },
        {
            title: "Explore Our New Courses",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus pariatur ipsa recusandae rerum eum facere, iusto inventore libero culpa eveniet! Architecto quis, eum eaque esse consectetur ipsa fugiat magni odio."
        }
    ];

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className={`HeroMainDiv ${zoomOut ? 'zoom-out' : ''}`}>
            <div className="Hero-wrapper" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.644), rgba(0, 0, 0, 0.611)), url(/Images/Banner${currentSlide + 1}.jpg)`,
            }}></div>
              <div className="crsl-and-cntnt">
              <div>
                    <div className="content">
                        <h1 data-aos="fade-down">{contents[currentSlide].title}</h1>
                        <p data-aos="fade-up">{contents[currentSlide].description}</p>
                        <div className="arrows">
                            <FaChevronLeft className='arrow-icon' onClick={prevSlide} />
                            <FaChevronRight className='arrow-icon' onClick={nextSlide} />
                        </div>
                    </div>
                </div>
                <div className="carousel-thumbnail">
                    <Slider ref={sliderRef} {...settings}>
                        <div className='crsl-item'>
                            <div className="thumbnail"><img src="/Images/Banner1.jpg" alt="" /></div>
                        </div>
                        <div className='crsl-item'>
                            <div className="thumbnail"><img src="/Images/Banner2.jpg" alt="" /></div>
                        </div>
                        <div className='crsl-item'>
                            <div className="thumbnail"><img src="/Images/Banner3.jpg" alt="" /></div>
                        </div>
                        <div className='crsl-item'>
                            <div className="thumbnail"><img src="/Images/Banner4.jpg" alt="" /></div>
                        </div>
                    </Slider>
                </div>
            
              </div>
        </div>
    )
}

export default HeroSection;
