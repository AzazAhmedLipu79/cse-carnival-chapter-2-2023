import React, { useEffect, useState } from "react";
import logo from "../images/BISHESHOGGO2.svg";
import { NavLink } from "react-router-dom";
import { check } from "../utilites/checkauth";
function Nav() {
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (check()) {
      setlogged(true);
    }
  }, []);

  return (
    <>
      <nav className="flex w-full justify-between p-2 bg-green-400">
        <div>
          <img src={logo} alt="logo" width={"100px"} height={"100px"} />
        </div>
        <div className="w-2/4 ">
          <ul className="flex justify-end w-full h-full items-center text-[#061949] ">
            <NavLink to={"/"}>
              <li className="hover:font-bold px-1">Home</li>
            </NavLink>
            <NavLink to={"/posts"}>
              <li className="hover:font-bold px-1">Post</li>
            </NavLink>

            {logged ? (
              <NavLink to={"/profile"}>
                <li className="px-2 py-1 m-1 font-bold bg-emerald-500 rounded-sm">
                  profile
                </li>
              </NavLink>
            ) : (
              <>
                <NavLink to={"/login"}>
                  <li className="px-2 py-1 font-bold bg-emerald-500 rounded-sm">
                    login
                  </li>
                </NavLink>
                <NavLink to={"/signin"}>
                  <li className="px-2 py-1 font-bold bg-emerald-700 rounded-sm">
                    signUp
                  </li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
