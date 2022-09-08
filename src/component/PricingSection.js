import React from "react";
import TopItem from "./TopItem";
const PricingSection = ()=>{
    return(
    <section id="pricing_section " className="container_fluid pricing_section section_bg_gray">
  <div className="container">

  <TopItem
          btnHeading="Pricing"
          title="Pricing & Plans"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />

    <div className="bottom_item">
      <div className="pricing_card">
        {/* <button class="btn-outline mb-30">Starter</button>
              <p class="mb-30 paragraph">Lorem Ipsum is simply dummy text of the printing and industry.</p> */}
        <div className="top_item">
          <button className="btn-outline mb-30">Pricing</button>
          <p className="paragraph text-center mb-20">Lorem Ipsum is simply dummy text of the printing and
            industry.</p>
        </div>
        <span className="mb-30 price"> <sup className="sup">$</sup>0<sub>/mo</sub> </span>
        <center><button className="mb-30 price_btn">Start free trial</button></center>
        <ul>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Cras justo odio.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Dapibus ac facilisis in.</li>
          <li><i className="fa-regular fa-circle-check" /> Morbi leo risus.</li>
          <li><i className="fa-regular fa-circle-check" /> Excepteur sint occaecat velit.</li>
        </ul>
      </div>
      <div className="pricing_card box-shadow">
        <div className="top_item">
          <button className="btn-outline mb-30">Starter</button>
          <p className="paragraph text-center mb-20">Lorem Ipsum is simply dummy text of the printing and
            industry.</p>
        </div>
        <span className="mb-30 price"> <sup className="sup">$</sup>0<sub>/mo</sub> </span>
        <center><button className="mb-30 price_btn">Start free trial</button></center>
        <ul>
          <li><i className="fa-regular price_point_active  fa-circle-check" /> Cras justo odio.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Dapibus ac facilisis in.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Morbi leo risus.</li>
          <li><i className="fa-regular fa-circle-check" /> Excepteur sint occaecat velit.</li>
        </ul>
      </div>
      <div className="pricing_card">
        <div className="top_item">
          <button className="btn-outline mb-30">Pricing</button>
          <p className="paragraph text-center mb-20">Lorem Ipsum is simply dummy text of the printing and
            industry.</p>
        </div>
        <span className="mb-30 price"> <sup className="sup">$</sup>0<sub>/mo</sub> </span>
        <center><button className="mb-30 price_btn">Start free trial</button></center>
        <ul>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Cras justo odio.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Dapibus ac facilisis in.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Morbi leo risus.</li>
          <li><i className="fa-regular price_point_active fa-circle-check" /> Excepteur sint occaecat velit.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    )
}

export default PricingSection