import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Home, Error, Events, About, Navbar } from "./Pages";
import { Footer } from "./Components";

import "bootstrap/dist/css/bootstrap.min.css";
// Git Problems Solved
// again
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />

          {/* Offline Event Page */}
          <Route path="/Events" element={<Events />} />
          <Route path="/Events/Enviro_CS" element={<Enviro_CS />} />
          <Route path="/Events/Geobotics" element={<Geobotics />} />
          <Route path="/Events/Indu_Design" element={<Indu_Design />} />
          <Route path="/Events/Mine_CS" element={<Mine_CS />} />
          <Route path="/Events/Mineac" element={<Mineac />} />
          <Route path="/Events/Nmic" element={<Nmic />} />
          <Route path="/Events/Petro_CS" element={<Petro_CS />} />
          <Route path="/Events/Safety_DA" element={<Safety_DA />} />
          <Route path="/Events/Safety_Hunt" element={<Safety_Hunt />} />

          {/* Online Event Page */}
          <Route path="/Events/T_Shirt_Design" element={<T_Shirt_Design />} />
          <Route path="/Events/Quiz_Spiel" element={<Quiz_Spiel />} />
          <Route path="/Events/Mine_Shot" element={<Mine_Shot />} />

          {/* About Page */}
          <Route path="/aboutus" element={<About />} />

          {/* Error Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
