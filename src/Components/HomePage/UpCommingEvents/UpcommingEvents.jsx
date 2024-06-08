import  { useEffect, useState } from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './UpcommingEvents.scss';

const UpcommingEvents = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            // once: true // Only animate elements once
        });
      }, []);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='UpCommingEventsWrapper'>
        <div className="Upcomming-events">
            <h1 data-aos="fade-up" >News, Upcoming Events</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="news-card" data-aos="fade-right">
                            <div className="news-img"><img src="/Images/Bee 1.jpg" alt="" /></div>
                            <p className="Date">June 01, 2024</p>
                            <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="news-card" data-aos="fade-up">
                            <div className="news-img"><img src="/Images/Bee 2.jpg" alt="" /></div>
                            <p className="Date">June 01, 2024</p>
                            <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="news-card" data-aos="fade-left">
                            <div className="news-img"><img src="/Images/Bee 4.jpg" alt="" /></div>
                            <p className="Date">June 01, 2024</p>
                            <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    {/* Hidden Rows */}
                    {showMore && (
                        <>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 1.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 2.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 4.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 1.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 2.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-card">
                                    <div className="news-img"><img src="/Images/Bee 4.jpg" alt="" /></div>
                                    <p className="Date">June 01, 2024</p>
                                    <p className="discription">Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="more-items-btn">
                        <button onClick={toggleShowMore}>
                            {showMore ? 'Show Less' : 'Explore All'} 
                            {showMore ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UpcommingEvents;
