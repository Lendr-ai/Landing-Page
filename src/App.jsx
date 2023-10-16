import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Suppliers from "./pages/Suppliers";
import Businesses from "./pages/Businesses";

function App() {
  return (
    <div>
      <div className="shadow-lg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/businesses" element={<Businesses />} />
      </Routes>
    </div>
  );
}

export default App;
