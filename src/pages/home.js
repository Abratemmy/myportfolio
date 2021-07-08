import React, { Component } from 'react';
import {Link } from 'react-scroll';
import './home.css';
import {BsArrowRight} from "react-icons/bs"

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            scrolled: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY < 100;
            if (isTop !== true){
                this.setState({scrolled: true});
            } else{
                this.setState({scrolled: false})
            }
        });
    }

    // componentWillUnmount(){
    //     window.removeEventListener('scroll')
    // }


    render() {
        return (
            <div className=" pages" id="main">
                <div className="homepage-wrapper">
                    <center className="homepage-text">
                        Hello, I'm <span>Adeniyi Temitope</span> <br />
                        Am a Frontend Web developer
                        <Link to="project">
                        <div className="home-button">View my work <span><BsArrowRight className="home-arrow" /></span></div>
                        </Link>
                        
                    </center>
                </div>

                <div className={this.state.scrolled ?'navbar scrolled': 'navbar'} style={{overflow:'hidden'}}>
                    <nav className="">
                        <ul className="">
                            <li><Link to = 'main' >Home</Link></li>
                            <li><Link to ='about'>About</Link></li>
                            <li><Link to= 'project'>Portfolio</Link></li>
                            <li><Link to= 'blog'>Blog</Link></li>
                            <li><Link to= 'contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div> 

            
                
            </div>
        )
    }
}

export default Home
