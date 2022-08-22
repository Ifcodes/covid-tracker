import { useEffect, useState } from "react";
import Navbar from "./Components/Molecules/Navbar";
import Home from "./Pages/Home";
import { services } from "./Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
