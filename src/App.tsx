
import AboutMe from './pages/AboutMe';
import HomeAlone from './pages/HomeAlone';
import LandingPage  from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import Project from './pages/Projects';
import SocialMediaLinks from './pages/SocialMediaLinks';
import Footer from './pages/Footer';
import "./App.css"
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/SyncLoader";


function App() {
  const[loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4500)

  },[])

  return (
    
    <div className='parent'>
    {
      loading?
      <PulseLoader className="loader"
        color={"#ffffff"}
        loading={loading}
        size={50}
      />
      :
      <div>
        <LandingPage/>
        <HomeAlone/>
        <AboutMe/>
        <ProjectPage/>
        <Project/>
        <SocialMediaLinks/>
        <Footer/>
      </div>
    }    
    </div>
  );
}

export default App;