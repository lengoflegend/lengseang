import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../../assets/Leng-logo.png'
import underline from '../../../assets/Wave.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../../assets/menu_open.svg'
import menu_close from '../../../assets/menu_close.svg' 



const Navbar = () => {


  const [menu,SetMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    // if right - 0 menu will diaplay in smaller screen yeah remember
    menuRef.current.style.right="0"; 
  }
  const closeMenu = () => {
   
    menuRef.current.style.right="-350px"; 
  }

  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt="" />

        <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/> 
      

        <ul ref={menuRef}className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>SetMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>SetMenu("about")}>About Me</p></AnchorLink>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>SetMenu("services")}>Services</p></AnchorLink>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>SetMenu("work")}>Portfolio</p></AnchorLink>{menu=='work'?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>SetMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>

        </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
          
        </div>
        

    </div>
  )
}

export default Navbar