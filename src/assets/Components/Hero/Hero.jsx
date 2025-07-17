import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/Leng_simple_no_bg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    
    <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm LengSeang, </span>frontend developer Basesd in Cambodia.</h1>
        <p>I'm a frontend devceloper from Phnompenh, Cambodia with 0 years or exerience</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect With Me
              </AnchorLink>
            </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero