// import React, { useState, useEffect } from "react";
// import Sidebar from "../../../components/sidebar/Sidebar";
// import Header from "../../../components/headerbar/Header";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import config from "../../../config.json";
// import { useNavigate } from "react-router-dom";

// const UserSchemeAdd = () => {
//   const accesstoken = JSON.parse(localStorage.getItem("user"));
//   const [user_id, setUser_Id] = useState("");
//   const [scheme_id, setScheme_Id] = useState("");

//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   function addProduct() {
//     const newProduct = {
//       user_id,
//       scheme_id,

//     };
//     console.log(newProduct);
//     fetch(config.apiurl + "api/userscheme/create-userscheme", {
//       method: "POST",
//       body: JSON.stringify(newProduct),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + accesstoken.data.access_token,
//       },
//     })
//       .then(() => toast.success("Scheme Created Sucessfully"))
//       .then(() =>
//         setTimeout(() => {
//           navigate("/userscheme");
//         }, 5000)
//       );
//   }
//   const [userId, setUserId] = useState([]);

//   const [schemeUserId, setSchemeUserId] = useState([]);
//   console.log(schemeUserId);
//   useEffect(() => {
//     axios
//       .get(config.apiurl + "api/users/get-users")
//       .then((res) => {
//         console.log(res.data);
//         setUserId(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   useEffect(() => {
//     axios
//       .get(config.apiurl + "api/userscheme/getuserscheme")
//       .then((res) => {
//         console.log(res.data);
//         setSchemeUserId(res.data);
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
//                       <h6 className="mb-0">Add User Scheme</h6>
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
//                           User Details
//                         </label>
//                         <select
//                           className="form-control"
//                           value={user_id}
//                           onChange={(e) => setUser_Id(e.target.value)}
//                         >
//                           <option>Choose User Name</option>
//                           {userId.map((usr) => (
//                             <option value={usr._id} key={usr._id}>
//                               {usr.name}-{usr.phone}
//                             </option>
//                           ))}
//                         </select>

//                         {error && !schemeUserId && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the User Details
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Scheme Id
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={scheme_id}
//                           onChange={(e) => {
//                             setScheme_Id(e.target.value);
//                           }}
//                         />
//                         {error && !scheme_id && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Scheme Id
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Scheme Details
//                         </label>
//                         <select
//                           className="form-control"
//                           value={scheme_id}
//                           onChange={(e) => setScheme_Id(e.target.value)}
//                         >
//                           <option>Choose Scheme Name</option>
//                           {schemeUserId &&
//                             schemeUserId.length &&
//                             schemeUserId.map((sch) => (
//                               <option value={sch.scheme_id} key={sch._id}>
//                                 {sch.user_scheme_name}-{sch.user_scheme_code}
//                               </option>
//                             ))}
//                         </select>

