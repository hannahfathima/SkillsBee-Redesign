import './Activities.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Activities = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false // Only animate elements once
    });
}, []);

  return (
    <div className='ActivitiesMain'>
      <div className="ActivityWrapper">
        <h1 data-aos="fade-up">Activities</h1>
        <div className="row">
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-right">
                    <div className="image-container">
                      <img src="/Images/bg-image.jpg" alt="" />
                    </div>
                    <h2>Heading 1</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-left">
                    <div className="image-container">
                      <img src="/Images/bg-image.jpg" alt="" />
                    </div>
                    <h2>Heading 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-right">
                    <div className="image-container">
                      <img src="/Images/bg-image.jpg" alt="" />
                    </div>
                    <h2>Heading 3</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-left">
                    <div className="image-container">
                      <img src="/Images/bg-image.jpg" alt="" />
                    </div>
                    <h2>Heading 4</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
