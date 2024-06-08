import './Course.scss'
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <div className='Course-main-body'>
      <div className="course-sub-body">
        <div className="course-heading">
            <p>Courses Offered</p>
        </div>
        <div className="container-fluid ">
            <div className="row course-detail-row">
                <div className="col-lg-12 col-md-12 col-sm-12 course-columns">
                    <div className="row course-image-description-row ">
                        <div className="col-lg-7 col-md-7 col-sm-12 course-img" id='cours-imag-column'>
                             <div className="detail-heading">
                                   <p>Odoo Functional and Technical</p>
                             </div>
                             <div className="detail-sub-heading">
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled make.</p>
                             </div>
                             <div className="learn-more-btn">
                             <a  className='learn-btn'>Learn More</a>

                             </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-12 course-img">
                                 <div className="course-odo-img hexagon-container ">
    <img src="/Images/Filler Banner.jpg" alt="Description of the image" />
</div>

                        </div>
                    </div>
                         
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 course-columns">
                <div className="row course-image-description-row "id='course-columns2'>
                <div className="col-lg-5 col-md-5 col-sm-12 course-img2">
                <div className="course-odo-img hexagon-container">
                              <img src="/Images/Filler Banner.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 course-img">
                               
 
                                 <div className="detail-heading">
                                   <p>Online Marketplace</p>
                             </div>
                             <div className="detail-sub-heading1">
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled make.</p>
                             </div>
                             <div className="learn-more-btn">
                             <a  className='learn-btn'>Learn More</a>

                             </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Course
