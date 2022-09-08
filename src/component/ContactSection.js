import React from "react";

const  ContactSection = ()=>{
    return(
<section id="contact_section" className="container_fluid contact_section">
  <div className="container contact-us">
    <div className="contact-details">
      <div>
        <i className="fa-solid fa-phone fa-2x" />
        <div className="call">
          <h4>Contact</h4>
          <p>07847593877 <br />
            yourmail@gmail.com</p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-location-dot fa-2x" />
        <div className="call">
          <h4>Address</h4>
          <p>175 5th Ave, New York, NY 10010
            United States</p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-clock-desk fa-2x" />
        <div className="call">
          <h4>Schedule</h4>
          <p>24 Hours / 7 Days Open
            Office time: 10 AM - 5:30 PM</p>
        </div>
      </div>
    </div>
    <div className="email-details">
      <div className="email-intro">
        <div>
          <h4>Get in Touch</h4>
        </div>
        <div className="email-des">
          <h1>Ready to Get Started</h1>
        </div>
        <div className="email-desc">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="address-details">
        <div className="name-mail">
          <div>
            <input type="text" name id placeholder="Name" />
          </div>
          <div>
            <input type="email" name id placeholder="Email" />
          </div>
        </div>
        <div className="name-mail">
          <div>
            <input type="number" placeholder="Phone" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="msg">
          <textarea name id cols={30} rows={10} placeholder="Type Message" defaultValue={""} />
        </div>
        <div id="btn">
          Send Message
        </div>
      </div>
    </div>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2043746055656!2d85.52755641493367!3d25.19632938389666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f5cfda7f06a1%3A0x21e6135a250dd91d!2sForago!5e0!3m2!1sen!2sin!4v1657899189814!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" />
</section>

    )
}

export default ContactSection