import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footerContent">
          <div className="leftSection">
            <ul className="items">
              <li className="item">Policy</li>
              <li className="item">Policy</li>
              <li className="item">Policy</li>
              <li className="item">Policy</li>
              <li className="item">Policy</li>
            </ul>
          </div>
          <div className="centerSection">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae eaque aspernatur excepturi exercitationem sit
            ad dolore quas eius voluptates.
          </div>
          <div className="rightSection">
            <div className="inputbox">
              <input type="email" placeholder="E-Mail Address" />
              <button>Subscribe</button>
            </div>
            <div className="socialMediaLinks">
              <div className="link" title="FaceBook">
                <FaFacebookF />
              </div>
              <div className="link" title="Instagram">
                <FaInstagram />
              </div>
              <div className="link" title="Twitter">
                <FaTwitter />
              </div>
              <div className="link" title="Linkedin">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
