import React, { useEffect } from 'react';
import './Booking.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Booking = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className='booking-main-body'>
      <div className="booking-body">

        <div className="booking-heading">
          <h1 data-aos="fade-up">Book your seat now <span> And </span>build career
            with trending course </h1>
        </div>
        <div className="container-fluid">
          <div className="row booking-row first-booking-row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="odo-function-and-technics-section">
                <p className='odo-function'>Odoo Functional</p>
                <p className='technics'><span>and </span> Technical</p>
              </div>

              <div className="Learn-more-btn">
                <a href="">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
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

            <div className="col-lg-6 col-md-12 col-sm-12" id='odo-function-and-technics-section-2' data-aos="fade-left">
              <div className="odo-function-and-technics-section" >
                <p className='odo-function' id='odo-span'>Online <span style={{ color: "#EDA15A" }}>Marketplace</span></p>
                <p className='technics'> Management</p>
              </div>

              <div className="Learn-more-btn">
                <a href="">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
