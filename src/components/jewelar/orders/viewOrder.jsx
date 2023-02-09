import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const ViewOrder = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  const [orederlist, setOrderList] = useState({});

  const getOrders = async () => {
    console.log(params);
    let orderresults = await fetch(
      config.apiurl + "api/orders/" + params.viewid
    );
    orderresults = await orderresults.json();
    console.log(orderresults.data[0]);
    setOrderList(orderresults.data[0]);
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Order View</h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="text-end">
                    <Link
                      to="/orders"
                      type="button"
                      class="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </Link>
                  </div>
                  <div class="row">
                    <div class="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                      <div class="">
                        <div class="card-body p-3">
                          <div class="row">
                            <div class="numbers">
                              <p class="text-sm mb-0 text-uppercase font-weight-bold">
                                Customer Details
                              </p>
                              <div class="table-responsive p-5">
                                <table class="table align-items-center mb-0 ">
                                  <tr>
                                    <td>Name</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.customer_id &&
                                        orederlist.customer_id.name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Phone No</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.customer_id &&
                                        orederlist.customer_id.phone}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.customer_id &&
                                        orederlist.customer_id.email}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                      <div class="">
                        <div class="card-body p-3">
                          <div class="row">
                            <div class="numbers">
                              <p class="text-sm mb-0 text-uppercase font-weight-bold">
                                Product Details
                              </p>
                              <div class="table-responsive p-5">
                                <table class="table align-items-center mb-0 ">
                                  <tr>
                                    <td>Product Tilte</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.product_id &&
                                        orederlist.product_id.title}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Product</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.product_id &&
                                        orederlist.product_id.product}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Price</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.product_id &&
                                        orederlist.product_id.price}
                                    </td>
                                  </tr>
                                  {/* <tr>
                                    <td>Title</td>
                                    <td>
                                      {orederlist &&
                                        orederlist.customer_product_id &&
                                        orederlist.customer_product_title}
                                    </td>
                                  </tr> */}
                                  <tr>
                                    <td>Transaction</td>
                                    <td>
                                      {orederlist && orederlist.transaction_id}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="card-body px-0 pt-0 pb-2">
                  <p class="text-sm mb-0 text-uppercase font-weight-bold pl-2">
                    {" "}
                    Product Details
                  </p>
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7">Image</th>
                          <th class="text-secondary opacity-7 ps-2">Name</th>
                        </tr>
                      </thead>

                      <tbody>
                        {productslist.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={config.baseurl + item.image}
                                class="avatar avatar-sm me-3"
                                alt={item.name}
                              />
                            </td>
                            <td>{item.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div> */}
                </div>
              </div>
              {/* <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Update Status</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          required=""
                          class="form-control-label"
                        >
                          Staff
                        </label>
                        <select
                          className="form-control"
                          value={staffValue}
                          onChange={(e) => setStaffValue(e.target.value)}
                        >
                          <option>Choose Staff Name</option>
                          {staffListInfo.map((stf) => (
                            <option value={stf._id} key={stf._id}>
                              {stf.name}- {stf.staffid}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          required=""
                          class="form-control-label"
                        >
                          Comments
                        </label>
                        <textarea
                          class="form-control"
                          name="stsComments"
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Status
                        </label>
                        <select
                          class="form-control"
                          name="status"
                          value={scheduleStatus}
                          onChange={(e) => setScheduleStatus(e.target.value)}
                        >
                          <option>Select Status</option>
                          <option>Accepted</option>
                          <option>Rejected</option>
                          <option>Confirmed</option>
                          <option>Cancelled</option>
                          <option>Completed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm ms-auto mt-5"
                        onClick={updateStatus}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewOrder;
