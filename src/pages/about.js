import React, { Component } from 'react';
import WOW from 'wowjs';
// import topeimage from 'images/topeimage'

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
                                    <p>Fast load times and lag free interaction, my highest priority. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">
                                    
                                    </div>
                                    <h3>Responsive</h3>
                                    <p>My layouts will work on any device, big or small. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 aboutcol">
                                <div className="aboutcol">
                                    <div className="">
                                    
                                    </div>
                                    <h3>Intuitive</h3>
                                    <p>Strong preference for easy to use, intuitive UX/UI. </p>
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
                                <img src="" alt="not loading"  />
                            </div>
                            <h3 className="text-center">Who's this lady?</h3>
                            <p>I am a Frontend Developer. I work as a freelancer.  I design to the taste of the Users. I give Users easy access to work with my designs.
                            I love when animation is on the webpage. 
                                I like to use technology to change the face of the world.
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
                                <div className="bar fill" style={{width: '60%'}} >
                                    <div className="tag bold ">JavaScript</div>
                                    <div className="flex"></div>
                                </div>
                                <span >60%</span>
                            </div>
                            <div className="flexbox">                          
                                <div className="bar fill" style={{width: '70%'}} >
                                    <div className="tag bold ">ReactJs</div>
                                    <div className="flex"></div>
                                </div>
                                <span >70%</span>
                            </div>

                        {/* <div className="flexbox">                          
                            <div className="bar fill">
                                <div className="tag bold ">Bootstrap</div>
                            </div>
                            
                          
                            <span className="text-center">90%</span>
                        </div>

                        <div className="flexbox">                          
                            <div className="bar fill" >
                                <div className="tag bold ">CSS</div>
                            </div>
                            <span>60%</span>
                        </div>  */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
