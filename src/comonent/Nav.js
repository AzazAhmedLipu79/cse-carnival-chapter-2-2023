import React, { useEffect, useState } from "react";
import logo from "../images/BISHESHOGGO WEB FINAL.svg";
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
          <img
            src={logo}
            className="animate-pulse"
            alt="logo"
            width={"120px"}
            height={"100px"}
          />
        </div>
        <div className="w-2/4  ">
          <ul className="flex justify-end w-full h-full items-center text-[#061949] font-bold ">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li className="hover:font-bold px-1">Home</li>
            </NavLink>
            <NavLink
              to={"/posts"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li className="hover:font-bold px-1">Post</li>
            </NavLink>
            <NavLink
              to={"/direct_message"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li className="hover:font-bold px-1">DM</li>
            </NavLink>
            {logged ? (
              <NavLink
                to={"/profile"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                <li className="px-2 py-1 m-1 font-bold bg-emerald-500 rounded-sm">
                  Profile
                </li>
              </NavLink>
            ) : (
              <>
                <NavLink
                  to={"/login"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  <li className="px-2 py-1 font-bold bg-emerald-500 rounded-sm">
                    Login
                  </li>
                </NavLink>
                <NavLink
                  to={"/signin"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  <li className="px-2 py-1 font-bold bg-emerald-700 rounded-sm">
                    SignUp
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
