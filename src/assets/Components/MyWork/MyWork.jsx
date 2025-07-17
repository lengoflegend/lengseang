import React from 'react'
import './MyWork.css'
import theme_pattern from '../../../assets/Wave.png'
import MyWork_Data from '../../mywork_data'
import arrow_icon from '../../../assets/right-arrow.svg'

const MyWork = () => {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        
        <div className="mywork-container">
            {MyWork_Data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
                


            })}
            

        </div>
        <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
    </div>
  )
}

export default MyWork