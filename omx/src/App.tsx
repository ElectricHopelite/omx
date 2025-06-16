import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Event from "./pages/Event";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";


function App() {
 

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
