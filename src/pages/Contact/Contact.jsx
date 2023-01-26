import React from "react";

import "./contact.css";
import shape5 from "../../assets/Group 46.png";
import line from "../../assets/line.png";
import { Brand, Navbar } from "../../components";
import { Footer } from "../../containers";
import Scroll from "../../components/SmoothScroll";
const Contact = () => (
  <div className="contact__main-container">
    <Navbar />
    <div
      className="contact__possiblity-main section__padding"
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="contact__possibility " id="possibility">
        <div className="contact__possibility-content">
          <h1 className="gradient__text">
            <span class="future"> Reach </span> Out to{" "}
            <span class="future"> Us</span>
          </h1>
        </div>
        <div className="contact__possibility-image">
          <img src={shape5} alt="possibility" />
        </div>
      </div>

      <div className="contact__section-ability">
        <div className="contact__section-ability-content">
          <h1 style={{ color: "#060056" }}>
            Want to schedule an appointment? Have any question or queries? We're
            always here to help!
          </h1>
          <p>
            Please reach out to us by Whatsapp at
            <span class="future"> +1(647)873-4235 </span> or email us at
            <span class="future"> info@fanuun.com</span>
          </p>
        </div>
      </div>
    </div>
    <Brand />
    {/* <Scroll /> */}
    <Footer />
  </div>
);

export default Contact;
