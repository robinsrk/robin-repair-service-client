import { MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import Skill from "../Skill/Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="text-center mt-5 mb-5">
      <h1 className="purple-text font-weight-bold mt-5">Why Choose Us</h1>
      <h5>
        There are dozens of reasons why our clients choose "Robin Repair" as
        their
        <br />
        computer service provider of choice.
      </h5>
      <div className="d-flex justify-content-center mb-5">
        <MDBRow
          style={{ marginBottom: "150px", marginTop: "150px" }}
          className="mt-5 "
        >
          {skills.map((skill) => (
            <Skill
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </MDBRow>
      </div>
    </div>
  );
};
export default Skills;
