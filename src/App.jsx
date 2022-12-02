import React, { useState, useEffect } from "react";
import { Footer, Navbar, Loader } from "./Components";
import Routing from "./Routing";
import "./Pages/Events/Offline_Events/Offline_Events.scss";
import { AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, [loading]);

  return (
    <div className="App container-fluid p-0">
      <AnimatedCursor
        color="8, 164, 167"
        innerSize={12}
        style={{ zIndex: "1000" }}
      />
      {loading && <Loader />}
      {!loading && (
        <>
          <AnimatePresence key="s">
            <Navbar />
            <Routing />
            <Footer />
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
