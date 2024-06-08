import { useEffect } from 'react';
import './Faq.scss'
import { LiaAngleDownSolid } from "react-icons/lia";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            // once: true // Only animate elements once
        });
      }, []);
    return (
        <div className='FaqMainWrapper'>
            <div className="FaqWrapper">
                <h1 className='heading'>Frequently Asked <br /><span className='head-sub'>“Questions”</span></h1>
                <div className="row collapse-faq-wrapper">
                    <div className="col-lg-6 col-md-6 col-sm-12 collapse-left">
                        <div className="questian faq-1"  data-bs-toggle="collapse" href="#faqOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqOne">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqTwo">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqThree">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqFour">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 collapse-right" >
                    <div className="questian faq-1 faq-right-1"  data-bs-toggle="collapse" href="#faqFive" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqFive">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqSix" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqSix">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqSeven" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqSeven">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <div className="questian"  data-bs-toggle="collapse" href="#faqEight" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div className='faq-questian'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</div>
                            <div><LiaAngleDownSolid className='down-angle' /></div>
                        </div>
                        <div className="collapse" id="faqEight">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
