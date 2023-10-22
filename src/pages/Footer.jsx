import React from "react";
import FooterLogo from "../assets/footer-logo.svg";
import { AiFillFilePdf } from "react-icons/ai";
import { MdOutlineArrowUpward } from "react-icons/md";
import { GithubIcon, LinkedInIcon, MailIcon } from "../components/Icons";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="copyright">Copyright  <span className="copyright__icon">&copy; </span>2023 Nikka Alviar</div>
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/fnalviar">
            <GithubIcon />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/nikka-alviar">
            <LinkedInIcon />
          </a>
        </div>
        <div>
          <a target="_blank" href="mailto:nikka_alviar@outlook.com" className="mailIcon">
            <MailIcon />
          </a>
        </div>
        <div>
          <a className="icons__svg" target="_blank" href="/resume.pdf">
            <AiFillFilePdf />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
