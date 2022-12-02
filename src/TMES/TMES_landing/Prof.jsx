import React from "react";
import "./TMES.scss";
import tmes_home2 from "../../Assets/tmes_home2.jpg";

const tmes_info_ = () => (
  <div className="tmes_info_ section__padding" id="tmes_info_">
    <div className="tmes_info_-image">
      <img src={tmes_home2} alt="tmes_info_" />
    </div>
    <div className="tmes_info_-content">
      <h4>Some of the noted events are:</h4>

      <ol>
        <li>Freshers introduction</li>
        <li>GREAT STEP</li>
        <li>Annual Departmental Picnic</li>
        <li>Intra Department Sports meet</li>
        <li>Final Year Farewell</li>
      </ol>
    </div>
  </div>
);

export default tmes_info_;
