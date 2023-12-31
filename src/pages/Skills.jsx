import React from "react";
import { AnimatedHeader } from "../components/AnimateHeader";
import { skillsConfig } from "../config/skillsConfig";

function Skills({ selectedSkills }) {
  const filteredSkills = skillsConfig.filter((skill) =>
    selectedSkills.includes(skill.text)
  );

  return (
    <div className="container" id="skills">
      <div data-aos="fade-up" data-aos-delay="300">
        {filteredSkills.length > 0 ? (
          <AnimatedHeader
            className={"skills__header--center"}
            headerText={"Technologies Used"}
          />
        ) : (
          <AnimatedHeader
            className={"skills__header--center"}
            headerText={"Tech-Stack"}
          />
        )}
      </div>
      <div className="skills__button--wrapper">
        {filteredSkills.length > 0
          ? filteredSkills.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay="300"
                className={`skill__buttons`}
                style={{ color: item.color }}
              >
                {item.icon}
                <div className="skills__button--d-block">{item.text}</div>
              </div>
            ))
          : selectedSkills.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay="300"
                className={`skill__buttons`}
                style={{ color: item.color }}
              >
                {item.icon}
                <div className="skills__button--d-block">{item.text}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Skills;
