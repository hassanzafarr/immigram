import React from "react";
import "./itenari.css";
import { Feature } from "../../components/feature/Feature";
export const Itinerary = () => {
  return (
    <div className="fanuun__main_section section__margin">
      <div className="fanuun__itinerary-content-heading ">
        <h1 className="gradient__text">
          Why do people choose <br /> Fanuun for immigration?
        </h1>
      </div>
      <div className="gpt3__whatgpt3 " id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="Duration : 1 Week"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
          <Feature
            title="Duration : 1-2 Months"
            text="• Finding the right DO(Designated Organization)"
          />
          <Feature
            title="Duration: 1-2 Months"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
          <Feature
            title="Durations: 1-2 Months"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
