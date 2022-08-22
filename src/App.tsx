import { useEffect, useState } from "react";
import Navbar from "./Components/Molecules/Navbar";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
