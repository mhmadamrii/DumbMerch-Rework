import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Auth from "./pages/Auth"
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Complain from "./pages/Complain";
import DetailProduct from "./pages/DetailProduct";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/detail-product" element={<DetailProduct />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;