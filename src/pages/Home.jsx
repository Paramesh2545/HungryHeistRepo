import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import Loader from "../components/Loader";
import "../styles.css";
import "../styles/Home.css";
import { geocode } from "react-geocode";
import { CiLocationOn } from "react-icons/ci";
const Home = () => {
  const [show, setShow] = useState(true);
  const [location, setLocation] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      // console.log("timer stopped");
      // console.log(auth.currentUser.uid);
    }, 1500);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log(latitude, longitude);
      },
      (error) => {
        setError("Error in getting location");
      }
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {show && <Loader />}
      {!show && (
        <div className="mainClass">
          <HomeBody
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </div>
      )}
    </div>
  );
};

const HomeBody = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="main">
      <div className="top">
        {/* <p>{props.latitude}</p>
        <p>{props.longitude}</p> */}
        <div className="location">
          <CiLocationOn />p
        </div>
        <div className="topImg">
          <img src="src/assets/logo-removebg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
