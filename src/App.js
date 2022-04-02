import { Routes, Route } from "react-router-dom";
import "./App.css";
import FormA from "./Form/FormA";
import FormB from "./Form/FromB";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormA />} />
        <Route path="/Fromb" element={<FormB />} />
      </Routes>
    </div>
  );
}

export default App;
