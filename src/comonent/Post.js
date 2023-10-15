// import React, { useState } from "react";
// import axios from "axios";
// const Post = () => {
//   const [users, setusers] = useState([]);
//   const [medicalType, setmedicalType] = useState();
//   const [content, setcontent] = useState("");
//   const medicalSpecialties = [
//     " practitioner",
//     "Neurologist",
//     "Pediatrician",
//     "Surgeon",
//     "Dermatologist",
//     "Psychiatrist",
//     "Oncologist",
//     "Internal medicine",
//     "Cardiologist",
//     "Anesthesiologist",
//     "Radiologist",
//     "Pathologist",
//     "Orthopaedist",
//     "Ophthalmology",
//     "Urologist",
//     "Pediatrics",
//     "Family medicine",
//     "Otolaryngologist",
//     "Neurology",
//     "Obstetrics",
//     "Gynaecology",
//     "Ophthalmologist",
//     "Endocrinologist",
//     "Rheumatologist",
//     "Gastroenterologist",
//   ];
//   const user_id = localStorage.getItem("userid");
//   const createPost = async () => {
//     try {
//       const res = await axios.post("http://192.168.1.112:9999/posts/me/", {
//         user_id,
//         content,
//         category: medicalType,
//       });
//       console.log(res);
//       setposts(res.data.combinedPostAndUser);
//     } catch (error) {
//       console.log("====================================");
//       console.log(error);
//       console.log("====================================");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost();
//   };
//   return (
//     <div>
//       {" "}
//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//           <label for="comment" className="sr-only">
//             Your problem
//           </label>
//           <textarea
//             id="comment"
//             rows="6"
//             value={content}
//             onChange={(e) => setcontent(e.target.value)}
//             className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
//             placeholder="Write a comment..."
//             required
//           ></textarea>
//         </div>
//         <div classNameName="flex justify-start w-[300px] items-center p-3 bg-[#2a2c39] rounded-full">
//           <i classNameName="fa-solid fa-person-half-dress text-[#00dfc4] p-1 pr-2 border-r-[1px] border-[#00dfc4] "></i>
//           <span classNameName="pl-2 text-white font-thin  ">Category</span>

//           <select
//             name="category"
//             id="category"
//             classNameName="  bg-black text-[#00dfc4] border-2 border-[#00dfc4] pl-2 ml-2"
//             value={medicalType}
//             onChange={(e) => setmedicalType(e.target.value)}
//           >
//             {medicalSpecialties.map((value, i) => (
//               <option key={i} value={value}>
//                 {value}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
//         >
//           Post Your Problem
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Post;
