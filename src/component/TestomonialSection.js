import React from "react";

const TestomonialSection = () => {
  return (
    <section
      id="testimonial_section"
      className="container_fluid testimonial_section section_bg_gray"
    >
      <div className="container">
        <div className="top_item">
          <button className="btn-outline mb-20">Customer Reviews</button>
          <h3 className="mb-20 h3-heading">Our Testimonials</h3>
          <p className="paragraph text-center mb-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="bottom_item">
          {/* Slider main container */}
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="slider_item swiper-slide">
                <div className="slider_item_content">
                  <p className="paragraph mb-30">
                    On the other hand denoun with righteous and disliks men who
                    are beguiled demorae momentc blinded by desire that can
                  </p>
                  <i className="fa-solid fa-quote-right" />
                </div>
                <div className="slider_item_author">
                  <img
                    className="author_avatar"
                    src="./assets/images/testimonial/author-1.jpg"
                    alt
                  />
                  <div className="author_desc">
                    <h5 className="author_name">Abhishek Kumar</h5>
                    <span className="author_role paragraph">Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="slider_item swiper-slide">
                <div className="slider_item_content">
                  <p className="paragraph mb-30">
                    On the other hand denoun with righteous and disliks men who
                    are beguiled demorae momentc blinded by desire that can
                  </p>
                  <i className="fa-solid fa-quote-right" />
                </div>
                <div className="slider_item_author">
                  <img
                    className="author_avatar"
                    src="./assets/images/testimonial/author-1.jpg"
                    alt
                  />
                  <div className="author_desc">
                    <h5 className="author_name">Abhishek Kumar</h5>
                    <span className="author_role paragraph">Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="slider_item swiper-slide">
                <div className="slider_item_content">
                  <p className="paragraph mb-30">
                    On the other hand denoun with righteous and disliks men who
                    are beguiled demorae momentc blinded by desire that can
                  </p>
                  <i className="fa-solid fa-quote-right" />
                </div>
                <div className="slider_item_author">
                  <img
                    className="author_avatar"
                    src="./assets/images/testimonial/author-1.jpg"
                    alt
                  />
                  <div className="author_desc">
                    <h5 className="author_name">Abhishek Kumar</h5>
                    <span className="author_role paragraph">Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="slider_item swiper-slide">
                <div className="slider_item_content">
                  <p className="paragraph mb-30">
                    On the other hand denoun with righteous and disliks men who
                    are beguiled demorae momentc blinded by desire that can
                  </p>
                  <i className="fa-solid fa-quote-right" />
                </div>
                <div className="slider_item_author">
                  <img
                    className="author_avatar"
                    src="./assets/images/testimonial/author-1.jpg"
                    alt
                  />
                  <div className="author_desc">
                    <h5 className="author_name">Abhishek Kumar</h5>
                    <span className="author_role paragraph">Web Designer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestomonialSection;
