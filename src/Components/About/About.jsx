import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MobileNav from '../MobileNav/MobileNav'; 

import './About.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount'



const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
   

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div className='AboutPageMainWrapper'>
           {windowWidth > 991 ? <Navbar /> : <MobileNav />}
            <ScrollToTopOnMount/>
            {/* ------------------------hero-------------------- */}
            <div className="container-fluid">
                <div className="row about-hero">
                    <div className="col-lg-6 hero-left" data-aos="fade-right">
                        <h1>Who We Are  ?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            <div style={{ marginTop: "20px" }}>
                                It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever. Lorem Ipsum has been the industrys standard dummy text ever.</div></p>
                    </div>
                    <div className="col-lg-6 hero-right" data-aos="fade-left">
                        <img src="/Images/Banner Pic About.png" alt="" />
                    </div>
                </div>
            </div>
            {/* ------------------------hero-------------------- */}
            {/* ------------------------course-section------------- */}
            <div className="course-section">
                <p className="course-heading" data-aos="fade-right">Our courses are designed to provide comprehensive learning experiences.</p>
                <div className="course-details-section odoo" data-aos="fade-up">
                    <h3>1 - Odoo Functional and Technical</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    <a href=""> <button>Learn More</button></a>
                </div>
                <div className="course-details-section marketplace" data-aos="fade-up">
                    <h3>1 - Odoo Functional and Technical</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    <a href=""> <button>Learn More</button></a>
                </div>
            </div>
            {/* ------------------------course-section------------- */}
            {/* --------------------------mission------------------- */}
            <div className="mission-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mission-left">
                            <img src="/Images/News 3.jpg" alt=""  data-aos="fade-right" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mission-right" data-aos="fade-left">
                            <h2>Our Mission</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>

                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------mission------------------- */}
            {/* ----------------------------vission-------------- */}
            <div className="vission-section">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 vission-left" data-aos="fade-right">
                            <h2>Our Vission</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 vission-right">
                            <img src="/Images/BG 32.jpg" alt=""  data-aos="fade-left" />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* ----------------------------vission-------------- */}
<Footer/>
        </div>
    )
}

export default About
