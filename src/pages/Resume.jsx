import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Me from "../assets/me.jpeg";
import { AnimatedHeader } from "../components/AnimateHeader";
import { experienceConfig } from "../config/resume/experienceConfig";
import { technicalSkillsConfig } from "../config/resume/technicalSkillsConfig";
import { transferrableSkillsConfig } from "../config/resume/transferrableSkillsConfig";

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div
        className="projects__text-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <AnimatedHeader className={"projects__header"} headerText={"Resume"} />
      </div>
      <div className="resume__wrapper">
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__image">
            <img src={Me} alt="" />
          </div>
          <div>
            <div className="resume__name playfair">Nikka Alviar</div>
            <div className="resume__title lato">Software Engineer</div>
            <div className="resume__contact--info">
              <div>
                <FaDownload />
                <a className="resume__link" href="/Nikka_Alviar_Resume.pdf" target="_blank">
                  Download Resume
                </a>
              </div>
              <div>
                <MdEmail />
                <a
                  className="resume__link"
                  href="mailto:nikka_alviar@outlook.com"
                >
                  Email
                </a>
              </div>
              <div>
                <AiFillLinkedin />
                <a
                  className="resume__link"
                  href="https://www.linkedin.com/in/nikka-alviar"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              I am a proactive and detail-oriented Frontend Developer, actively
              seeking a Junior role. My technical skills encompass HTML, CSS,
              JavaScript, React, TypeScript, Next.JS, Redux, Bootstrap, Angular,
              and more. I have a track record of successfully managing agile
              projects, implementing payment gateways, and enhancing user
              experiences in my previous roles. In addition to my technical
              expertise, I bring a range of valuable soft skills to the table.
              <br />
              <br />
              My strong problem-solving abilities, excellent communication
              skills, and a keen eye for user-centric design have consistently
              driven project success. I thrive in collaborative environments,
              and my adaptability and time management ensure efficient project
              delivery. With a solid academic background in Information
              Technology and practical training from the Frontend Simplified
              Bootcamp, I am well-prepared to contribute to innovative web
              development projects, driving user engagement and revenue growth.
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Education</div>
          <div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  Honours Bachelor of Arts, Information Technology Major
                </div>
                <div className="resume__job--location">York University</div>
                <div className="resume__job--name">
                  Web Application Development
                </div>
                <div className="resume__job--location">
                  Frontend Simplified Bootcamp
                </div>
              </div>
              <div className="resume__job--date"></div>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Experience</div>
          <div>
            {experienceConfig.map((experience, index) => (
              <div className="resume__job--wrapper" key={index}>
                <div className="resume__job">
                  <div>
                    <div className="resume__job--name">{experience.name}</div>
                    <div className="resume__job--description">
                      {experience.title}
                    </div>
                  </div>
                  <div className="resume__job--date">{experience.date}</div>
                </div>

                <ul className="resume__list-wrapper">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Technical Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {technicalSkillsConfig.map((technicalSkills, index) => (
                  <li key={index}>{technicalSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Transferrable Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {transferrableSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="resume__grid resume__bottom"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="resume__title--description">References</div>
          <div>Available Upon request</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
