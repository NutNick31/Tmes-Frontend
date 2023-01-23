import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import "./Events2.scss";
import EventName from "./Events_name";
import { Link } from "react-router-dom";
import tmes_home from "../../Assets/tmes_home.jpg";
import Button from "../../Components/Button/Button";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Events2 = () => {
  return (
    <section className="events2">
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
                        <h6 className="events_info">{info}</h6>
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
    </section>
  );
};

export default Events2;
