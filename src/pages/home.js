import React, { Component } from 'react';
import {Link } from 'react-scroll';
import './home.css';
import {BsArrowRight} from "react-icons/bs";
import {FiAlignRight, FiXCircle} from "react-icons/fi";
// import {MdEmail} from 'react-icons/md'

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            scrolled: false,
            click: false
        };
    }
    handleClick=()=>{
        this.setState= ({
            click: !this.state.click
        })
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY < 500;
            if (isTop !== true){
                this.setState({scrolled: true});
            } else{
                this.setState({scrolled: false})
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <div className=" pages" id="main">
                <div className="homepage-wrapper">
                    <a href="https://internship.zuri.team" target="_blank" rel="noopener noreferrer" className="zuri-logo"><h2 className="zuri">Zuri<span>.</span>Internship</h2></a>
                    <center className="homepage-text">
                        Hello, I'm <span>Adeniyi Temitope</span> <br />
                        Am a Frontend Web developer
                        <Link to="project">
                        <div className="home-button">View my work <span><BsArrowRight className="home-arrow" /></span></div>
                        </Link>
                        
                    </center>


                    <div className="nav">
                        
                        
                        <div className={this.state.scrolled ?'Navbar scrolled': 'Navbar'}>
                            <div className="logo">
                                TEM<span>M</span>Y
                            </div>
                            <ul className="">
                                <li className="active"><Link to = 'main' activeClass="active" spy="true" className=" navbar-link" >Home</Link></li>
                                <li><Link to ='about'activeClass="active" spy="true"  className=" navbar-link">About</Link></li>
                                <li><Link to= 'project'activeClass="active" spy="true"  className=" navbar-link">Portfolio</Link></li>
                                <li><Link to= 'blog' activeClass="active" spy="true" className=" navbar-link">Blog</Link></li>
                                <li><Link to= 'contact'activeClass="active" spy="true"  className=" navbar-link">Contact</Link></li>
                            </ul>
                            <div className="nav-icon" onClick={()=>this.handleClick}>
                                {this.state.click ? "yes" : "no"}
                                {/* {this.state.click === true ? <div><span className="" onClick={this.handleClick}><FiXCircle /></span></div>:
                                <div><span className="" onClick={this.handleClick}><FiAlignRight /></span></div>} */}
                              
                            </div>
                        </div>
                        {/* <div className="" onClick={this.handleClick(
                            
                        )}>
                            
                        </div> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home
