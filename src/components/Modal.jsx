import { BsArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Skills from "../pages/Skills";

function Modal({ isOpen, project, closeHandler }) {
  const summaristTechSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Stripe",
    "Firebase",
    "Vercel",
  ];
  const nftTechSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Firebase",
    "Vercel",
  ];
  const netflixTechSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Redux",
    "Stripe",
    "Firebase",
    "Vercel",
    "TailWind",
  ];

  if (isOpen) {
    return (
      <div className="modal__container">
        <div className="modal__close" onClick={() => closeHandler()}>
          <CgClose />
        </div>
        <div className="modal__top--background">
          <div className="modal__top">
            <div className="modal__top--image">
              <img src={project.topImage} alt="" />
            </div>
            <div className="modal__scroll-down">Scroll down</div>
          </div>

          <div className="modal__project--background">
            <div className="modal__project--wrapper">
              <div className="modal__title playfair">{project.title}</div>
              <div className="modal__type">{project.type}</div>
              <div className="modal__description">{project.description}</div>
              <div className="modal__view--button-wrapper ">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="modal__view-online--button playfair"
                >
                  View Online <BsArrowRight />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="modal__view-online--button playfair"
                >
                  View Github <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__grid--wrapper">
          <div className="modal__grid--left modal__grid">
            <div className="modal__grid--image">
              <img src={project.firstImage} alt="" />
            </div>
            <div></div>
          </div>
          <div className="modal__grid--right modal__grid">
            <div></div>
            <div className="modal__grid--image">
              <img src={project.secondImage} alt="" />
            </div>
          </div>
          <div className="modal__grid--middle modal__grid">
            <div></div>
            <div className="modal__grid--image">
              <img src={project.thirdImage} alt="" />
            </div>
          </div>
        </div>
        <div className="modal__project__tech--wrapper">
          {project.title === "Summarist" ? (
            <Skills selectedSkills={summaristTechSkills} />
          ) : project.title === "NFT Marketplace" ? (
            <Skills selectedSkills={nftTechSkills} />
          ) : (
            project.title === "Netflix Clone" && (
              <Skills selectedSkills={netflixTechSkills} />
            )
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
