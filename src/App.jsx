import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from "./components/Reg/Reg";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotPage from "./components/NotPage/NotPage";

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
