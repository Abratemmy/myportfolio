import React, { useState } from 'react';
import './contact.css';
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";


function  Contact () {
    let history = useHistory();
    const [values, setValues] = useState({
		fullname: "",
        message:"",
		email:"",
	});
	const [errors, setErrors] = useState({});

	// get input values
	const handleChange = (ev) => {
		setValues({
			...values,
			[ev.target.name]: ev.target.value,
		});
	};

	// handle errors
	const handleError = (targets) => {
		let errorsValue = {};
		if (!targets.fullname) errorsValue.fullname = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a message";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
		
		if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
		else setErrors({});

		return Object.keys(errorsValue).length;

	};

	// submit form
	const submitForm = async (ev) => {
		ev.preventDefault();
		let v = handleError(values);

		// check if there is any eror available and handle here 
		if (v > 0) console.log("error");
		//submit form here if no error availble
		else {
            sendEmail(ev);
            history.push('/success_form');
            console.log("submitted");
        }
	};
    function sendEmail(ev){
        emailjs.sendForm(
            'service_lpzmtog',
            'template_fndbby5', 
            ev.target,
            'pSO-S4i9EtenLViU4'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err))
    }
    return (
        <div id="contact">
            <div className="contact sectionppage" >
                <center className="">
                    <h1>Contact
                    <span><hr className="underline" /></span>
                    </h1>
                    <p>Have a question or contributions?</p>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={submitForm} >
                                    <div className="contactdiv">
                                        <input type="text" placeholder="fullname" name="fullname" onChange={handleChange} className=" inputfield" />
                                        {errors ? <p className='error'> {errors.fullname }</p>: ""}
                                    </div>
                                    <div className="contactdiv">
                                        <input type="text" placeholder="Email" name="email" onChange={handleChange} className="inputfield" />
                                        {errors ? <p className='error'> {errors.email }</p>: ""}
                                    </div>
                                    <div className="contactdiv">
                                        <textarea type="text" rows="5" name="message" onChange={handleChange} placeholder="Write your message here"  className="textarea" ></textarea>
                                        {errors ? <p className='error'> {errors.message}</p>: ""}
                                    </div>
                                    <div className="contactdiv">
                                        <button type="submit" className="signUpButton" style={{marginTop:'30px', border:'none'}}>Submit</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )

}

export default Contact
