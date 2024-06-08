
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import MobileNav from '../MobileNav/MobileNav'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Session.scss'

const Session = () => {
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
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className='session-main-body'>
   {windowWidth > 991 ? <Navbar /> : <MobileNav />}
        <div className="booking-body">

<div className="booking-heading">
  <h1 data-aos="fade-up">Book your seat now <span> And </span>build career 
with trending course </h1>
</div>
    <div className="container-fluid">
      <div className="row booking-row">
        <div className="col-lg-6 odo-section-column1" data-aos="fade-right" >
            <div className="odo-function-and-technics-section">
                 <p className='odo-function'>Odoo Functional</p>
                 <p className='technics'><span>and </span> Technical</p>
            </div>

            <div className="Learn-more-btn">
                  <a href="">Learn More</a>
            </div>
        </div>
        <div className="col-lg-6 " data-aos="fade-left">
             <div className="booking-card-section">
                <div className="card-information-heading-1">
                  <p>New Batch Start On</p>
                </div>
                <div className="card-date-section">
                  <p>June 01 2024</p>
                </div>

                <div className="card-information">
                  <p>OFFLINE BATCH - 3 MONTHS</p>
                </div>
             <div className="card-btns">
             <div className="apply-now-btn">
                     <a href="">Apply Now</a>
                </div>
                <div className="free-democlass-btn">
                      <a href=""> Free Demo Class</a>
                </div>
             </div>
             </div>
        </div>
      </div>

      <div className="row booking-row">
     
        <div className="col-lg-6 col-md-12 col-sm-12" id='odo-function-and-technics-section-1'data-aos="fade-right" >
             <div className="booking-card-section">
                <div className="card-information-heading-1">
                  <p>New Batch Start On</p>
                </div>
                <div className="card-date-section">
                  <p>June 01 2024</p>
                </div>

                <div className="card-information">
                  <p>OFFLINE BATCH - 3 MONTHS</p>
                </div>
             <div className="card-btns">
             <div className="apply-now-btn">
                     <a href="">Apply Now</a>
                </div>
                <div className="free-democlass-btn">
                      <a href=""> Free Demo Class</a>
                </div>
             </div>
             </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 odo-section-column1" id='odo-function-and-technics-section-2'data-aos="fade-left">
            <div className="odo-function-and-technics-section" >
                 <p className='odo-function' id='odo-span'>Online <span style={{color:"#EDA15A"}}>Marketplace</span></p>
                 <p className='technics'> Management</p>
            </div>

            <div className="Learn-more-btn">
                  <a href="">Learn More</a>
            </div>
        </div>
      </div>
    </div>
</div>


<div className="booking-form-body">
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 form-columns"data-aos="fade-right">
      <div className="booking-form">
                <div className="form-heading">
                    <h1>Booking Form</h1>
                </div>
                <div className="alert-form-messagge">
                    <p>Please fill out the form below to book your seat!</p>
                </div>


                <div className="form-content">
                    <form action="">
                        <div><input type="text" placeholder='Full Name*'/></div>
                        <div><input type="text" placeholder='Email*'/></div>
                        <div><input type="text" placeholder='Contact Number*'/></div>
                        <div><input type="text" placeholder='Place*'/></div>
                        <div className='selection'><input type="select" placeholder='Select Your Option*'/></div>
                    </form>

                    <div className="webinar-program">
                    <span>Demo Class Consultation Webinar Academy Programme</span>
                </div>

                <div className="form-btn">
                    <button>Submit</button>
                </div>
                </div>

             

              
                </div>
      </div>
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left">
          <div className="any-queries-card">
            <div className="any-queries-heading">
                <h1>Any Queries ?</h1>
            </div>

            <div className="any-queries-img">
                <img src="/Images/queries.jpg" alt="" />
            </div>

            <div className="any-queries-sub-heading">
                <h1>Our Team Will Help You</h1>
            </div>
            <div className="any-queries-contact-icon">
                <img src="/Images/footer-call-png 2.png" alt="" /><span>+91 1010101010</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Session
