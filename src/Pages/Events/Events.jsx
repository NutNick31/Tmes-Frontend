import React from "react";
import { Link } from "react-router-dom";
import EventName from "./Events_name";

const Events = () => {
  return (
    <>
      <section className="events">
        {EventName.map((eve) => {
          const { type, data } = eve;
          return (
            <div className="event_type">
              <h3>{type}</h3>
              {data.map((d) => {
                const { name, to } = d;
                return (
                  <p>
                    <Link to={to}> {name}</Link>
                  </p>
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Events;
