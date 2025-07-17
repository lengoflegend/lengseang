import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/Wave.png'
import profile_img from '../../../assets/Leng_whitebg.png'

const About = () => {
  return (
    <div id='about'className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente molestias, animi voluptate facere repellendus ipsam quam suscipit quaerat dolores? Necessitatibus corporis vel reprehenderit! Accusantium autem est ea, fugit tenetur illo?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde, facere corporis ducimus expedita cum, nesciunt ab quia enim alias itaque voluptatem saepe hic odio excepturi perferendis asperiores eaque possimus.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p>
                        <hr style={{width:"50%"}}/>
                    </div>

                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>0+</h1>
            
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>1+</h1>
                <p>PROJECT COMPLETED</p>
                
            </div>
            <hr />
            <div className="about-achivement">
                <h1>0+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
           
        </div>
    </div>
  )
}

export default About