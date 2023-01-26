import React from "react";
import "./brand.css";
import { us, irc, homeoffice } from "./import.js";

export const Brand = () => {
  return (
    <div className="immi__brand-main ">
      {/* <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div> */}
      <div className="immi__brand ">
        <div>
          <img src={us} />
        </div>
        <div>
          <img src={irc} />
        </div>
        <div>
          <img src={homeoffice} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
