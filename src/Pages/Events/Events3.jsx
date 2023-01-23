import React from "react";
import EventName from "./Events_name";

import Button from "../../Components/Button/Button";
import tmes_home from "../../Assets/tmes_home.jpg";
import { Link } from "react-router-dom";

const Event3 = () => {
  return (
    <main>
      {EventName.map((eve) => {
        const { data } = eve;
        return (
          <>
            {data.map((d) => {
              const { name, to, info } = d;
              return (
                <section>
                  {/* <section id="section_1" style={{ "--i:": 0 }}> */}
                  <div className="events_container">
                    <div>
                      <h2 className="section__heading">
                        <Link to={to}>
                          <span>{name}</span>
                        </Link>
                      </h2>
                      <h6>{info}</h6>
                      <Button
                        className="c_btn"
                        color="red"
                        txt="View More..."
                        link={to}
                      />
                    </div>
                    <div className="section__image">
                      <img src={tmes_home} />
                    </div>
                  </div>
                </section>
              );
            })}
          </>
        );
      })}
    </main>
  );
};

export default Event3;
