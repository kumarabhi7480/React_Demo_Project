
import React from "react";

const ContentBox = ({img,logo,logotitle,title,desc})=>{
    return(
        <div className="content_box">
        <div className="img_box">
        <img src={img} alt />
          <div className="img_box__content">
           
            <img src= {logo} alt />
            <span>{logotitle}</span>
          </div>
        </div>
        <h4>{title} </h4>
        <p className="paragraph">{desc} </p>
      </div>
    )
}


export default ContentBox