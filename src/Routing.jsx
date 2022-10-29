import React from "react";

import { Routes, Route } from "react-router-dom";
import { GreatStep, Error, Events, About, Auth } from "./Pages";

import TMES from "./TMES/TMES_landing/TMES";

import {
  Enviro_CS,
  Geobotics,
  Indu_Design,
  Mine_CS,
  Mineac,
  Nmic,
  Petro_CS,
  Safety_DA,
  Safety_Hunt,
  T_Shirt_Design,
  Quiz_Spiel,
  Mine_Shot,
} from "./Pages/Events";

import SignIn from "./Pages/Auth/Signin";
import SignUp from "./Pages/Auth/Signup";

const Routing = () => {
  return (
    <>
      <div className="content">
        <Routes>
          {/* Auth page*/}
          <Route path="/auth" element={<Auth />} />

          {/* GreatStep Page */}
          <Route exact path="/" element={<TMES />} />
          <Route exact path="/great-step" element={<GreatStep />} />

          {/* Offline Event Page */}
          <Route path="/great-step/events" element={<Events />} />
          <Route path="/great-step/events/Enviro_CS" element={<Enviro_CS />} />
          <Route path="/great-step/events/Geobotics" element={<Geobotics />} />
          <Route
            path="/great-step/events/Indu_Design"
            element={<Indu_Design />}
          />
          <Route path="/great-step/events/Mine_CS" element={<Mine_CS />} />
          <Route path="/great-step/events/Mineac" element={<Mineac />} />
          <Route path="/great-step/events/Nmic" element={<Nmic />} />
          <Route path="/great-step/events/Petro_CS" element={<Petro_CS />} />
          <Route path="/great-step/events/Safety_DA" element={<Safety_DA />} />
          <Route
            path="/great-step/events/Safety_Hunt"
            element={<Safety_Hunt />}
          />

          {/* Online Event Page */}
          <Route
            path="/great-step/events/T_Shirt_Design"
            element={<T_Shirt_Design />}
          />
          <Route
            path="/great-step/events/Quiz_Spiel"
            element={<Quiz_Spiel />}
          />
          <Route path="/great-step/events/Mine_Shot" element={<Mine_Shot />} />

          {/* About Page */}
          <Route path="/aboutus" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Error Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Routing;
