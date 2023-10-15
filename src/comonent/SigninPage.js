import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/contact.css";
const SigninPage = () => {
  const gen = useRef();
  const r = useRef();
  const m = useRef();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("male");
  const [userType, setUserType] = useState(1);
  const [password, setPass] = useState("");
  const [conpas, setconpas] = useState("");
  const [medicalType, setmedicalType] = useState("");
  const [success, setSuccess] = useState();
  const medicalSpecialties = [
    " practitioner",
    "Neurologist",
    "Pediatrician",
    "Surgeon",
    "Dermatologist",
    "Psychiatrist",
    "Oncologist",
    "Internal medicine",
    "Cardiologist",
    "Anesthesiologist",
    "Radiologist",
    "Pathologist",
    "Orthopaedist",
    "Ophthalmology",
    "Urologist",
    "Pediatrics",
    "Family medicine",
    "Otolaryngologist",
    "Neurology",
    "Obstetrics",
    "Gynaecology",
    "Ophthalmologist",
    "Endocrinologist",
    "Rheumatologist",
    "Gastroenterologist",
  ];
  const x = useRef();
  const requestAPI = async () => {
    try {
      const res = await axios.post(`http://192.168.1.112:9999/auth/REGISTER`, {
        name,
        email,
        gender,
        role: userType,
        category: medicalType,
        password,
      });
      console.log(res.data.token);
      Cookies.set("dammn_token", res.data.token, { expires: 7 });
      localStorage.setItem("userid", res.data.id);
      setSuccess(res.data.success);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    requestAPI();

    document.querySelector(".notification").classList.add("sub");
    setName("");
    setemail("");
    setPass("");
    setconpas("");
    setTimeout(() => {
      document.querySelector(".notification").classList.remove("sub");
    }, 5000);
  };
  useEffect(() => {}, [success]);

  return (
    <div
      className="contact"
      onSubmit={(e) => handleSubmit(e)}
      id="contact"
      ref={x}
    >
      <div className="container">
        <form className="form">
          <h2>SignUp</h2>
          <div className="inputbox">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <i class="fa-solid fa-user"></i>
            <span>name</span>
          </div>{" "}
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
          <div
            className="flex justify-start w-[300px] items-center p-3 bg-[#2a2c39] rounded-full"
            onClick={() => {
              gen.current.classList.remove("hidden");
            }}
          >
            <i className="fa-solid fa-person-half-dress text-[#00dfc4] p-1 pr-2 border-r-[1px] border-[#00dfc4] "></i>
            <span className="pl-2 text-white font-thin  ">Gender</span>

            <select
              name="gender"
              id="gender"
              className="hidden  bg-black text-[#00dfc4] border-2 border-[#00dfc4] pl-2 ml-2"
              value={gender}
              ref={gen}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          </div>
          <div
            className="flex justify-start w-[300px] items-center p-3 bg-[#2a2c39] rounded-full"
            onClick={() => {
              r.current.classList.remove("hidden");
            }}
          >
            <i className="fa-solid fa-person-half-dress text-[#00dfc4] p-1 pr-2 border-r-[1px] border-[#00dfc4] "></i>
            <span className="pl-2 text-white font-thin  ">I am a</span>

            <select
              name="gender"
              id="gender"
              className="hidden  bg-black text-[#00dfc4] border-2 border-[#00dfc4] pl-2 ml-2"
              value={userType}
              ref={r}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value={1}>User</option>
              <option value={3}>Expert</option>
            </select>
          </div>
          <div
            className="flex justify-start w-[300px] items-center p-3 bg-[#2a2c39] rounded-full"
            onClick={() => {
              m.current.classList.remove("hidden");
            }}
          >
            <i className="fa-solid fa-person-half-dress text-[#00dfc4] p-1 pr-2 border-r-[1px] border-[#00dfc4] "></i>
            <span className="pl-2 text-white font-thin  ">Category</span>

            <select
              name="category"
              id="category"
              className="hidden  bg-black text-[#00dfc4] border-2 border-[#00dfc4] pl-2 ml-2"
              value={medicalType}
              ref={m}
              onChange={(e) => setmedicalType(e.target.value)}
            >
              {medicalSpecialties.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="inputbox">
            <input
              type="text"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <i className="fa-solid fa-lock-open"></i>
            <span>Password</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              value={conpas}
              onChange={(e) => setconpas(e.target.value)}
              required
            />
            <i class="fa-solid fa-lock"></i>
            <span>Confirm Password</span>
          </div>
          <div className="inputbox">
            <input type="submit" required />
          </div>
        </form>
      </div>{" "}
      <div className="notification">
        {success ? <span>Created</span> : <span>Someting went wrong!!!</span>}
      </div>
    </div>
  );
};

export default SigninPage;
