import axios from "axios";
import React, { useState } from "react";
import { check } from "../utilites/checkauth";

export const DirectMessage = () => {
  const [receiver_id, setreseverId] = useState("");
  const [contentss, setcontentss] = useState("");
  const userId = localStorage.getItem("userid");
  if (!check()) {
    return <h2>This User Has No Access to This page</h2>;
  }
  /* eslint-disable no-unused-vars */
  const sendConnection = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.112:9999/direct/send_request",
        {
          sender_id: userId,
          reciever_id: receiver_id,
          content: contentss,
        }
      );
      if (res.data.success) {
        alert("Request Send Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    /* eslint-disable no-unused-vars */
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendConnection();
      }}
      className="p-10 bg-slate-800"
    >
      <div class="relative z-0 w-full mb-6 group ">
        <label
          for="floating_email"
          class="text-lg font-bold border-2 border-slate-500 rounded-lg peer-focus:font-medium absolute p-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Sender Id : My ID - {userId}
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_password"
          id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={receiver_id}
          onChange={(e) => setreseverId(e.target.value)}
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Reciever Id : Expert Id
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="repeat_password"
          value={contentss}
          onChange={(e) => setcontentss(e.target.value)}
          id="floating_repeat_password"
          class="block py-2.5 px-0 w-full text-sm  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Content
        </label>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>
    </form>
  );
};