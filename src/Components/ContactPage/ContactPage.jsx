import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import MobileNav from '../MobileNav/MobileNav'; 
import './ContactPage.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
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
        <div className='ContactPageMainWrapper'>
      {windowWidth > 991 ? <Navbar /> : <MobileNav />}
            <div className="contact-hero">
                <h1 className="hero-heading" data-aos="fade-down">
                    Contact Us
                </h1>
                <p className='hero-para' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra dolor in eros ultrices scelerisque. Suspendisse sollicitudin, elit nec convallis viverra, justo velit porttitor diam, quis sollicitudin tortor tortor eget erat. Curabitur convallis purus et justo pharetra, non fringilla sem porttitor. Quisque in dignissim turpis.</p>
                <div className="container-fluid">
                    <div className="row contact-card-wrapper">
                        <div className="col-lg-4">
                            <div className="contact-card" data-aos="fade-up-right">
                                <div><img src="/Images/gif-location.gif" alt="" /></div>
                                <div><span>Kaloor, Ernakulam</span></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-card"  data-aos="fade-up">
                                <div><img src="/Images/gif-contact.gif" alt="" /></div>
                                <div><span>+91 1010101010</span></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-card"  data-aos="fade-up-left">
                                <div><img src="/Images/gif-email.gif" alt="" /></div>
                                <div><span>skillsbee@gmail.com</span></div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
            <div className="map-details-section-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 map-details-left">
                            <h3 data-aos="fade-up">LOCATION</h3>
                            <div className="map-container" data-aos="fade-right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.72086216102!2d76.22589090984948!3d9.971033573718168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716287039956!5m2!1sen!2sin" width="600" height="180" className='map'  allowfullscreen="" loading="lazy" ></iframe>
                            </div>
                            <div className="address-container" data-aos="fade-right">
                                <img src="/Images/BG New.jpg" alt="" />
                                <div className="contact-content">
                                    <h5>ADDRESS :</h5>
                                    <div><span>Ernakulam, Kerala</span></div>
                                    <div><span>Building Name</span></div>
                                    <div><span>Pin : 606060</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 map-details-right">
                            <h3 data-aos="fade-up">GET IN TOUCH</h3>
                            <div className="contact-card" data-aos="fade-left">
                                <h5>Please fill out the form below & Send !</h5>
                                <form action="">
                                    <div><input type="text" placeholder='Name*' /></div>
                                    <div><input type="email" placeholder='Email*' /></div>
                                    <div><textarea name="" id="" placeholder='Message*'></textarea></div>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage
