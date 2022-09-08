import React  from "react";
import TopItem from "./TopItem";
import ClientSecton from "./ClentSection";
const  ClientLogo = ()=>{
    return(
<section className="client-logo"> 
  <div className="container">
  <TopItem
          btnHeading="latest News"
          title="Latest News & Blog"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />
    <div className="bottom_item">
      <div className="client-sec">
        <div className="client-1">
        <ClientSecton
        img= "./assets/images/client-logo/graygrids.svg" />
         <ClientSecton
        img= "./assets/images/client-logo/uideck.svg" />
            <ClientSecton
        img= "./assets/images/client-logo/ayroui.svg" />
        </div>
        <div className="client-1">
        <ClientSecton
        img= "./assets/images/client-logo/lineicons.svg" />
         
         <ClientSecton
        img= "./assets/images/client-logo/tailwindtemplates.svg" />
                 <ClientSecton
        img= "./assets/images/client-logo/ecomhtml.svg" />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ClientLogo