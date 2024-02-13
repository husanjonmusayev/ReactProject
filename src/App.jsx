import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from "./components/Reg/Reg";
import About from "./components/About/About";
import NotPage from "./components/NotPage/NotPage";
import Home from "./Home/Home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Reg />} />
          <Route path="*" element={<NotPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
