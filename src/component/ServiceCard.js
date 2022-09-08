
import React from "react";

const ServiceCard = ({title, desc,icon})=>{

    return(

  <div className="service_card">
  <div className="service_card_icon mb-25">
    <i className={`fa-solid ${icon}`} /></div>
  <h4 className="mb-25">{title}</h4>
  <p className="paragraph">{desc}</p>
</div>


    );
}
export default ServiceCard