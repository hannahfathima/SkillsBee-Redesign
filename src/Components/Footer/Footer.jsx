import './Footer.scss'
import  { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { RiCloseCircleFill } from "react-icons/ri";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Footer = () => {
     // -------------------modal-----------------
 
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // -------------------modal-----------------
  return (
    <div className='FooterMainWrapper'>
       <div className="whatsaap">
        <a href=""><img src="/Images/whatsapp 2.png" alt="" /></a>
      </div>
      <div className="chatbot">
        <img src="/Images/chatbot.png" alt="" />
      </div>
      <div className="top-arrow">
        <a href="#"><img src="/Images/up-arrow.png" alt="" /></a>
      </div>
       {/* -----------------modal------------- */}
       <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <h3 className='modal-head'>Know More About Us, Type Here!</h3>
      <RiCloseCircleFill className='close-icon' onClick={closeModal} />
        <form>
        <div><input type="text" placeholder='Name*' /></div>
        <div><input type="email" placeholder='Email*' /></div>
        <div><input type="text" placeholder='Contact Number*' /></div>
        <button>Download Course Details</button>
        </form>
      </Modal>
      {/* -----------------modal------------- */}
        <div className="Footer">
        <div className="container-fluid">
         <div className="row">
         <div className="col-lg-3 footer-left">
            <img src="/Images/skillsbee-logo-name.png" alt="" />
            <p className="footer-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ligula odio. In laoreet massa vitae nibh ullamcorper eleifend. Morbi faucibus dui felis, eu mollis nisl sodales ut.
            </p>
          </div>
          <div className="col-lg-3 footer-center-left">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <div className="link"><a href="">Home</a></div>
              <div className="link"><a href="">Courses</a></div>
              <div className="link"><a href="">About</a></div>
              <div className="link"><a href="">Blog</a></div>
              <div className="link"><a href="">Session</a></div>
              <div className="link"><a href="">Contact Us</a></div>
            </div>
          </div>
          <div className="col-lg-3 footer-center-right">
            <h4>Our Courses</h4>
            <p>Odoo Functional and Technical</p>
            <p>Online Marketplace</p>
          </div>
          <div className="col-lg-3 footer-right">
            <h4>Contact</h4>
            <div className="contact-card">
              <div className="icon"><img src="/Images/Telephone-call.png" alt="" /></div>
              <div className="text">+91 1010101010</div>
            </div>
            <div className="contact-card">
              <div className="icon"><img src="/Images/Whatsapp-Logo.png" alt="" /></div>
              <div className="text">+91 2020202020</div>
            </div>
            <div className="contact-card">
              <div className="icon"><img src="/Images/E-mail.png" alt="" /></div>
              <div className="text">skillsbee@gmail.com</div>
            </div>
            <div className="contact-card">
              <div className="icon"><img src="/Images/Location-White.png" alt="" /></div>
              <div className="text">Ernakulam</div>
            </div>
          </div>
         </div>

         <div className="row cpyRgtSection">
            <div className="col-lg-6 cpy-left">
              <p>Designed By <a href="https://firstlogicmetalab.com/">First Logic Meta Lab PVT LTD</a> - All Rights Reserved</p>
            </div>
            <div className="col-lg-6 cpy-right">
            <div className="social-links">
            <a href=""><img src="/Images/linkedin.png" alt="" /></a>
            <a href=""><img src="/Images/instagram.png" alt="" /></a>
            <a href=""><img src="/Images/facebook-icon.png" alt="" /></a>
            <a href=""><img src="/Images/twitter.png" alt="" /></a>
            </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
