
import React from "react";

const TopItem = ({btnHeading,title,desc} )=>{
    return(
        <div className="top_item">
        <button className="btn-outline mb-20">{btnHeading }</button>
        <h3 className="mb-20 h3-heading">{title} </h3>
        <p className="paragraph text-center mb-20">{desc}</p>
      </div>
    );
}

export default TopItem

