import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nearby from "./pages/Nearby";
import Profile from "./pages/Profile";
import Loader from "./components/Loader";

const App = () => {
  return (
    <main>
      <Router>
        <Nav />
        <Loader />
        <img src="../assets/Logo.jpeg"></img>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/near" element={<Nearby />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
