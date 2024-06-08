import './Courses.scss'
import Navbar from '../Navbar/Navbar'
import MobileNav from '../MobileNav/MobileNav'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../Footer/Footer';

const Courses = () => {

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

    const [activeSectionOdoo, setActiveSectionOdoo] = useState('Overview');
    const [activeSectionMarketplace, setActiveSectionMarketplace] = useState('Overview');

    const handleButtonClickOdoo = (section) => {
        setActiveSectionOdoo(section);
    };

    const handleButtonClickMarketplace = (section) => {
        setActiveSectionMarketplace(section);
    };

    return (
        <div className='CoursePageMainWrapper'>
             {windowWidth > 991 ? <Navbar /> : <MobileNav />}
            {/* -----------------------Hero------------------- */}
            <div className="hero-banner">
                <h1 className="banner-heading" data-aos="fade-down">Explore Career With SKILLSBEE</h1>
                <p className="banner-paragraph" data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
            </div>
            {/* -----------------------Hero------------------- */}
            {/* -------------------------details---------------- */}
            <div className="container-fluid">
                <div className="row course-details-main">
                    <div className="col-lg-7 col-md-12 col-sm-12 course-details-left">
                        <h2 className='Crs-details-heading'>Odoo Functional and Technical</h2>
                        <div className="upper-btns">
                            <button
                                onClick={() => handleButtonClickOdoo('Overview')}
                                className={activeSectionOdoo === 'Overview' ? 'active-button' : ''}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => handleButtonClickOdoo('Curriculum')}
                                className={activeSectionOdoo === 'Curriculum' ? 'active-button' : ''}
                            >
                                Curriculum
                            </button>
                            <button
                                onClick={() => handleButtonClickOdoo('Advantages')}
                                className={activeSectionOdoo === 'Advantages' ? 'active-button' : ''}
                            >
                                Advantages
                            </button>
                        </div>
                        <div className="content">
                            {activeSectionOdoo === 'Overview' && (
                                <div>
                                    <h2 className='content-heading'>Course Description</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                                        But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div><button>Job Opportunities</button></div>
                                </div>
                            )}
                            {activeSectionOdoo === 'Curriculum' && (
                                <div>
                                    <h2 className='content-heading'>Curriculum</h2>
                                    <div className="collapseMain">
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#odooModuleOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 1 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="odooModuleOne">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#odooModuleTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 2 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="odooModuleTwo">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#odooModuleThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 3 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="odooModuleThree">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#odooModuleFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 4 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="odooModuleFour">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#odooModuleFive" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 5 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="odooModuleFive">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeSectionOdoo === 'Advantages' && (
                                <div>
                                    <h2 className='content-heading advantages-head'>Advantages</h2>
                                    <ul>
                                        <li><h3>Advantage 1</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <li><h3>Advantage 2</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <li><h3>Advantage 3</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 course-details-right">
                        <div className="course-detail-card">
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/back-in-time.png" alt="" />
                                    <span>Duration</span>
                                </div>
                                <div className="card-item-right">
                                    <span>3 Months</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/modules (1).png" alt="" />
                                    <span>Modules</span>
                                </div>
                                <div className="card-item-right">
                                    <span>5 Modules</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/certificate.png" alt="" />
                                    <span>Certificate</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Yes</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/languages.png" alt="" />
                                    <span>Language</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Malayalam</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/order.png" alt="" />
                                    <span>Mode</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Offline</span>
                                </div>
                            </div>
                            <button>Enquire now</button>
                        </div>
                    </div>
                </div>
                {/* Second Course Section */}
                <div className="row course-details-main">
                    <div className="col-lg-7 course-details-left">
                        <h2 className='Crs-details-heading'>Online Marketplace</h2>
                        <div className="upper-btns">
                            <button
                                onClick={() => handleButtonClickMarketplace('Overview')}
                                className={activeSectionMarketplace === 'Overview' ? 'active-button' : ''}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => handleButtonClickMarketplace('Curriculum')}
                                className={activeSectionMarketplace === 'Curriculum' ? 'active-button' : ''}
                            >
                                Curriculum
                            </button>
                            <button
                                onClick={() => handleButtonClickMarketplace('Advantages')}
                                className={activeSectionMarketplace === 'Advantages' ? 'active-button' : ''}
                            >
                                Advantages
                            </button>
                        </div>
                        <div className="content">
                            {activeSectionMarketplace === 'Overview' && (
                                <div>
                                    <h2 className='content-heading'>Course Description</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                                        But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div><button>Job Opportunities</button></div>
                                </div>
                            )}
                            {activeSectionMarketplace === 'Curriculum' && (
                                <div>
                                    <h2 className='content-heading'>Curriculum</h2>
                                    <div className="collapseMain">
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#marketplaceModuleOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 1 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="marketplaceModuleOne">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#marketplaceModuleTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 2 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="marketplaceModuleTwo">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#marketplaceModuleThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 3 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="marketplaceModuleThree">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#marketplaceModuleFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 4 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="marketplaceModuleFour">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <div className="caricculam-container" data-bs-toggle="collapse" href="#marketplaceModuleFive" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Module 5 : Lorem Ipsum  <FaAngleDown />
                                        </div>
                                        <div className="collapse" id="marketplaceModuleFive">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeSectionMarketplace === 'Advantages' && (
                                <div>
                                    <h2 className='content-heading advantages-head'>Advantages</h2>
                                    <ul>
                                        <li><h3>Advantage 1</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <li><h3>Advantage 2</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <li><h3>Advantage 3</h3></li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-5 course-details-right">
                        <div className="course-detail-card">
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/back-in-time.png" alt="" />
                                    <span>Duration</span>
                                </div>
                                <div className="card-item-right">
                                    <span>3 Months</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/modules (1).png" alt="" />
                                    <span>Modules</span>
                                </div>
                                <div className="card-item-right">
                                    <span>6 Modules</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/certificate.png" alt="" />
                                    <span>Certificate</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Yes</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/languages.png" alt="" />
                                    <span>Language</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Malayalam</span>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className="card-item-left">
                                    <img src="/Images/order.png" alt="" />
                                    <span>Mode</span>
                                </div>
                                <div className="card-item-right">
                                    <span>Offline</span>
                                </div>
                            </div>
                            <button>Enquire now</button>
                        </div>
                    </div>
                </div>
                {/* Second Course Section */}
            </div>
            <Footer/>
        </div>
    );
};

export default Courses;
