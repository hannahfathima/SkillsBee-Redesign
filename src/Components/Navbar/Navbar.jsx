import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';
import { FaHome, FaBook, FaInfoCircle, FaBlog, FaUserFriends, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const pathToLinkName = {
      '/': 'Home',
      '/courses': 'Courses',
      '/about': 'About',
      '/blog': 'Blog',
      '/session': 'Session',
      '/contactus': 'ContactUs',
    };

    const currentPath = location.pathname;
    const currentLink = pathToLinkName[currentPath] || 'Home';
    setActiveLink(currentLink);

  }, [location.pathname]);

  return (
    <div className="Navbar-main">
     

      <div className="container-fluid">
        <div className="row navbar" ref={navRef}>
          <div className="col-lg-6">
            <div className="logo"><img src="/Images/skillsbee-logo-name.png" alt="" /></div>
          </div>
          <div className="col-lg-6 navbar-right">
            <div className="nav-items">
              <div className={`navLinks ${activeLink === 'Home' ? 'active' : ''}`} data-name="Home">
                <Link to='/' className='NavLinkTag' onClick={() => setActiveLink('Home')}>Home</Link>
                <div className={`indicator indicator-home ${activeLink === 'Home' ? 'active-indicator' : ''}`} ><FaHome className='nav-icon' /></div>
              </div>
              <div className={`navLinks ${activeLink === 'Courses' ? 'active' : ''}`} data-name="Courses">
                <Link to='/courses' className='NavLinkTag' onClick={() => setActiveLink('Courses')}>Courses</Link>
                <div className={`indicator indicator-courses ${activeLink === 'Courses' ? 'active-indicator' : ''}`} ><FaBook className='nav-icon' /></div>
              </div>
              <div className={`navLinks ${activeLink === 'About' ? 'active' : ''}`} data-name="About" >
                <Link to='/about' className='NavLinkTag' onClick={() => setActiveLink('About')}>About</Link>
                <div className={`indicator indicator-about ${activeLink === 'About' ? 'active-indicator' : ''}`}><FaInfoCircle className='nav-icon' /></div>
              </div>
              <div className={`navLinks ${activeLink === 'Blog' ? 'active' : ''}`} data-name="Blog">
                <Link to='/blog' className='NavLinkTag' onClick={() => setActiveLink('Blog')}>Blog</Link>
                <div className={`indicator indicator-blog ${activeLink === 'Blog' ? 'active-indicator' : ''}`}><FaBlog className='nav-icon' /></div>
              </div>
              <div className={`navLinks ${activeLink === 'Session' ? 'active' : ''}`} data-name="Session">
                <Link to='/session' className='NavLinkTag' onClick={() => setActiveLink('Session')}>Session</Link>
                <div className={`indicator indicator-session ${activeLink === 'Session' ? 'active-indicator' : ''}`} ><FaUserFriends className='nav-icon' /></div>
              </div>
              <div className={`navLinks ${activeLink === 'ContactUs' ? 'active' : ''}`} data-name="ContactUs">
                <Link to='/contactus' className='NavLinkTag' onClick={() => setActiveLink('ContactUs')}>Contact Us</Link>
                <div className={`indicator indicator-contact ${activeLink === 'ContactUs' ? 'active-indicator' : ''}`} ><FaEnvelope className='nav-icon' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
