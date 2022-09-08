
import React from "react";
import TopItem from "./TopItem";
const PortfolioSection  =() =>{
    return (
<section id="portfolio_section " className="container_fluid portfolio_section section_bg_white">
  <div className="container">

<TopItem 
btnHeading ="Our Portfolio" 
title = "Our Recent Works" 
desc = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
    <div className="bottom_item">
      <nav className="tab_bar">
        <ul>
          <li className="tab_active">All Work</li>
          <li>Branding</li>
          <li>Marketing</li>
          <li>Planning</li>
          <li>Research</li>
        </ul>
      </nav>
      <div className="tab_content">
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
        <div className="tc_card">
          <div className="img_box">
            <img className src="./assets/images/portfolio/pf1.jpg" alt />
            <div className="img_hover_box">
              <div className="icon_box_group">
                <div className="icon_box" style={{marginRight: 15}}>
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
                <div className="icon_box">
                  <i className="fa-solid fa-link" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="tc_card_heading ">Graphics Design</h4>
          <p className="paragraph">Short description for the ones who look for something new. Awesome!</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default PortfolioSection;