//                         {error && !schemeUserId && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the User Details
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Scheme Name
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={scheme_name}
//                           onChange={(e) => {
//                             setProductName(e.target.value);
//                           }}
//                         />
//                         {error && !scheme_name && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Product Name
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Scheme Code
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={scheme_code}
//                           onChange={(e) => {
//                             setSchemeCode(e.target.value);
//                           }}
//                         />
//                         {error && !scheme_code && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Scheme Code
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Duration
//                         </label>
//                         <select
//                           className="form-control"
//                           type="text"
//                           value={duration}
//                           onChange={(e) => {
//                             setDuration(e.target.value);
//                           }}
//                         >
//                           <option>Select Duration</option>
//                           <option>1</option>
//                           <option>2</option>
//                           <option>3</option>
//                           <option>4</option>
//                           <option>5</option>
//                           <option>6</option>
//                           <option>7</option>
//                           <option>8</option>
//                           <option>9</option>
//                           <option>10</option>
//                           <option>11</option>
//                           <option>12</option>
//                           <option>13</option>
//                           <option>14</option>
//                           <option>15</option>
//                           <option>16</option>
//                           <option>17</option>
//                           <option>18</option>
//                           <option>19</option>
//                           <option>20</option>
//                           <option>21</option>
//                           <option>22</option>
//                           <option>23</option>
//                           <option>24</option>
//                         </select>
//                         {error && !duration && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Duration
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <label
//                         htmlFor="example-text-input"
//                         className="form-control-label"
//                       >
//                         Rate
//                       </label>
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           value="Yes"
//                           name="rate"
//                           onChange={(e) => {
//                             setRate(e.target.value);
//                           }}
//                         />
//                         <label className="form-check-label" htmlFor="yes">
//                           Yes
//                         </label>
//                         <br></br>
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           value="No"
//                           name="rate"
//                           onChange={(e) => {
//                             setRate(e.target.value);
//                           }}
//                         />
//                         <label className="form-check-label" htmlFor="no">
//                           No
//                         </label>
//                         <br></br>
//                         {error && !rate && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Rate
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Grams
//                         </label>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             value="Yes"
//                             name="grams"
//                             onChange={(e) => {
//                               setGrams(e.target.value);
//                             }}
//                           />
//                           <label className="form-check-label" htmlFor="yes">
//                             yes
//                           </label>
//                           <br></br>
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             value="No"
//                             name="grams"
//                             onChange={(e) => {
//                               setGrams(e.target.value);
//                             }}
//                           />
//                           <label className="form-check-label" htmlFor="no">
//                             No
//                           </label>
//                           <br></br>
//                           {error && !grams && (
//                             <span className="text-danger text-gradient text-xs text-secondary">
//                               Enter the Grams
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Installment
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={installment}
//                           onChange={(e) => {
//                             setInstallMent(e.target.value);
//                           }}
//                         />
//                         {error && !installment && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Installment
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Total Installment
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={totalinstallment}
//                           onChange={(e) => {
//                             setTotalInstallment(e.target.value);
//                           }}
//                         />
//                         {error && !totalinstallment && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Total Installment
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Paid Installment
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={paidinstallment}
//                           onChange={(e) => {
//                             setPaidInstallment(e.target.value);
//                           }}
//                         />
//                         {error && !paidinstallment && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Paid Installment
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Pending Installment
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={pendinginstallment}
//                           onChange={(e) => {
//                             setPendingInstallment(e.target.value);
//                           }}
//                         />
//                         {error && !pendinginstallment && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Installment
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Amount
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={amount}
//                           onChange={(e) => {
//                             setAmount(e.target.value);
//                           }}
//                         />
//                         {error && !amount && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Amount
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Minimum Amount
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={min_amount}
//                           onChange={(e) => {
//                             setMinAmount(e.target.value);
//                           }}
//                         />
//                         {error && !min_amount && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Minimum Amount
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Maximum Amount
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           value={max_amount}
//                           onChange={(e) => {
//                             setMaxAmount(e.target.value);
//                           }}
//                         />
//                         {error && !max_amount && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Maximum Amount
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Amount Step Up
//                         </label>
//                         <select
//                           className="form-control"
//                           type="number"
//                           value={amountstepup}
//                           onChange={(e) => {
//                             setAmountStepUp(e.target.value);
//                           }}
//                         >
//                           <option>Select Amount Step Up</option>
//                           <option>1</option>
//                           <option>2</option>
//                           <option>3</option>
//                           <option>4</option>
//                           <option>5</option>
//                           <option>6</option>
//                           <option>7</option>
//                           <option>8</option>
//                           <option>9</option>
//                           <option>10</option>
//                         </select>
//                         {error && !amountstepup && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the AmountStepUp
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           User Details
//                         </label>
//                         <select
//                           className="form-control"
//                           value={schemeUserId}
//                           onChange={(e) => setSchemeUserId(e.target.value)}
//                         >
//                           <option>Choose User Name</option>
//                           {userId.map((usr) => (
//                             <option value={usr.id} key={usr._id}>
//                               {usr.name}-{usr.phone}
//                             </option>
//                           ))}
//                         </select>

//                         {error && !schemeUserId && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the User Details
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <div className="form-group">
//                         <label
//                           htmlFor="example-text-input"
//                           className="form-control-label"
//                         >
//                           Status
//                         </label>
//                         <select
//                           className="form-control"
//                           type="text"
//                           value={status}
//                           onChange={(e) => {
//                             setStatus(e.target.value);
//                           }}
//                         >
//                           <option>Select Status</option>
//                           <option>Active</option>
//                           <option>InActive</option>
//                         </select>
//                         {error && !status && (
//                           <span className="text-danger text-gradient text-xs text-secondary">
//                             Enter the Status
//                           </span>
//                         )}
//                       </div>
//                     </div> */}
//                     {/* <div className="row">
//                       <div className="col-md-12">
//                         <div className="form-group">
//                           <label
//                             htmlFor="example-text-input"
//                             className="form-control-label"
//                           >
//                             Scheme Description
//                           </label>
//                           <textarea
//                             className="form-control"
//                             rows="5"
//                             value={scheme_desc}
//                             onChange={(e) => {
//                               setProductDesc(e.target.value);
//                             }}
//                           ></textarea>
//                         </div>
//                       </div>
//                     </div> */}
//                   </div>
//                   <ToastContainer />
//                   <div className="row">
//                     <div className="text-end">
//                       <button
//                         type="button"
//                         onClick={addProduct}
//                         className="btn btn-primary btn-sm ms-auto mt-5"
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

// export default UserSchemeAdd;
