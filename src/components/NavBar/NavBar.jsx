import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";


import s from "./NavBar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Always use the main logo (ignore path-based logic)
    setLogo("/tlclogo.png");
  }, [location]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <div className={s.navbar_logo}>
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} className={s.navbar_logo_img} alt="Logo" />
        </Link>
      </div>

      <Link className={s.privacyLink} to="/PrivacyPolicy">
        Privacy Policy
      </Link>

      <div
        className={`${s.toggle_button} ${isOpen ? s.open : ""}`}
        onClick={toggleSidebar}
      >
        <span className={s.bar}></span>
        <span className={s.bar}></span>
        <span className={s.bar}></span>
      </div>

      <motion.div
        className={s.sidebar}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={s.menuContent}>
          <ul>
            <li className={s.mainMenuItem}>
              <Link to="/" onClick={handleLinkClick} className={s.mainMenuLink}>
                Home
              </Link>
            </li>
            <li className={s.mainMenuItem}>
              <a
                href="https://www.thelogicalchoice.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={s.mainMenuLink}
              >
                TLC
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className={s.overlay}
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
};

export default Navbar;
