import './Mentors.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mentors = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const settings = {
        dots: true,       
        infinite: true,   
        speed: 500,       
        slidesToShow: 4, 
        slidesToScroll: 1 ,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
  return (
    <div className='MentorsMainDiv'>
      <div className="Mentor-wrapper">
        <h1 className="heading" data-aos="fade-up">Meet Our Mentors</h1>
        <p className="dscrption" data-aos="fade-up">Quisque nunc ipsum, pharetra sed quam ut, venenatis congue mi. Phasellus auctor suscipit augue in lobortis. In in imperdie. Quisque nunc ipsum, pharetra sed quam ut, venenatis congue mi. Phasellus auctor suscipit augue.</p>
        <div className="carousel-wrapper">
        <Slider {...settings}>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
                <div>
                   <div className="mentor-card-main">
                        <div className="image-position">
                        <div className="image"><img className='icon' src="/Images/icon1-in.png" alt="" /><img className='mntr-dp' src="/Images/Mentor 2.jpg" alt="" /></div>
                        <p className="position">Odoo Expert</p>
                        </div>
                       <div className="name">Alexander John</div>
                   </div>
                </div>
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Mentors
