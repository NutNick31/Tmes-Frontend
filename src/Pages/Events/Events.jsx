import React from "react";
import { Link } from "react-router-dom";
import EventName from "./Events_name";
import { motion } from "framer-motion";
import "./Events.scss";

const Events = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="events section__padding">
          <h1 className="heading" style={{ color: "var(--color-events-text)" }}>
            EVENTS
          </h1>
          <div className="event_container">
            {EventName.map((eve) => {
              const { type, data } = eve;
              return (
                <div className="event_type">
                  <h3 className="gradient__text">{type}</h3>
                  <ul>
                    {data.map((d) => {
                      const { name, to } = d;
                      return (
                        <li>
                          <Link to={to}> {name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Events;
