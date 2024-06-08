import  { useEffect } from 'react'
import './Program.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Program = () => {

        useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className='program-body'>
      <div className="program-sub-body">

          <div className="program-main-heading">
            <h1 data-aos="slide-right">Programme</h1>
          </div>

          <div className="program-main-heading-in-media">
            <h1>Programme <span>Highlights</span></h1>
          </div>
          
           <div className="program-cards-rows">
                <div className="program-card" data-aos="slide-right" id='card-1'>
                    <div className="card-column-head">
                        <p>Communication Training</p>
                    </div>
                    <div className="card-column-image">
                         <img src="/Images/41Communi.png" alt="" />
                    </div>
                    <div className="card-column-description">
                     <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias veniam rerum doloribus eveniet,</p>
                    </div>
                </div>
                <div className="program-card" data-aos="fade-up-right"  id='card-2'>
                <div className="card-column-head">
                        <p>Mock Interviews</p>
                    </div>
                    <div className="card-column-image">
                         <img src="/Images/42Mock.png" alt="" />
                    </div>
                    <div className="card-column-description">
                     <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias veniam rerum doloribus eveniet,</p>
                    </div>
                </div>
                <div className="program-card" data-aos="fade-up-left" id='card-3'>
                <div className="card-column-head">
                        <p>Presentation Skills</p>
                    </div>
                    <div className="card-column-image">
                         <img src="/Images/43Presenta.png" alt="" />
                    </div>
                    <div className="card-column-description">
                     <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias veniam rerum doloribus eveniet,</p>
                    </div>
                </div>
                <div className="program-card" data-aos='slide-left' id='card-4'>
                <div className="card-column-head">
                        <p>Monthly Payment Options</p>
                    </div>
                    <div className="card-column-image">
                         <img src="/Images/44Payment.png" alt="" />
                    </div>
                    <div className="card-column-description">
                     <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias veniam rerum doloribus eveniet,</p>
                    </div>
                </div>
           </div>

           <div className="program-main-heading2">
            <h1 data-aos="slide-left">--Highlights</h1>
          </div>
      </div>
    </div>
  )
}

export default Program
