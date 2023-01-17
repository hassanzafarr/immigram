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
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>

        <input
          type="text"
          class="form__input"
          id="name"
          placeholder="Email"
          required=""
        />
        <button type="button">Subscribe</button>
      </div>
      <div className="immi__footer-links_div">
        <h4>Home</h4>
        <p>About us</p>
        <p>Solutions</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Email</h4>
        <p>info@fanuun.com </p>
        <p>Info</p>
        <p>Privacy Policies</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Get in touch</h4>
        <p>Karachi / Dubai / Vancouver</p>
        <p>+0016478734235</p>
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
        <div>
          <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
