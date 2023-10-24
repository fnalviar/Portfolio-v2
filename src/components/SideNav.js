import { useState } from "react";

function SideNav() {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div
        className={`nav__burger ${openNav ? "open" : ""}`}
        onClick={handleNav}
      >
        <div className="nav__burger-bar"></div>
        <div className="nav__burger-bar"></div>
        <div className="nav__burger-bar"></div>
      </div>
      <nav className={openNav ? "open" : ""}>
        <div className="nav__container">
          <div className="nav__list">
            <a href="#about" onClick={handleNav}>
              About
            </a>
            <a href="#skills" onClick={handleNav}>
              Skills
            </a>
            <a href="#projects" onClick={handleNav}>
              Projects
            </a>
            <a href="#contact" className="hide-mobile" onClick={handleNav}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
