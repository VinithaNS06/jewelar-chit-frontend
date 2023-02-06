import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const ViewScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  const [orederlist, setOrderList] = useState({});
  const [schemeList, setSchemeList] = useState([]);
  const getOrders = async () => {
    console.log(params);
    let orderresults = await fetch(
      config.apiurl + "/api/schemes/" + params.viewid
    );

    orderresults = await orderresults.json();
    console.log(orderresults.data);
    setOrderList(orderresults.data[0]);
  };
  const getUser = async () => {
    let schemedetails = await fetch(
      config.apiurl + "/api/userscheme/users/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    schemedetails = await schemedetails.json();
    console.log(schemedetails.data);
    setSchemeList(schemedetails.data);
  };
  useEffect(() => {
    getOrders();
    getUser();
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
                      <h6 class="mb-0">Scheme View</h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="text-end">
                    <Link
                      to="/scheme"
                      type="button"
                      class="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </Link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                    <div class="">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-uppercase font-weight-bold">
                              Scheme Details
                            </p>
                            <div class="table-responsive p-5">
                              <table class="table align-items-center mb-0 ">
                                <tr>
                                  <td>Scheme Name</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.scheme_name}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Scheme Code</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.scheme_code}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Description</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.scheme_desc}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Installment</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.installment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Duration</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.duration}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Amount</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Pending Installment</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.pendinginstallment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Paid Installment</td>
                                  <td>
                                    {orederlist &&
                                      orederlist._id &&
                                      orederlist.paidinstallment}
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
                              Scheme Details
                            </p>
                            <div class="table-responsive p-5">
                              <table class="table align-items-center mb-0 ">
                                <tr>
                                  <td>Product</td>
                                  <td>{schemeList && schemeList.length}</td>
                                </tr>
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
