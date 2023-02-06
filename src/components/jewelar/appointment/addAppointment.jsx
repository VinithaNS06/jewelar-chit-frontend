import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
const AddAppointment = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [Raterowid, setRowId] = useState("");
  const [user_id, setUser_Id] = useState("");
  const [product_id, setProduct_Id] = useState("");
  const [staff_id, setStaff_Id] = useState("");
  const [staffListInfo, setStaffListInfo] = useState([]);
  const [staffValue, setStaffValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function addAppt() {
    const newAppot = {
      user_id,
      product_id,
      staff_id,
    };
    console.log(newAppot);
    fetch(config.apiurl + "/api/schedule/createappt", {
      method: "POST",
      body: JSON.stringify(newAppot),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    })
      .then(() => toast.success("Appointment Created Sucessfully"))
      .then(() =>
        setTimeout(() => {
          //   navigate("/appointment");
        }, 5000)
      );
  }
  const [userId, setUserId] = useState([]);
  //   const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [schemeUserId, setSchemeUserId] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(config.apiurl + "/api/users/get-users")
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getProducts = async () => {
    let prodresult = await fetch(config.apiurl + "/api/products/getproduct");
    prodresult = await prodresult.json();
    console.log(prodresult.data);
    setProducts(prodresult.data.results);
  };
  useEffect(() => {
    getStaffData();
    getProducts();
  }, []);
  const getStaffData = async () => {
    let staffList = await fetch(config.apiurl + "/api/staff/getstaff", {
      method: "get",
    });
    staffList = await staffList.json();
    setStaffListInfo(staffList.data.results);
  };
  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Add Appointment</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Staff Details
                        </label>
                        <select
                          className="form-control"
                          value={staff_id}
                          onChange={(e) => setStaff_Id(e.target.value)}
                        >
                          <option>Choose Staff Name</option>
                          {staffListInfo.map((stf) => (
                            <option value={stf._id} key={stf._id}>
                              {stf.name}- {stf.staffid}
                            </option>
                          ))}
                        </select>
                        {error && !schemeUserId && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the User Details
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          User Details
                        </label>
                        <select
                          className="form-control"
                          value={user_id}
                          onChange={(e) => setUser_Id(e.target.value)}
                        >
                          <option>Choose User Name</option>
                          {userId.map((usr) => (
                            <option value={usr._id} key={usr._id}>
                              {usr.name}-{usr.phone}
                            </option>
                          ))}
                        </select>

                        {error && !schemeUserId && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the User Details
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product Details
                        </label>
                        <select
                          className="form-control"
                          value={product_id}
                          onChange={(e) => setProduct_Id(e.target.value)}
                        >
                          <option>Choose Product</option>
                          {products &&
                            products.map((prodt) => (
                              <option value={prodt._id} key={product_id}>
                                {prodt.title}
                              </option>
                            ))}
                        </select>

                        {error && !schemeUserId && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the User Details
                          </span>
                        )}
                      </div>
                    </div>
                    {/* <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <p class="text-xs mb-2">
                            <span class="text-dark font-weight-bold ms-sm-2">
                              {item.user_date}
                              {"  "}
                              {item.user_Time}
                            </span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <p class="text-xs mb-2">
                            <span class="text-dark font-weight-bold ms-sm-2">
                              {item.user_products}
                            </span>
                          </p>
                        </div>
                      </div>
                    </td> */}
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={addAppt}
                        class="btn btn-primary btn-sm ms-auto mt-5"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddAppointment;
