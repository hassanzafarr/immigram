
import React from "react";



import "./about.css";
import shape5 from "../../assets/shape5.png";
import shape1 from "../../assets/about1.png";
import shape2 from "../../assets/about2.png";
import Expect from "./Expect.jsx";
import Stream from "./Stream"
import { Brand, CTA } from "../../components";



const About = () => (
  <div className="fanuun__expect-main">
    <div
      className="fanuun__possiblity-main section__padding"
    //   style={{
    //     backgroundImage: `url(${image})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
    //   }}
    >
      <div className="fanuun__possibilitytop " id="possibility">
        <div className="fanuun__possibility-content">
          <h1 className="gradient__text">
            Streamlining the immigration process for you
          </h1>
          <p>
            Facilitating the adaptation, We assist you in shaping your future and
            simplify your experience. Out expensive clientele continues to expand,
            and we look forward to establishing a benchmark in the immigration and
            Visa services market and pursuit of possibilities of immigrants
          </p>
        </div>
        <div className="fanuun__right-text">
          <p>
            Facilitating the adaptation, We assist you in shaping your future and
            simplify your experience. Out expensive clientele continues to expand,
            and we look forward to establishing a benchmark in the immigration and
            Visa services market and pursuit of possibilities of immigrants
          </p>
        </div>
      </div>



      <div className="fanuun__possibility " id="possibility">
        <div className="fanuun__possibility-image">
          <img src={shape1} alt="possibility" />
        </div>
        <div className="fanuun__possibility-content">
          <h1 className="gradient__text">Highest success rate</h1>
          <p>
            We know what to look for and how to best frame your prior work
            experience. The success of your relocation request depends on your
            abilty to present your case as a captivating narrative rather than a
            collection of documents.
          </p>
        </div>

      </div>

      <div className="fanuun__possibilitytwo " id="possibility">

        <div className="fanuun__possibility-content">
          <h1>Why Fanuun</h1>
          <p>
            We are here for you every step of the journey, and out decades of experience will gurantee that you receive the best advice possible
          </p>

          <h2>Accurate Guidance</h2>
          <p>
            Our business consultants, attorneys, accountants, and SME's come from a variety of industries in order to assist and support you
          </p>


          <h2>Asserting Out Presence</h2>
          <p>
            With out existing presence in Canada, the United States, the United Kingdom, the Middle East, and South Asia, as well as out imminent expansion plans to new regions and we are able to reach the right individuals for the right programs around the worlds
          </p>
        </div>
        <div className="fanuun__possibility-image">
          <img src={shape2} alt="possibility" />
        </div>
      </div>
    </div>
    <Expect />
    <Stream />
    <CTA />
    <Brand />
  </div>

);

export default About;
