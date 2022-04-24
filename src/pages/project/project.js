import React, {useState,useEffect} from 'react';
import data from './data/data.js';
import './project.css';
import WOW from 'wowjs';
import {NavLink }from 'react-router-dom';
import project from './data/data.js';

const Project=()=>{
    // const [posts, setPosts] = useState([]);
   

    // useEffect(()=>{
    //     const posts = project;
    //     setPosts(posts);
    // }, [posts]);

    
    return (
        <div className="project sectionppage" id="project">
            <center className="">
                <h1 >Projects
                <span><hr className="underline" /></span>
                </h1>
                <h6  className="WOW flipInY" data-wow-iteration="5">All</h6>
            </center>
            <div className="container">
                <div className="portfolio">
                    {data.map(data=>{
                            return<div className="portfolio-container" key={data.id}>
                                <img src= {data.dataImage} className="portfolio-image"/>
                                    <div className="portfolio-hover" >
                                        <center>
                                            <p className="wow slideInDown" >{data.temmy}<br />
                                            <span>{data.code}</span>
                                            </p>
                                            <a href={data.url} className="sidebarNavlink" style={{textDecoration:"none"}} >
                                                <div className="portfolio-btn">
                                                    View site
                                                </div>
                                            </a>
                                        </center>
                                    </div>                    
                                </div>
                        })
                    }
                    <div className=""key={data.id}>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project

