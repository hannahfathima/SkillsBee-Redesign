// import Navbar from './Navbar/Navbar'
import WhySkillsBee from './WhySkillsbee/WhySkillsBee'
import './HomePage.scss'
import ClientSection from './Client-section/ClientSection'
import TrainingProcess from './TrainingProcess/TrainingProcess'
import Course from './CourseSection/Course'
import Activities from './Activities/Activities'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import MobileNav from '../MobileNav/MobileNav'; 
import Tools from './ToolsSection/Tools'
import Filler from './FillerBanner/Filler'
import Benefit from './WhomWillBenefit/Benefit'
import UpcommingEvents from './UpCommingEvents/UpcommingEvents'
import Program from './ProgrammHighlites/Program'
import Faq from './Faq/Faq'
import SalerySection from './SalerySection/SalerySection'
import Stories from './StoriesSection/Stories'
import Mentors from './Mentors/Mentors'
import Library from './VedioLibrary/Library'
import Certificate from './Certification/Certificate'
import Footer from '../Footer/Footer'
import Booking from './SloteBooking/Booking'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import Learning from './LearingPath/Learning'
import Marquee from './MarqueeSection/Marquee'
import { useEffect, useState } from 'react'

const HomePage = () => {
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
  return (
    <div className='HomePageMain'>
      {/* <Navbar /> */}
      {windowWidth > 991 ? <Navbar /> : <MobileNav />}
      <ScrollToTopOnMount/>
      <HeroSection />
      <Marquee/>
      <Course />
      <WhySkillsBee />
      <ClientSection />
      <TrainingProcess />
      <Tools/>
      <Activities />
      <Filler/>
      <Benefit/>
      <Program/>
      <UpcommingEvents/>
      <Stories/>
      <Faq/>
      <SalerySection/>
      <Library/>
      <Booking/>
      <Mentors/>
      <Learning/>
      <Certificate/>
      <Footer/>
    </div>
  )
}

export default HomePage
