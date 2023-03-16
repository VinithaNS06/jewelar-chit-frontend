// import React, { useState, useEffect } from "react";
// import Sidebar from "../../../../components/sidebar/Sidebar";
// import Header from "../../../../components/headerbar/Header";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import config from "../../../../config.json";
// import { useNavigate } from "react-router-dom";
// import { createGlobalStyle } from "styled-components";
// const AddSetting = () => {
//   const accesstoken = JSON.parse(localStorage.getItem("user"));
//   const [settingList, setSettingList] = useState([]);
//   //   const [_id, setSettingdata] = useState("");
//   const [desc, setDesc] = useState("");
//   const [pageName, setPageName] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   function addSettingdata() {
//     const newSettings = {
//       pageName,
//       desc,
//     };

//     console.log(newSettings);
//     fetch(config.apiurl + "api/setting/createsetting", {
//       method: "POST",
//       body: JSON.stringify(newSettings),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + accesstoken.data.access_token,
//       },
//     })
//       .then(() => toast.success("Setting Created Sucessfully"))
//       .then(() =>
//         setTimeout(() => {
//           navigate("/settings");
//         }, 5000)
//       );
//   }
//   //   const handlecategory = async (event) => {
//   //     setSettingdata(event.target.value);
//   //   };

//   useEffect(() => {
//     axios
//       .get(config.apiurl + "api/setting/getsetting")
//       .then((res) => {
//         console.log(res.data.data.results);
//         setSettingList(res.data.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <div className="min-height-300 bg-primary position-absolute w-100"></div>
//       <Sidebar />
//       <main className="main-content position-relative border-radius-lg ">
//         <Header />
//         <div className="container-fluid py-4">
//           <div className="row">
//             <div className="col-12">
//               <div className="card mb-4">
//                 <div className="card-header pb-3">
//                   <div className="row">
//                     <div className="col-6 d-flex align-items-center">
//                       <h6 className="mb-0">Add Setting</h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Setting
//                         </label>
//                         <select
//                           className="form-control"
//                           value={pageName}
//                           onChange={(e) => {
//                             setPageName(e.target.value);
//                           }}
//                         >
//                           <option> Choose </option>
//                           {settingList.map((item, index) => (
//                             <option value={item._id}>{item.pagename}</option>
//                           ))}
//                         </select>
//                         {error && !pageName && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Choose the Setting Name
//                           </span>
//                         )}
//                       </div>
//                     {/* </div> */}
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <label
//                             htmlFor="example-text-input"
//                             className="form-control-label"
//                           >
//                             Description
//                           </label>
//                           <textarea
//                             className="form-control"
//                             rows="5"
//                             value={desc}
//                             onChange={(e) => {
//                               setDesc(e.target.value);
//                             }}
//                           ></textarea>
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="text-end">
//                           <button
//                             type="submit"
//                             onClick={addSettingdata}
//                             className="btn btn-primary btn-sm ms-auto mt-5"
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default AddSetting;
