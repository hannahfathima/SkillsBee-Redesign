import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import ContactPage from './Components/ContactPage/ContactPage'
import Session from './Components/SessionPage/Session'
import Blog from './Components/BlogPage/Blog'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/about' Component={About}/>
      <Route path='/courses' Component={Courses}/>
      <Route path='/contactus' Component={ContactPage}/>
      <Route path='/session' Component={Session}/>
      <Route path='/blog' Component={Blog}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
