import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [posts, setposts] = useState([]);
  const [users, setusers] = useState([]);
  const [medicalType, setmedicalType] = useState();
  const [content, setcontent] = useState("");
  const fetchPost = async () => {
    try {
      const res = await axios.get("http://192.168.1.112:9999/posts/");
      console.log(res);
      setposts(res.data.combinedPostAndUser);
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
  const user_id = localStorage.getItem("userid");
  const createPost = async () => {
    try {
      const res = await axios.post("http://192.168.1.112:9999/posts/me/", {
        user_id,
        content,
        category: medicalType,
      });
      console.log(res);
      setposts(res.data.combinedPostAndUser);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Create Post
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" className="sr-only">
                Your problem
              </label>
              <textarea
                id="comment"
                rows="6"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div classNameName="flex justify-start w-[300px] items-center p-3 bg-[#2a2c39] rounded-full">
              <span classNameName="pl-2  font-thin text-slate-300 font-bold">
                <h2 className="text-white p-1">Category :</h2>
                <i classNameName="fa-solid fa-person-half-dress text-white p-1 pr-2 border-r-[1px] border-[#00dfc4] "></i>
                <select
                  name="category"
                  id="category"
                  classNameName="  bg-black text-[#00dfc4] border-2 border-[#00dfc4] pl-2 ml-2"
                  value={medicalType}
                  onChange={(e) => setmedicalType(e.target.value)}
                >
                  {medicalSpecialties.map((value, i) => (
                    <option key={i} value={value}>
                      {value}
                    </option>
                  ))}
                </select>{" "}
              </span>
            </div>
            <button
              type="submit"
              className="border-2 border-slate-500 m-2 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post Your Problem
            </button>
          </form>
          {posts?.length > 0 ? (
            posts?.map((value, i) => (
              <Link to={`/posts/${value["post"]._id}`}>
                {" "}
                <article
                  key={i}
                  className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        {value["user"].displayName}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time
                          pubdate
                          datetime="2022-06-23"
                          title="June 23rd, 2022"
                        >
                          Jun. 23, 2022
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment4Button"
                      data-dropdown-toggle="dropdownComment4"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                    <div
                      id="dropdownComment4"
                      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Remove
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">
                    {value["post"].content}
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                    >
                      <svg
                        className="mr-1.5 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              POSTS ARE LOADING ...
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
