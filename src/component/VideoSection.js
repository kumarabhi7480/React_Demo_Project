import React from "react";
import TopItem from "./TopItem";
const VideoSection = ()=>{
    return (
<section id="video_intro_section" className="container_fluid video_intro_section section_bg_gray">
  <div className="container">
  <TopItem
          btnHeading="Our Intro Video"
          title="Watch Our Promo Video"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />
    <div className="bottom_item">
      <img src="./assets/images/video/video-bg.png" alt />
      <div className="play_btn">
        <i className="fa-solid fa-play" />
      </div>
    </div>
  </div>
</section>

    );
}

export default VideoSection 