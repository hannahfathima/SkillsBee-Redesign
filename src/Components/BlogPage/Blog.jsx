import  { useEffect, useState } from 'react'
import './Blog.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SlArrowDown } from "react-icons/sl";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MobileNav from '../MobileNav/MobileNav'; 

const Blog = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 1200,
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
    <div className='blog-main-body'>
 {windowWidth > 991 ? <Navbar /> : <MobileNav />}
<div className='ActivitiesMain'>
      <div className="ActivityWrapper">
        <h1 data-aos="fade-up">Activities</h1>
        <div className="row">
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-right">
                    <div className="image-container">
                      <img src="/Images/Bee 1.jpg" alt="" />
                    </div>
                    <h2>Heading 1</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-left">
                    <div className="image-container">
                      <img src="/Images/Bee 1.jpg" alt="" />
                    </div>
                    <h2>Heading 2</h2>
                    <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-right">
                    <div className="image-container">
                      <img src="/Images/Bee 1.jpg" alt="" />
                    </div>
                    <h2>Heading 3</h2>
                    <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="Activity-card" data-aos="slide-left">
                    <div className="image-container">
                      <img src="/Images/Bee 1.jpg" alt="" />
                    </div>
                    <h2>Heading 4</h2>
                    <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
      <div className="blog-sub-body">



     {/* ..............................Upcomng-Events............................ */}
          <div className="upcoming-events-body">
            <div className="upcoming-events-heading" >
                <h1  data-aos="fade-up">Upcoming Events</h1>
                <p  data-aos="fade-up"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac massa ullamcorper, vulputate est et, tincidunt tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="blog-contents">
               <div className="container-fluid">
                <div className="row events-row">
                    <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up"  data-aos-duration="500">
                             <div className="events-card">
                              <div className="evnts-card-img">
                                 <img src="/Images/Blog 2.jpg" alt="" />
                              </div>

                              <div className="event-card-details">
                                <p className='card-date'> June 01, 2024</p>
                                <p className='card-heading'>Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                <p className='card-description'>Quisque nunc ipsum, pharetra sed quam ut, venenatis congue mi. Phasellus auctor suscipit augue in lobortis. In in imperdie.</p>
                              </div>
                             </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up"  data-aos-duration="1500">
                    <div className="events-card">
                              <div className="evnts-card-img">
                                 <img src="/Images/Blog 1.jpg" alt="" />
                              </div>

                              <div className="event-card-details">
                                <p className='card-date'> June 01, 2024</p>
                                <p className='card-heading'>Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                <p className='card-description'>Quisque nunc ipsum, pharetra sed quam ut, venenatis congue mi. Phasellus auctor suscipit augue in lobortis. In in imperdie.</p>
                              </div>
                             </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12"  data-aos="fade-up"  data-aos-duration="2000">
                    <div className="events-card">
                              <div className="evnts-card-img">
                                  <img src="/Images/BG 32.jpg" alt="" />
                              </div>

                              <div className="event-card-details">
                                <p className='card-date'> June 01, 2024</p>
                                <p className='card-heading'>Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                <p className='card-description'>Quisque nunc ipsum, pharetra sed quam ut, venenatis congue mi. Phasellus auctor suscipit augue in lobortis. In in imperdie.</p>
                              </div>
                             </div>
                    </div>
                </div>
               </div>
            </div>
          </div>
     {/* ..............................Upcomng-Events............................ */}

     <div className="latest-news">

      <div className="latest-news-heading">
        <h1 data-aos="fade-up">Latest News</h1>
      </div>
          <div className="collapse-card collapse-card-1 btn" data-aos="fade-up" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className="collapse-card-left-section">
                 <div className="collapse-img">
                <img src="/Images/test1.jpg" alt="" />
                 </div>
            </div>
            <div className="collapse-card-middle-section">
               <div className="paragraph-of-collapse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur tempor enim enim,</p>
               </div>
               <div className="name-and-date">
                <div className="name-collapse">
                    <h6>Name</h6>
                </div>
                <div className="collapse-date">
                 <h6> 20/06/2024</h6>
                </div>
               </div>
            </div>
            <div className="collapse-card-right-section">
            <SlArrowDown />
            </div>
          </div>
          <div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>


<div className="collapse-card btn " data-aos="fade-up" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
            <div className="collapse-card-left-section">
                 <div className="collapse-img">
                 <img src="/Images/BG 31.jpg" alt="" />
                 </div>
            </div>
            <div className="collapse-card-middle-section">
               <div className="paragraph-of-collapse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur tempor enim enim,</p>
               </div>
               <div className="name-and-date">
                <div className="name-collapse">
                    <h6>Name</h6>
                </div>
                <div className="collapse-date">
                 <h6> 20/06/2024</h6>
                </div>
               </div>
            </div>
            <div className="collapse-card-right-section">
            <SlArrowDown />
            </div>
          </div>
          <div className="collapse" id="collapseExample1">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

<div className="collapse-card btn" data-aos="fade-up" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
            <div className="collapse-card-left-section">
                 <div className="collapse-img">
                 <img src="/Images/test3.jpg" alt="" />
                 </div>
            </div>
            <div className="collapse-card-middle-section">
               <div className="paragraph-of-collapse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur tempor enim enimas</p>
               </div>
               <div className="name-and-date">
                <div className="name-collapse">
                    <h6>Name</h6>
                </div>
                <div className="collapse-date">
                 <h6> 20/06/2024</h6>
                </div>
               </div>
            </div>
            <div className="collapse-card-right-section">
            <SlArrowDown />
            </div>
          </div>
          <div className="collapse" id="collapseExample2">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>


     </div>
      </div>


<Footer/>
    </div>

    
  )
}

export default Blog
