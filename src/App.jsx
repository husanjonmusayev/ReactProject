import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Reg from "./components/Reg/Reg";
import Home from "./components/Home/Home";

function App() {
  let [openHom, setOpenHom] = useState(false);
  function getData() {
    setOpenHom(true);
  }
  return (
    <div className="container">
      <BrowserRouter>
        {/* <header>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/siginIn">Sigin In</Link>
            </ul>
          </nav>
        </header> */}

        {openHom ? <Home /> : <Reg click={getData} />}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/siginIn" element={<Reg />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
