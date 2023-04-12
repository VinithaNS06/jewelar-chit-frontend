import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ViewScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  const [orederlist, setOrderList] = useState({});
  const [schemeList, setSchemeList] = useState([]);
  const getOrders = async () => {
    let orderresults = await fetch(
      config.apiurl + "api/schemes/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );

    orderresults = await orderresults.json();
    console.log(orderresults.data);
    setOrderList(orderresults?.data[0]);
  };
  const getUser = async () => {
    let schemedetails = await fetch(
      config.apiurl + "api/schemelist/getscheme_byuser/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      }
    );
    schemedetails = await schemedetails.json();
    console.log(schemedetails?.data);
    setSchemeList(schemedetails?.data);
  };
  useEffect(() => {
    getUser();
    getOrders();
  }, []);

  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Scheme View</h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-end">
                    <Link
                      to="/scheme"
                      type="button"
                      className="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                    <div>
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              Scheme Details
                            </p>
                            <div className="table-responsive p-5">
                              <div class="card text-center">
                                <div
                                  class="card-header"
                                  // style={{
                                  //   padding: "30px",
                                  //   fontWeight: "bold",
                                  //   color: "black",
                                  //   backgroundColor: "#e96ee9",
                                  // }}
                                >
                                  {orederlist &&
                                    orederlist._id &&
                                    orederlist.scheme_name}{" "}
                                  _{" "}
                                  {orederlist &&
                                    orederlist._id &&
                                    orederlist.scheme_code}
                                </div>

                                <div
                                  class="card-body"
                                  style={{ paddingBottom: "15px" }}
                                >
                                  <h5
                                    class="card-title"
                                    style={{ fontSize: "15px" }}
                                  >
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.scheme_desc}
                                  </h5>

                                  <p
                                    class="text-primary"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    <button className="btn btn btn-success">
                                      ₹ :
                                      {orederlist &&
                                        orederlist._id &&
                                        orederlist.amount}
                                    </button>
                                  </p>
                                </div>
                                <div class="card-footer text-muted">
                                  <p class="card-text d-flex">
                                    Installment :
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.installment}
                                  </p>
                                  <p class="card-text d-flex">
                                    Duration :
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.duration}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                    <div>
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              User Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table table-borderless  mb-0 ">
                                <thead className="thead-dark">
                                  <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                {schemeList &&
                                  schemeList.length &&
                                  schemeList.map((item, index) => (
                                    <tr>
                                      <td>
                                        <tr key={item._id}>
                                          <td>{index + 1}</td>
                                        </tr>
                                      </td>

                                      <td style={{ alignItems: "center" }}>
                                        <td>{item.user_name}</td>
                                      </td>
                                      <td>
                                        <td>{item.user_address}</td>
                                      </td>
                                      <td>
                                        <td>{item.user_Phone}</td>
                                      </td>
                                      <td>
                                        <td>{item.amount}</td>
                                      </td>
                                      <td>
                                        <a
                                          href={
                                            "/userschemes/view/" + item.user_id
                                          }
                                          className="btn btn-link text-success px-3 mb-0"
                                        >
                                          <i
                                            className="fa fa-eye text-success me-2"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ViewScheme;
