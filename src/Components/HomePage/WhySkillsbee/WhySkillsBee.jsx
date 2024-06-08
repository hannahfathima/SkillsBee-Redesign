import './WhySkillsBee.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhySkillsBee = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true // Only animate elements once
        });
      }, []);
  return (
    <div className='Why-SkillsBee-Mail-Wrapper'>
        <div className="why-skills-bee">
            <div className="heading">
                <h1 data-aos="fade-up">Why SkillsBee</h1>
            </div>
            <div className="container-fluid cardsMailWrapper">
                <div className="row">
                    <div className="col-lg-4"><div className="why-skillsbee-card white" data-aos="slide-right">
                        <div className="card-head">
                            <div><p className='why-skill-heading'>24x7 Support</p></div>
                            <div><img src="/Images/24x7-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div></div>
                    <div className="col-lg-4"><div className="why-skillsbee-card" data-aos="fade-up">
                    <div className="card-head">
                            <div><p className='why-skill-heading'>Certification</p></div>
                            <div><img src="/Images/certification-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div></div>
                    <div className="col-lg-4"><div className="why-skillsbee-card white" data-aos="slide-left">
                    <div className="card-head">
                            <div><p className='why-skill-heading'> Assignment</p></div>
                            <div><img src="/Images/assignment-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div></div>
                    <div className="col-lg-4"><div className="why-skillsbee-card white" data-aos="slide-right">
                    <div className="card-head">
                            <div><p className='why-skill-heading'>100% Job Assistance</p></div>
                            <div><img src="/Images/11-job-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div></div>
                    <div className="col-lg-4"><div className="why-skillsbee-card" data-aos="fade-up">
                    <div className="card-head">
                            <div><p className='why-skill-heading'>Personalized Training24x7 Support</p></div>
                            <div><img src="/Images/12-personal-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div></div>
                    <div className="col-lg-4"><div className="why-skillsbee-card white" data-aos="slide-left">
                    <div className="card-head">
                            <div><p className='why-skill-heading'>Classes From Experts</p></div>
                            <div><img src="/Images/13-expert-unscreen.gif" alt="" /></div>
                        </div>
                        <p className='why-skills-bee-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhySkillsBee
