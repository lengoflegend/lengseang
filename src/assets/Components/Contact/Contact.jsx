import React from 'react'
import './Contact.css'
import theme_pattern from '../../../assets/Wave.png'
import mail_icon from '../../../assets/mail-icon.svg'
import telegram_icon from '../../../assets/telegram-icon.svg'
import call_icon from '../../../assets/call-icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "12a10d52-3a24-4f93-ba32-37ae54e3d8d1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out for business inquiries, project discussions, or partnership opportunities. I usually reply within 24 hours.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>khemseangleng@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={telegram_icon} alt="" /><p>@LegendOfLeng</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+855 999 999 999</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact