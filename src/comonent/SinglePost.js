import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  const param = useParams().id;
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [userData, setuserdata] = useState({});
  console.log(comment);
  const [content, setContent] = useState("");
  const userId = localStorage.getItem("userid");
  const getPostData = async () => {
    try {
      const res = await axios.get(`http://192.168.1.112:9999/posts/${param}`);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCommentData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.1.112:9999/comment/p/${param}`
      );
      setComment(res.data.comments);
      //   setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const leaveAcomment = async () => {
    try {
      const res = await axios.post(
        `http://192.168.1.112:9999/comment/${param}`,
        {
          user_id: userId,
          post_id: param,
          content,
        }
      );
      console.log(res);
      //   setData(res.data);
      alert("Success");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.post("http://192.168.1.112:9999/auth/Verify", {
        id: userId,
      });
      console.log(res);
      setuserdata(res.data.user);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  useEffect(() => {
    getPostData();
    getCommentData();
    getUserData();
  }, []);

  return (
    <>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 text-white min-h-screen bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl leading-snug uppercase border-2 border-slate-400 p-1 m-10 rounded-lg w-[400px]">
          <h2>
            {" "}
            {data["user"]?.displayName} has posted a post from{" "}
            <a
              className="underline hover:font-bold"
              href={`mailto:${data["user"]?.email}`}
            >
              {" "}
              {data["user"]?.email}
            </a>
          </h2>
        </div>

        <h2 className="text-2xl font-bold  m-10">THE CONTENT</h2>
        <p className="font-semibold leading-10 text-lg  m-3 text-slate-300">
          {data["post"]?.content}
        </p>
      </main>

      <div class="  mx-auto px-4 bg-gray-900 text-white ">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold ">
            Expert Talks (Only experts can comment here)
          </h2>
        </div>
        <form class="mb-6 p-10">
          <div class="py-2 px-4 mb-4   rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              id="comment"
              rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            >
              {content}
            </textarea>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              userData.role == 1 &&
                alert("Member Arenot Allowed To Comment Here");
              leaveAcomment();
            }}
            type="submit"
            class={` ${
              userData.role == 1
                ? "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                : "border-2 border-slate-300 inline-flex items-center py-2.5  px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            }`}
          >
            Post comment
          </button>
        </form>
        <div className="py-10">
          <h2 class="text-lg lg:text-2xl font-bold ">
            All Comments( {comment?.length} )
          </h2>
          {comment.length > 0 ? (
            comment.map((x, i) => (
              <div
                key={i}
                className="border-2 border-slate-400 rounded-lg m-6 p-3 hover:bg-slate-700"
              >
                <h2 className="text-sm font-semibold">{x?.user_id}</h2>
                <p className="font-bold text-slate-300">{x?.content}</p>
              </div>
            ))
          ) : (
            <h2 className="text-center font-bold text-slate-400 text-lg">
              Oops! There is no comment available . Wait until an expert
              comments here
            </h2>
          )}
        </div>
      </div>
    </>
  );
};
