import React, { useState } from 'react';
import {Link } from 'react-scroll';
import './home.css';
import {BsArrowRight} from "react-icons/bs";
import {FiAlignRight, FiXCircle} from "react-icons/fi";
import {FaEnvelope} from "react-icons/fa"

function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click);

    const changeBackground= ()=>{
        // the 200 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=200){
            setScrolled(true);
        }else{
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <div className="pages" id="main">
            <div className="homepage-wrapper">
                <div className='container'>
                    <div className='nav-top'>
                        <Link to="/" exact className="link"><h2><span className='logo1'>A</span><span className='logo1 logo2'>t</span><sub>info<span className='logo3'>te</span>ch</sub></h2></Link>
                        <div className='email'>
                            <a href="mailto:temitopeopeyemi2016@gmail.com" target="_blank"  rel="noopener noreferrer" className=""><FaEnvelope className="home-arrow email-link" /></a>
                        </div>
                
                    </div>
                </div>

                <center className="homepage-text">
                    Hello, I'm <span>Olasode Temitope</span> <br />
                    Am a Frontend Web developer
                    <Link to="project">
                    <div className="home-button">View my work <span><BsArrowRight className="home-arrow" /></span></div>
                    </Link>
                    
                </center>


                <div className="nav">
                    <div className={scrolled ?'Navbar scrolled': 'Navbar'}>
                        <div className="logo">
                            <Link to="/" exact className="link"><h2><span className='logo1'>A</span><span className='logo1 logo2'>t</span><sub>info<span className='logo3'>te</span>ch</sub></h2></Link>
                        </div>
                        <ul  className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="active"><Link to = 'main' activeClass="active" spy="true" className=" navbar-link" onClick={handleClick}>Home</Link></li>
                            <li><Link to ='about'activeClass="active" spy="true"  className=" navbar-link" onClick={handleClick}>About</Link></li>
                            <li><Link to= 'project'activeClass="active" spy="true"  className=" navbar-link" onClick={handleClick}>Portfolio</Link></li>
                            <li><Link to= 'contact'activeClass="active" spy="true"  className=" navbar-link" onClick={handleClick}>Contact</Link></li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            {/* {this.state.click ? "yes" : "no"} */}
                            {click === true ? <div><span className="" onClick={handleClick}><FiXCircle /></span></div>:
                            <div><span className="" onClick={handleClick}><FiAlignRight /></span></div>}
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
