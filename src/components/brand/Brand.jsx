import React from "react";
import "./brand.css";
import { pia, qatar, serene, emirates, dubai } from "./import.js";

export const Brand = () => {
  return (
    <div className="immi__brand-main ">
      {/* <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div> */}
      <div className="immi__brand ">
        <div>
          <img src={qatar} />
        </div>
        <div>
          <img src={emirates} />
        </div>
        <div>
          <img src={pia} />
        </div>
        <div>
          <img src={dubai} />
        </div>

       
      </div>
    </div>
  );
};

export default Brand;
