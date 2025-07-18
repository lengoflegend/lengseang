import React from 'react'
import './Footer.css'
import footer_logo from '../../../assets/Leng-logo.png'
import user_icon from '../../../assets/contact-icon.svg'

const Footer = () => {
  return (
    <div id='footer' className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatibus, quos quod numquam sed eum hic ullam.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                    
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2027 Leng Seang, All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Poolicy</p>
                <p>Connecr with me</p>
            </div>

        </div>
    </div>
  )
}

export default Footer