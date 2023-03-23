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
    let orderresults = await fetch(
      config.apiurl + "api/schemes/" + params.viewid
    );

    orderresults = await orderresults.json();
    console.log(orderresults.data);
    setOrderList(orderresults.data[0]);
  };
  const getUser = async () => {
    let schemedetails = await fetch(
      config.apiurl + "api/userscheme/" + params.viewid,
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
                    <a
                      href="/scheme"
                      type="button"
                      className="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                    <div className="">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              Scheme Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table align-items-center mb-0 ">
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

                  <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                    <div className="">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              Scheme Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table align-items-center mb-0 ">
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
