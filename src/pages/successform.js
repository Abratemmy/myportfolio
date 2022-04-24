import React from 'react'
import { NavLink } from 'react-router-dom';
import {Link } from 'react-scroll';

function Successform() {
  return (
    <div className='successform'>
        <div className="container">
            <div className='success-container'>
                <h2>Thank you for contacting me</h2>
                <p>Your response has been submitted successfully. I'll get back to you soon</p>

                <div className='success-but'>Go To <NavLink to= '/' className="success-btn">Home</NavLink></div>
            </div>
        </div>
    </div>
  )
}

export default Successform