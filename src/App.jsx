import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import './css/style.css';
import Pages from "./pages/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  const [landingPageData, setLandingPageData] = useState({});
  const [_isMounted, _setIsMounted] = useState(true);
  const { Navigation, Home, About, Services, Contact, Testimonials, Learning } = Pages;
  // toast.configure();

  useEffect(() => {
    if(_isMounted) {
      setLandingPageData(JsonData);
    }
    
    return () => {
      _setIsMounted(false);
    }
  }, [landingPageData, _isMounted]);

  return (
    !_isMounted && <div>
      <Navigation data={landingPageData.Navigation}/>
      <Home data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Learning data={landingPageData.Learning} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <ToastContainer/>
    </div>
  );
};

export default App;