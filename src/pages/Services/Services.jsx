import React from "react";

import "./services.css";

import shape1 from "../../assets/man.png";
import meet from "../../assets/Group 44.png";
import meet2 from "../../assets/Group 45.png";

// import Expect from "./Expect.jsx";
// import Stream from "./Stream";
import { Brand, CTA, Navbar } from "../../components";
import { Footer } from "../../containers";
import Reloc from "./Reloc";
import Stream from "../About/Stream";
import Itinerary from "./Itenari";
import Scroll from "../../components/SmoothScroll";

const Services = () => (
  <div className="services__expect-main">
    <Navbar />
    <div
      className="services__possiblity-main section__padding"
      //   style={{
      //     backgroundImage: `url(${image})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "contain",
      //   }}
    >
      <div className="services__possibility " id="possibility">
        <div className="services__possibility-content">
          <h1 className="gradient__text">
            The<span class="future"> Best </span> At Your Service
          </h1>
          <p>
            With fully educated Immigration advisors on staff, we offer
            specialized services and expert advising that sets us apart from the
            competiton
          </p>
        </div>
        <div className="services__possibility-image">
          <img src={shape1} alt="possibility" />
        </div>
      </div>

      <div className="services__secondContainer" id="possibility">
        <div className="services__second-left-text">
          <h1>Providing Assistance along the process</h1>
          <p>
            To improve your chances of obtaining an immigrant visa and alleviate
            any anxiety you may have about the migration process, FANUUN is here
            to lend a helping hand.
          </p>
        </div>
        <div className="services__second-right-image">
          <img src={meet} alt="man" />
        </div>
      </div>

      <div className="services__thirdContainer" id="possibility">
        <div className="services__third-left-image">
          <img src={meet2} alt="man" />
        </div>
        <div className="services__third-right-text">
          <h1>Visa Acquisition Process</h1>
          <p>
            The FANUUN team offers immigration options that may lead to one of
            the best countries to live permanently, along with through
            assistance and expert advice for all facets of the move, from
            developing a customized Case Map and gathering all supporting
            evidence to submitting an application.
          </p>
        </div>
      </div>
    </div>
    <Reloc />
    <Itinerary />
    <Stream />
    <CTA />
    {/* <Scroll /> */}
    <Brand />
    <Footer />
  </div>
);

export default Services;
