// import Sidebar from "../../components/sidebar/Sidebar";
// import Header from "../../components/headerbar/Header";

// import config from "../../config.json";

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Staff = () => {
//   const accesstoken = JSON.parse(localStorage.getItem("staff"));
//   const [staffDetails, setStaffDetails] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     getStaff();
//   }, []);

//   const getStaff = async () => {
//     let staffresult = await fetch(config.apibaseurl + "/api/staff/getstaff");
//     staffresult = await staffresult.json();
//     setStaffDetails(staffresult.data.results);
//   };

//   const [name, setName] = useState("");
//   const [staffid, setStaffId] = useState("");
//   const [updateid, setUpdateid] = useState("");
//   const [error, setError] = useState(false);

//   const handleStaffsubmit = async () => {
//     if (!name) {
//       setError(true);
//       return false;
//     }
//     let apistaffurl = "";
//     let methodapi = "";
//     if (updateid) {
//       apistaffurl = config.apibaseurl + "/api/staff/" + updateid;
//       methodapi = "put";
//     } else {
//       apistaffurl = config.apibaseurl + "/api/staff/create";
//       methodapi = "post";
//     }

//     let addstaff = await fetch(apistaffurl, {
//       method: methodapi,
//       body: JSON.stringify({ name, staffid }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "bearer " + accesstoken.data.access_token,
//       },
//     });

//     let addstaffrs = await addstaff.json();
//     if (addstaffrs.status == "true") {
//       getStaff();
//     }
//   };

//   const getStaffedit = async (editid) => {
//     let staffeditdetails = await fetch(
//       config.apibaseurl + "/api/staff/" + editid,
//       {
//         method: "get",
//         headers: {
//           Authorization: "bearer " + accesstoken.data.access_token,
//         },
//       }
//     );
//     staffeditdetails = await staffeditdetails.json();
//     setName(staffeditdetails.data[0].name);
//     setUpdateid(staffeditdetails.data[0]._id);
//   };
//   const deleteStaff = async (id) => {
//     let deletestaff = await fetch(config.apibaseurl + "/api/staff/" + id, {
//       method: "Delete",
//       headers: {
//         Authorization: "bearer " + accesstoken.data.access_token,
//       },
//     });
//     deletestaff = await deletestaff.json();
//     if (deletestaff) {
//       getStaff();
//     }
//   };

//   return (
//     <>
//       <div class="min-height-300 bg-primary position-absolute w-100"></div>
//       <Sidebar />
//       <main className="main-content position-relative border-radius-lg ">
//         <Header />
//         <div class="container-fluid py-4">
//           <div class="row">
//             <div class="col-md-8">
//               <div class="card mb-4">
//                 <div class="card-header pb-3">
//                   <div class="row">
//                     <div class="col-6 d-flex align-items-center">
//                       <h6 class="mb-0">Staff</h6>
//                     </div>

//                     {/* <div class="col-6 text-end">
//                                         <a href="javascript:void(0);" class="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp;
//                                         <a href="/category/add" class="btn btn-outline-primary btn-sm mb-0 ">Add New</a>
//                                     </div> */}
//                   </div>
//                 </div>

//                 <div class="card-body px-0 pt-0 pb-2">
//                   <div class="table-responsive p-5">
//                     <table class="table align-items-center mb-0 ">
//                       <thead>
//                         <tr>
//                           <th class="text-secondary opacity-7 ps-2">S.No</th>
//                           <th class="text-secondary opacity-7 ps-2">
//                             # Staff ID
//                           </th>
//                           <th class="text-secondary opacity-7 ps-2">Name</th>
//                           <th class="text-secondary opacity-7">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {staffDetails.map((item, index) => (
//                           <tr key={item._id}>
//                             <td>{index + 1}</td>
//                             <td>
//                               <div class="d-flex px-2 py-1">
//                                 <div class="d-flex flex-column justify-content-center">
//                                   <h6 class="mb-0 text-sm">{item.staffid}</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div class="d-flex px-2 py-1">
//                                 <div class="d-flex flex-column justify-content-center">
//                                   <h6 class="mb-0 text-sm">{item.name}</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div class="ms-auto">
//                                 <a
//                                   class="btn btn-link text-dark px-3 mb-0"
//                                   onClick={() => getStaffedit(item._id)}
//                                 >
//                                   <i
//                                     class="fas fa-pencil-alt text-dark me-2"
//                                     aria-hidden="true"
//                                   ></i>
//                                   Edit
//                                 </a>
//                                 {/* <a class="btn btn-link text-danger text-gradient px-3 mb-0" onClick={()=> deleteCategory(item._id)}><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a> */}
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-4">
//               <div class="card mb-4">
//                 <div class="card-header pb-3">
//                   <div class="row">
//                     <div class="col-6 d-flex align-items-center">
//                       <h6 class="mb-0">Add/Edit Staff</h6>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="card-body">
//                   <div class="row">
//                     <div class="col-md-12">
//                       <div class="form-group">
//                         <label
//                           for="example-text-input"
//                           class="form-control-label"
//                         >
//                           Name
//                         </label>
//                         <input
//                           class="form-control"
//                           type="text"
//                           placeholder="Enter Staff name"
//                           required
//                           value={name}
//                           onChange={(e) => {
//                             setName(e.target.value);
//                           }}
//                         />
//                         {error && !name && (
//                           <span class="text-danger text-gradient text-xs text-secondary">
//                             Enter the Staff Name
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div class="row">
//                     <div class="col-md-12">
//                       <div class="form-group">
//                         <label
//                           for="example-text-input"
//                           class="form-control-label"
//                         >
//                           Staff ID
//                         </label>
//                         <input
//                           class="form-control"
//                           type="text"
//                           placeholder="Enter Staff id"
//                           required
//                           value={staffid}
//                           onChange={(e) => {
//                             setStaffId(e.target.value);
//                           }}
//                         />
//                         {error && !staffid && (
//                           <span class="text-danger text-gradient text-xs text-secondary">
//                             Enter the Staff ID
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="text-end">
//                       <button
//                         type="button"
//                         onClick={handleStaffsubmit}
//                         class="btn btn-primary btn-sm ms-auto mt-5"
//                       >
//                         Submit
//                       </button>
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

// export default Staff;
