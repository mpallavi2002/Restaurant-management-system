import React, { Component } from "react";

import '../styles/TeamPage.css';


const TeamMember = ({ name, image }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

export default class TeamPage extends Component {
  render() {
    const teamMembers = [
      { name: "Pallavi Mishra", image: "/pallavi.jpg" },
      { name: "Sudarshan Paudel", image: "/sudarshan.png" },
      { name: "Kshitiz Kapri", image: "/kshitiz.png" },
      { name: "Mehar Ohri,", image: "/mehar.png" },
      { name: "Chetan Pal", image: "/chetan.png" },
      { name: "Arun Bhandari", image: "/arun.png" }
    ];

    return (
      <div>
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-row">
            {teamMembers.slice(0, 3).map((member) => (
              <TeamMember key={member.name} name={member.name} image={member.image} />
            ))}
          </div>
          <div className="team-row">
            {teamMembers.slice(3).map((member) => (
              <TeamMember key={member.name} name={member.name} image={member.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
