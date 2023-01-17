import React from "react";

import image from "../../assets/line.png";

import "./provide.css";

import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
import shape3 from "../../assets/shape3.png";
import shape4 from "../../assets/shape4.png";
import shape5 from "../../assets/shape5.png";

const Provide = () => (
  <div
    className="immi__possiblity-main section__padding"
    // style={{
    //   backgroundImage: `url(${image})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    // }}
  >
    <div className="immi__possibility-content-heading ">
      <h1 className="gradient__text">
        Why do people choose <br /> Fanuun for immigration
      </h1>
    </div>
    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Highest success rate</h1>
        <p>
          We know what to look for and how to best frame your prior work
          experience. The success of your relocation request depends on your
          abilty to present your case as a captivating narrative rather than a
          collection of documents.
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={shape1} alt="possibility" />
      </div>
    </div>

    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Customized surveys and feedbacks</h1>
        <p>
          When communicating with customers, we use a common lexicon. Following
          your input, the system will compile the guidelines and prompts you
          need to succeed.
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={shape2} alt="possibility" />
      </div>
    </div>

    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Data- driven solutions</h1>
        <p>
          Comprehensive case studies and technical expertise inform an unique
          rating system, guides and tactics
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={shape3} alt="possibility" />
      </div>
    </div>

    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Guided process</h1>
        <p>
          Data-driven suggestions on every single step of your case. Our expert
          guides, case and documents examples, and tips will support you along
          the way. You won't feel lost wondering what you should write or what
          document you have to submit
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={shape4} alt="possibility" />
      </div>
    </div>
  </div>
);

export default Provide;
