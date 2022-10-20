import React, { useState, useEffect } from "react";
import { Footer, Navbar, Loader } from "./Components";
import Routing from "./Routing";
import "./Pages/Events/Offline_Events/Offline_Events.scss";
import { AnimatePresence } from "framer-motion";

import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, [loading]);

  return (
    <div className="App">
      {loading && <Loader />}
      <>
        <AnimatePresence>
          <Navbar />
          <Routing />
          <Footer />
        </AnimatePresence>
      </>
    </div>
  );
}

export default App;
