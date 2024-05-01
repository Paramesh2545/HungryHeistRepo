import React, { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <div>
      {show && (
        // <video autoPlay muted loop>
        //   <source src="../assets/loadingVid.mp4" type="video/mp4" />
        //   this is vid
        // </video>
        <img src="../assets/Logo.jpeg"></img>
      )}
    </div>
  );
};

export default Loader;
