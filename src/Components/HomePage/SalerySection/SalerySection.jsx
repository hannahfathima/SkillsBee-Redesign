import './SalerySection.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SalerySection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div className='salerySectionMainDiv'>
      <div className="banner">
        <h1 className='left-heading' data-aos="fade-right">Financial Freedom</h1>
        <div className="row slry-details-container">
            <h1 className='heading' data-aos="fade-up">Course Salary <span style={{color:"#593384"}}>Statistics</span></h1>
            <div className="col-lg-6 col-sm-12 slry-details-container-left">
                <img src="/Images/Salary 22.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 slry-details-container-right">
                <div className="avg-slry-headning">
                    <h2 data-aos="fade-up">Average <span style={{color:'#593384'}}>Salary</span> Package </h2>
                </div>
                <div className="slry-cards-main">
                    <div className=" slry-card" data-aos="fade-left">
                        <div className="slry-card-left">
                            <p className='course'>ONLINE MARKETPLACE</p>
                            <a href=""><button>Learn More</button></a>
                        </div>
                        <div className=" slry-card-right">
                            <div className="slry-square">
                                <h2>5.5<span>LPA</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className=" slry-card" data-aos="fade-left">
                        <div className=" slry-card-left">
                            <p className='course'>Odoo Functional and Technical</p>
                            <a href=""><button>Learn More</button></a>
                        </div>
                        <div className=" slry-card-right">
                            <div className="slry-square">
                                <h2>5.0<span>LPA</span></h2>
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

export default SalerySection
