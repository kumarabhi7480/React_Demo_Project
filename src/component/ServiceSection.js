import React from "react";
import TopItem from "./TopItem";

import ServiceCard from "./ServiceCard";
const ServiceSection = () => {
  return (
    <section
      id="service_section"
      className="container_fluid service_section section_bg_white"
    >
      <div className="container">
        <TopItem
          btnHeading="Services"
          title="Our Best Services"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />

        <div className="bottom_item">
          <ServiceCard
          icon= "fa-pills"
            title="Refreshing Design"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>

                    <ServiceCard
                    icon = "fa-laptop"
            title="Web Devloper"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>
                    <ServiceCard
                    icon = "fa-laptop"
            title="App Devloper"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>
                    <ServiceCard
                    icon = "fa-laptop"
            title="Refreshing Design"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>
                    <ServiceCard
                    icon = "fa-laptop"
            title="Refreshing Design"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>
                    <ServiceCard
                    icon = "fa-laptop"
            title="Refreshing Design"
            desc="Lorem ipsum coliur sit anu tkjsiosf edit
                imorjor iishi jsij"/>
                                    
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
