import React from "react";
import { Button } from "react-bootstrap";
import Login from "./components/auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Auth from "./pages/Auth"
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Homepage />} />
          
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;