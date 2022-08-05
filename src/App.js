import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TheVoid from "./components/TheVoid";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <TheVoid />
      <Footer />
      <p className="warning">This site is still under construction! </p>
    </div>
  );
}

export default App;
