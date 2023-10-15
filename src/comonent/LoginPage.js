import React, { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import Cookies from "js-cookie";

const Contact = () => {
  const [email, setemail] = useState("");
  const [password, setPass] = useState("");
  const x = useRef();
  const login = async () => {
    try {
      const res = await axios.post("http://192.168.1.112:9999/auth/LOGIN", {
        email,
        password,
      });
      Cookies.set("dammn_token", res.data.token);
      localStorage.setItem("userid", res.data.id);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    document.querySelector(".notification").classList.add("sub");
    setemail("");
    setPass("");
    setTimeout(() => {
      document.querySelector(".notification").classList.remove("sub");
    }, 5000);
  };

  return (
    <>
      <div
        className="contact"
        onSubmit={(e) => handleSubmit(e)}
        id="contact"
        ref={x}
      >
        <div className="container">
          <form className="form">
            <h2>Login</h2>

            <div className="inputbox">
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <i className="fa-regular fa-envelope"></i>
              <span>email</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <i className="fa-regular fa-user"></i>
              <span>Password</span>
            </div>
            <div className="inputbox">
              <input type="submit" required />
            </div>
          </form>
        </div>{" "}
        <div className="notification">
          <span>Message Sent!</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
