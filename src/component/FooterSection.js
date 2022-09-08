import React  from "react";

const FooterSection = ()=>{
    return(
 <footer className="footer_section section_bg_white">
  <div className="container footer_container">
    <div className="footer_col col-first">
      <a href="#" className="logo"><img src="./assets/images/logo.svg" alt /></a>
      <p className="paragraph">Making the world a better place through constructing elegant hierarchies.</p>
      <p className="paragraph">© 2024 Ayro UI. <br />
        Designed and Developed by <a href="#">Ayro UI</a></p>
    </div>
    <div className="footer_col link_list col-second">
      <div className="footer_sub_col">
        <h6>Solutions</h6>
        <ul>
          <li>Marketing</li>
          <li>Analytics</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="footer_sub_col ">
        <h6>Support</h6>
        <ul>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </ul>
      </div>
    </div>
    <div className="footer_col col-third">
      <h6>Subscribe</h6>
      <p className="paragraph mb-20">Subscribe to our newsletter for the latest updates</p>
      <div className="subscribe">
        <input type="text" placeholder="Email address" />
        <button><i className="fa-regular fa-envelope" /></button>
      </div>
    </div>
  </div>
</footer>

    )
}
export default FooterSection