import './ClientSection.scss'
import  { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ClientSection = () => {
    const sliderRef = useRef(null);
    const slideLeft = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      };
      const slideRight = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
        responsive: [
          {
            breakpoint: 1224, // Breakpoint for screens <= 1024px
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
          {
              breakpoint: 1024, // Breakpoint for screens <= 1024px
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768, // Breakpoint for screens <= 600px
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 576, // Breakpoint for screens <= 480px
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      };
  return (
    <div className='ClientSectionWrapper'>
     <div className="clientMain">
        <div className="left-arrow"><img src="/Images/right-arrow-blue.png" alt="" onClick={slideLeft} /></div>
        <div className="right-arrow"><img src="/Images/right-arrow-blue.png" alt="" onClick={slideRight}/></div>

     <Slider ref={sliderRef} {...settings}>
      <div>
       <div className="item-card">
        <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      <div>
       <div className="item-card">
       <img src="/Images/canva-logo.jpg" alt="" />
       </div>
      </div>
      
      {/* Add more slides as needed */}
    </Slider>
     </div>
    </div>
  )
}

export default ClientSection
