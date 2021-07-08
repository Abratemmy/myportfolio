import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="contact sectionppage" id="contact">
                <center className="">
                    <h1>Contact
                    <span><hr className="underline" /></span>
                    </h1>
                    <p>Have a question or contributions?</p>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="contactdiv">
                                    <input type="text" placeholder="Name"  className=" inputfield" />
                                </div>
                                <div className="contactdiv">
                                    <input type="text" placeholder="Email"  className=" inputfield" />
                                </div>
                                <div className="contactdiv">
                                    <textarea type="text" rows="5" placeholder="Write your message here"  className="textarea" ></textarea>
                                </div>
                                <div className="contactdiv">
                                    <button type="submit" className="signUpButton" style={{marginTop:'30px', border:'none'}}>Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default Contact
