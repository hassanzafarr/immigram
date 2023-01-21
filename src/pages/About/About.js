import React from "react";

import "./about.css";

import shape1 from "../../assets/about1.png";
import shape2 from "../../assets/about2.png";
import Expect from "./Expect.jsx";
import Stream from "./Stream";
import { Brand, CTA, Navbar } from "../../components";
import { Footer } from "../../containers";

const About = () => (
  <div className="about__expect-main">
    <Navbar />
    <div
      className="about__possiblity-main section__padding"
      //   style={{
      //     backgroundImage: `url(${image})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "contain",
      //   }}
    >
      <div className="about__possibilitytop " id="possibility">
        <div className="about__left-text">
          <h1>
            <span class="future">Designing</span> Strategies <br />
            For Addressing <br /> <span class="future">Immigration </span>
            Problems
          </h1>
        </div>
        <div className="about__right-text">
          <p>
            For almost 40 years, our immigrations consulting organizations has
            been helping people just like you, Everything from registering your
            business and locating recruiters or the proper personnel to advising
            the best immigration program and assisting with community
            integration is within reach, Here at Fanuun, We are commited to
            helping you overcome the difficulties you may face as you prepare
            for, undertake, and recover from an international relocation.
          </p>
        </div>
      </div>

      <div className="about__possibility " id="possibility">
        <div className="about__possibility-image">
          <img src={shape1} alt="possibility" />
        </div>
        <div className="about__possibility-content">
          <h1 className="gradient__text">Highest success rate</h1>
          <p>
            We know what to look for and how to best frame your prior work
            experience. The success of your relocation request depends on your
            abilty to present your case as a captivating narrative rather than a
            collection of documents.
          </p>
        </div>
      </div>

      <div className="about__possibilitytwo " id="possibility">
        <div className="about__possibility-content">
          <h1>Why Fanuun</h1>
          <p>
            We are here for you every step of the journey, and out decades of
            experience will gurantee that you receive the best advice possible
          </p>

          <h2>Accurate Guidance</h2>
          <p>
            Our business consultants, attorneys, accountants, and SME's come
            from a variety of industries in order to assist and support you
          </p>

          <h2>Asserting Out Presence</h2>
          <p>
            With out existing presence in Canada, the United States, the United
            Kingdom, the Middle East, and South Asia, as well as out imminent
            expansion plans to new regions and we are able to reach the right
            individuals for the right programs around the worlds
          </p>
        </div>
        <div className="about__possibility-image">
          <img src={shape2} alt="possibility" />
        </div>
      </div>
    </div>
    <Expect />
    <Stream />
    <CTA />
    <Brand />
    <Footer />
  </div>
);

export default About;
