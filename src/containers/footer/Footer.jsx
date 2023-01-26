import React from "react";
import image from "../../assets/Group28.png";

import "./footer.css";
import { facebook, instagram, linkedin, telegram } from "./import";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;
const Footer = () => (
  <div
    className="immi__footer section__padding"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <div className="immi__footer-links">
      <div className="immi__footer-links_logo">
        <p>Subscribe for our new letter</p>

        <input
          type="text"
          class="form__input"
          id="name"
          placeholder="Email"
          required=""
        />
        <button type="button">Subscribe</button>
        <br />
        <p>By filling out the form you agree with our Terms and Conditions</p>
      </div>

      <div className="immi__footer-links_div">
        <h4>Home</h4>
        <p>About us</p>
        <p>Services</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Email</h4>
        <p>info@fanuun.com </p>
        <p>Info</p>
        <p>Privacy Policies</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Get in touch</h4>
        <p>Karachi</p>
        <p>Dubai</p>
        <p>Vancouver</p>
        <p>Whatsapp us</p>
        <p>+1(647)873-4235</p>
      </div>
    </div>

    <div className="immi__footer-copyright">
      <p>Follow Us</p>
      <div className="immi__social ">
        <div>
          <img src={facebook} alt="facebook" />
        </div>
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
