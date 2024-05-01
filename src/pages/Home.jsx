import React from "react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../styles.css";

const Home = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      console.log("timer stopped");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {show && <Loader />}
      {!show && <div className="mainClass">this is home</div>}
    </div>
  );
};

export default Home;
