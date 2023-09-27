import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Funding from "./pages/Funding";
import WaitList from "./pages/WaitList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-funded" element={<Funding />} />
        <Route path="/waitlist" element={<WaitList />} />
      </Routes>
    </div>
  );
}

export default App;
