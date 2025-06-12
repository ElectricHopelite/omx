import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Event from "./pages/Event";
import Admin from "./pages/Admin";



function App() {
 

  return (
     <div>
      <Home/>
      <Event/>
      <Admin/>
      </div>
  )
}

export default App
