import React, { useEffect } from 'react';
import './Learning.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaChevronDown } from "react-icons/fa";

const Learning = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    return (
        <div className='Learning-Main-body'>
            <div className="Learning-body">

                <div className="Lerning-details-container">
                    <div className="Learning-main-heading" data-aos="fade-up">
                        <h1>Learning Path</h1>
                    </div>

                    <div className="container-fluid">
                        <div className="row collapse-row">
                            <div className="col-lg-6 col-md-6 col-sm-12">

                                <div className="collapse-columns" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading">
                                            <p> <span>1</span>GET TRAINED</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div> </div>
                                    <div className="collapse" id="collapseExample1">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading number-heading-2">
                                            <p> <span>2</span>SUBMIT ASSIGNMENTS</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="collapse" id="collapseExample2">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns"  data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading">
                                            <p> <span>3</span>EXAMINATION</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                  
                                </div>

                                <div className="collapse" id="collapseExample3">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading number-heading-2">
                                            <p> <span>4</span>WORK ON REAL PROJECT</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                  
                                </div>

                                <div className="collapse" id="collapseExample4">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">

                                <div className="collapse-columns"  data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading number-heading-2">
                                            <p> <span>5</span>BOOTCAMPS</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                
                                </div>

                                <div className="collapse" id="collapseExample5">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading ">
                                            <p> <span>6</span>INTERVIEW TIPS</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                </div>

                                
                                <div className="collapse" id="collapseExample6">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading  number-heading-2">
                                            <p> <span>7</span>MOCK INTERVIEWS</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                
                                </div>

                                <div className="collapse" id="collapseExample7">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                <div className="collapse-columns" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8"  data-aos="fade-up">

                                    <div className="details-of-collapse">
                                        <div className="number-heading">
                                            <p> <span>8</span>PLACEMENT SUPPORT</p>
                                        </div>


                                        <div className="down-arrow">
                                            <FaChevronDown className='down' />
                                        </div>
                                    </div>

                                  
                                </div>

                                <div className="collapse" id="collapseExample8">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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

export default Learning




