import React, { useEffect, useState } from "react";
import { check } from "../utilites/checkauth";
import { Link, NavLink, redirect } from "react-router-dom";

import axios from "axios";
import Cookies from "js-cookie";
const Profile = () => {
  const [loged, setloged] = useState(false);
  const [userdata, setuserdata] = useState();
  const [posts, setPost] = useState([]);
  console.log("====================================");
  console.log(loged);
  console.log("====================================");
  const user = localStorage.getItem("userid");
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const profiledata = async () => {
    try {
      const res = await axios.post("http://192.168.1.112:9999/auth/Verify", {
        id: user,
      });
      console.log(res);
      setuserdata(res.data.user);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const yourPosts = async () => {
    try {
      const res = await axios.get(`http://192.168.1.112:9999/posts/me/${user}`);
      setPost(res.data.post);
      console.log(res.data.post);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

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
  useEffect(() => {
    profiledata();
    yourPosts();
    setloged(check());
    if (!loged) {
      //   window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Create Post
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-10">
        <div>
          <section class="bg-white dark:bg-gray-900">
            <div className="text-white  p-4">
              <div className="mb-5 font-bold text-xl  text-gray-200 ">
                Name: {userdata?.displayName}
              </div>
              <div className="mb-5 font-bold text-xl  text-gray-200 ">
                Email: {userdata?.email}
              </div>
              <div className="mb-5 font-bold text-xl  text-gray-200 ">
                Gender:{userdata?.gender === 2 ? "Female" : "Male"}
              </div>
              <div className=" font-bold text-xl  text-gray-200 ">
                Role: {userdata?.role === 3 ? "expert" : "User"}
              </div>{" "}
              <br />
              <NavLink
                to={"/login"}
                onClick={() => {
                  Cookies.remove("dammn_token");
                  window.location.reload();
                  window.location.href = "/login";
                }}
              >
                <span className="px-2 py-1 font-bold bg-red-500 rounded-sm m-auto">
                  Logout
                </span>
              </NavLink>
            </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Your Recent Posts
                </h2>
              </div>
              <div class="grid gap-8 lg:grid-cols-2">
                {posts?.length > 0 ? (
                  posts.map((x) => (
                    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <div class="flex justify-between items-center mb-5 text-gray-500">
                        <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                          <svg
                            class="mr-1 w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                          </svg>
                          {x.category}
                        </span>
                        <span class="text-sm">1 days ago</span>
                      </div>
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {/* <a href="#">How to quickly deploy a static website</a> */}
                      </h2>
                      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                        {x.content}
                      </p>
                      <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                          <img
                            class="w-7 h-7 rounded-full"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                            alt="Jese Leos avatar"
                          />
                          <span class="font-medium dark:text-white text-xs pe-6">
                            {x.user_id}
                          </span>
                        </div>
                        <Link
                          to={`/posts/${x._id}`}
                          class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        >
                          Read more
                          <svg
                            class="ml-2 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">You have no post ! </a>
                  </h2>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
