import  { useEffect } from 'react'
import './Benefit.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefit = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        // once: true // Only animate elements once
    });
  }, []);
  return (
    <div className='benefit-body'>
              <div className="benefit-sub-body">

                <div className="benefit-heading">
                           <p data-aos="fade-up">Whom Will Benefit</p>
                </div>
                <div className="container-fluid ">
                    <div className="row befefit-row">
                        <div className="col-lg-3 col-md-6 col-sm-12 benefit-columns">
                             <div className="benefit-card" data-aos="fade-right">
                             <div className="benefit-column-heading">
                                        <p>Students</p>
                                 </div>
                                 <div className="benefit-column-logo">
                                              <img src="/Images/1-students.png" alt="" />
                                 </div>
                             </div>
                           </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 benefit-columns">
                      <div className="benefit-card" data-aos="fade-up-right">
                      <div className="benefit-column-heading">
                                        <p>Job Seekers</p>
                                 </div>
                                 <div className="benefit-column-logo">
                                              <img src="/Images/2-jobseekers.png" alt="" />
                                 </div>
                      </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 benefit-columns">
                       <div className="benefit-card" data-aos="fade-up-left">
                       <div className="benefit-column-heading">
                                        <p>Professionals</p>
                                 </div>
                                 <div className="benefit-column-logo">
                                              <img src="/Images/3-professionals.png" alt="" />
                                 </div>
                       </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 benefit-columns">
                     <div className="benefit-card" data-aos="fade-left">
                     <div className="benefit-column-heading">
                                        <p>Upskillers</p>
                                 </div>
                                 <div className="benefit-column-logo">
                                              <img src="/Images/4-upskillers.png" alt="" />
                                 </div>
                     </div>
                        </div>
                    </div>
                </div>
              </div>
    </div>
  )
}

export default Benefit
