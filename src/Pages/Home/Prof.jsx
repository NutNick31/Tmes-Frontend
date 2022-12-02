import React from "react";
import "./Home.scss";
import rakesh_sir from "../../Assets/rakesh_sir.jpg";
const Prof = () => (
  <div className="Prof section__padding" id="Prof">
    <div className="Prof-image">
      <img src={rakesh_sir} alt="Prof" />
    </div>
    <div className="Prof-content">
      <h4>Prof. Rakesh Kumar</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ab
        numquam, architecto beatae nemo sint nobis nostrum fugit porro
        aspernatur accusamus accusantium, non inventore dolorum modi atque ea?
        Ipsam, dolore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Dolorem ab numquam, architecto beatae nemo sint nobis nostrum fugit
        porro aspernatur accusamus accusantium, non inventore dolorum modi atque
        ea? Ipsam, dolore?
      </p>
    </div>
  </div>
);

export default Prof;
