
import './TrainingProcess.scss'
import { IoIosArrowDown } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TrainingProcess = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: false // Only animate elements once
    });
  }, []);
  return (
    <div className="trainingProcesMainWrapper">
      <div className="trainingProces">
        <h1 data-aos='fade-up'>Training Process</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 collapse-main">
              {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1" data-aos='fade-up'>
                <div className="TrainngProcess" data-bs-toggle="collapse" href="#Training" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span>1</span>Admission</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Training">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1"  data-aos='fade-up'>
                <div className="TrainngProcess selectBatch" data-bs-toggle="collapse" href="#Select-Your-Batch" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-2'>2</span>Select Your Batch</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Select-Your-Batch">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1"  data-aos='fade-up'>
                <div className="TrainngProcess selectBatch" data-bs-toggle="collapse" href="#Attendance" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-2'>3</span>Attendance</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Attendance">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1"  data-aos='fade-up'>
                <div className="TrainngProcess" data-bs-toggle="collapse" href="#Examination" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-4'>4</span>Examination</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Examination">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 collapse-main">
              {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1"  data-aos='fade-up'>
                <div className="TrainngProcess" data-bs-toggle="collapse" href="#Internship" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span>5</span>Internship</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Internship">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1" data-aos='fade-up'>
                <div className="TrainngProcess selectBatch" data-bs-toggle="collapse" href="#Freelancing" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-2'>6</span>Freelancing</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="Freelancing">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1" data-aos='fade-up'>
                <div className="TrainngProcess selectBatch" data-bs-toggle="collapse" href="#PlacementSupport" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-2'>7</span>Placement Support</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="PlacementSupport">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
               {/* ----------------item------------- */}
              <p className="d-inline-flex gap-1" data-aos='fade-up'>
                <div className="TrainngProcess" data-bs-toggle="collapse" href="#HappyGraduate" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='training-items'><span className='collapse-4'>8</span>Happy Graduate</div> <div><IoIosArrowDown className='arrow-down' /></div>
                </div>
              </p>
              <div className="collapse" id="HappyGraduate">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingProcess
