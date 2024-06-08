import './Certificate.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Certificate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='Certificate-main-wrapper'>
      <div className="certicate-main">
        <h1 className="heading" data-aos="fade-up">
          Get Certified
        </h1>
        <div className="row">
          <div className="col-lg-4 crtfct-left" >
            <p className="discription" data-aos="fade-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
           <div className="caaards">
           <div className="crtfct-card" data-aos="fade-right">
              <div className="crtfct-card-left">
                <img src="/Images/certification.gif" alt="" className="crtfct-icon" />
              </div>
              <div className="crtfct-card-right">
              <h2 className="right-head">Certified</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, lorem Ipsum has been the industry s.</p>
              </div>
            </div>
            <div className="crtfct-card" data-aos="fade-right">
              <div className="crtfct-card-left">
                <img src="/Images/Career Shifting.gif" alt="" className="crtfct-icon" />
              </div>
              <div className="crtfct-card-right">
              <h2 className="right-head">Career Shifting</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, lorem Ipsum has been the industry s.</p>
              </div>
            </div>
           </div>
          </div>
          <div className="col-lg-8 crtfct-right" data-aos="fade-left">
           <div className="certificate-images">
              <img src="/Images/Certificate Portrait.jpg" alt="" />
              <img src="/Images/Certificate Portrait.jpg" alt="" />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate
