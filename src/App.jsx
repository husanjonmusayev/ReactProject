import { useState } from "react";
import SiginIn from "./SiginIn/SiginIn";
import SiginUp from "./SiginIn/SiginUp";

function App() {
  const [signup, setSignup] = useState(true);
  return <div className="container">{signup ? <SiginIn /> : <SiginUp />}</div>;
}

export default App;
