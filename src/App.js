import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './Router/router';
import {FaFacebookF,FaTwitter,FaLinkedin} from 'react-icons/fa'
import Contact from './pages/contact';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project/project';
import Aos from "aos";
import "aos/dist/aos.css";

const App = () =>{
  useEffect(() =>{
    Aos.init({duration: 1500});
}, []);


  return (
    <div className="App">
        <Router />
       <div className="wow bounceUp"><Home /></div>
       <About />
       <Project />
       <Contact /> 
       <div className="footer">
          <center>
            <ul>
              <li><a href="https://web.facebook.com/temitope.adeniyi.507" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaFacebookF className="social-icons "/> </a> </li>
              <li><a href="https://web.facebook.com/temitope.adeniyi.507" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaTwitter className="social-icons"/> </a> </li>
              <li><a href="https://web.facebook.com/temitope.adeniyi.507" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><FaLinkedin className="social-icons"/> </a> </li>
            </ul>

            <h6>Adeniyi Temitope <span className="unique-color">&copy;2021 </span></h6>
          </center>
       </div>
       
    </div>
  );
}


export default App;
