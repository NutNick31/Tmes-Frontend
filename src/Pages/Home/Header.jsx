import React from "react";
import { C_Btn, Participants } from "../../Components";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header-content">
        <div className="header-image">
          {/* <img src={logo} /> */}
          <h2 className="text__tmes">TMES</h2>
        </div>
        <p style={{ fontSize: "1.6rem" }} className="gradient__text">
          Presents
        </p>
        <h1 className="gradient__text">
          {/* <Typewriter
            options={{
              strings: ["GREAT STEP", "BIGGEST DEPARTMENTAL FEST"],
              autoStart: true,
              loop: true,
            }}
          /> */}
          Great Step 2022-23
        </h1>
        <p>
          Upholding the esteem of being the antecedent, the Department of Mining
          Engineering, IIT Kharagpur has always believed in the flow of
          practical knowledge with innovation as inspiration, which has
          rejuvenated the ancestral engineering ideals into the modern facts.
        </p>
        <p>
          With this vision as guidance and zeal to keep pace with the
          developments in the Mining and Geology industries, the Department of
          Mining engineering initiated GREATSTEP (acronym for Geo-Resource
          Engineering and Technology Students' Teachers' and Employers'
          Partnership) in 2008 to create a common platform for all the budding
          Mining engineers. The last seven editions were filled with mind
          churning challenges, several informative guest lectures and workshops
          aimed at the expansion of thoughts into the unexplored realms of the
          field.
        </p>
        <div style={{ margin: "4rem 0 0 0" }}>
          <C_Btn txt="Register Now" link="/signup"></C_Btn>
        </div>
      </div>
    </div>
  );
};

export default Header;
