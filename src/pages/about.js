import React, { Component } from 'react';
import WOW from 'wowjs';
import img1 from '../images/topeimage.jpg'

export class About extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div id="about">
                <div className="sectionppage">
                    <h1 className="text-center">About
                        <span><hr className="underline wow animate__slideInLeft" /></span>
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">

                                    </div>
                                    <h3>Fast</h3>
                                    <p>My website load fast enough to show visitors what they are looking for? Fast load times and lag free interaction, my highest priority. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">
                                    
                                    </div>
                                    <h3>Responsive</h3>
                                    <p>I build a responsive website that change its layout and options to fit the device and browser size. My layouts will work on any device, big or small. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">
                                    
                                    </div>
                                    <h3>Intuitive</h3>
                                    <p>I build a website that is easy to use and navigate. I also have strong preference for intuitive UX/UI. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">
                                    
                                    </div>
                                    <h3>Dynamic</h3>
                                    <p>Websites don't have to be static, I love making pages come to life.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container about-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="about-image text-center">
                                <img src={img1} alt=""  />
                            </div>
                            <h3 className="text-center">Who's this lady?</h3>
                            <p><span>Olasode Temitope </span>is a Frontend Developer from Nigeria looking to break into the tech space
                                and collaborate to create interactive web products. I design to the taste of the Users
                                and give Users easy access to work with my designs.
                                I love when animation is on the webpage. 
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12"> 
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '90%'}} >
                                    <div className="tag bold ">HTML</div>
                                    <div className="flex"></div>
                                </div>
                                <span >90%</span>
                            </div>
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '90%'}} >
                                    <div className="tag bold ">CSS</div>
                                    <div className="flex"></div>
                                </div>
                                <span >90%</span>
                            </div>
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '80%'}} >
                                    <div className="tag bold ">Bootstrap</div>
                                    <div className="flex"></div>
                                </div>
                                <span >80%</span>
                            </div>
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '70%'}} >
                                    <div className="tag bold ">JavaScript</div>
                                    <div className="flex"></div>
                                </div>
                                <span >70%</span>
                            </div>
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '70%'}} >
                                    <div className="tag bold ">ReactJs</div>
                                    <div className="flex"></div>
                                </div>
                                <span >70%</span>
                            </div>

                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
