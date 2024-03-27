import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer section grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-down">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
          </div>
          <div className="socials flex" data-aos="fade-up">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks" data-aos="fade-left">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-left">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-left">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+91 1800 656 969</span>
          <span className="email">travelHere@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
