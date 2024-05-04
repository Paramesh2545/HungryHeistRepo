import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Nearby from "./pages/Nearby";
import Profile from "./pages/Profile";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles.css";
import Mode from "./components/Mode";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithNav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/near" element={<NearbyWithNav />} />
        <Route path="/cart" element={<CartWithNav />} />
        <Route path="/profile" element={<ProfileWithNav />} />
      </Routes>
    </Router>
  );
};

// Wrapper components for routes with Nav
const HomeWithNav = () => (
  <>
    <Nav />
    <Home />
  </>
);

const NearbyWithNav = () => (
  <>
    <Nav />
    <Nearby />
  </>
);

const CartWithNav = () => (
  <>
    <Nav />
    <Cart />
  </>
);

const ProfileWithNav = () => (
  <>
    <Nav />
    <Profile />
  </>
);

// Assuming Nav component is imported here
// import Nav from "./Nav";

export default App;
