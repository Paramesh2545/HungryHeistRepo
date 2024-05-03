import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import "../styles.css";
import { useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [err, setErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [emptyPass1, setEmptyPass1] = useState(false);
  const [emptyPass2, setEmptyPass2] = useState(false);
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const location = useLocation();
  // const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailErr(true);
      toast.success("User Registered Successfully!!", {
        position: "center",
      });
    }
    if (pass.length === 0) {
      setEmptyPass1(true);
    }
    if (cpass.length === 0) {
      setEmptyPass2(true);
    }
    if (pass !== cpass) {
      setErr(true);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, pass);
        const user = auth.currentUser;
        console.log(user + "user registered successfully");
        if (location.pathname !== "/") {
          window.location.href = "/";
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const googleSignup = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
    console.log(auth.currentUser);
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <div className="upperbox">
      <div className="mainSign">
        <form className="innerSign">
          <div className="inputbox">
            <MdAlternateEmail />
            &nbsp;|&nbsp;
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailErr && <p className="err">enter a valid email</p>}
          {!emailErr && <br />}

          <div className="inputbox">
            <MdOutlinePassword />
            &nbsp;|&nbsp;
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          {emptyPass1 && <p className="err">can't be empty</p>}
          {!emptyPass1 && <br />}
          <div className="inputbox">
            <MdOutlinePassword />
            &nbsp;|&nbsp;
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setCPass(e.target.value)}
            />
          </div>
          {err && <p className="err">password's are not same</p>}
          {emptyPass2 && <p className="err">can't be empty</p>}
          {!emptyPass2 && <br />}
          <button className="signbtn" onClick={register}>
            Signup
          </button>
          <div className="signlogin">
            <p>Already have an account? </p>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="container">
            <div className="line"></div>
            <div className="text">Signup with Google</div>
            <div className="line"></div>
          </div>
          <br />
          <button className="signGoogle" onClick={googleSignup}>
            <FaGoogle />
          </button>
          <br />
        </form>
        <div className="signupimage"></div>
      </div>
    </div>
  );
};

export default Signup;
