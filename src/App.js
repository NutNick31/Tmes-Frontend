import React, { useState, useEffect } from "react";
import { Footer, Navbar, Loader } from "./Components";
import Routing from "./Routing";

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
        <Navbar />
        <Routing />
        <Footer />
      </>
    </div>
  );
}

export default App;
