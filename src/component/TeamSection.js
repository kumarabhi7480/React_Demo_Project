import React  from "react";
import TopItem from "./TopItem";
const TeamSection = ()=>{

    return(
     <section id="team_section" className="container_fluid team_section section_bg_white">
  <div className="container">
  <TopItem
          btnHeading="Our Team"
          title="Our Creative Team"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />
    <div className="bottom_item">
        
      <div className="team_card">
        <img src="./assets/images/team/team-1.jpg" alt />
        <div className="card_content">
          <h4 className="team_name">Jeffery Riley</h4>
          <p className="team_role">Art Director</p>
        </div>
      </div>
      <div className="team_card">
        <img src="./assets/images/team/team-2.jpg" alt />
        <div className="card_content">
          <h4 className="team_name">Jeffery Riley</h4>
          <p className="team_role">Art Director</p>
        </div>
      </div>
      <div className="team_card">
        <img src="./assets/images/team/team-3.jpg" alt />
        <div className="card_content">
          <h4 className="team_name">Jeffery Riley</h4>
          <p className="team_role">Art Director</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default TeamSection