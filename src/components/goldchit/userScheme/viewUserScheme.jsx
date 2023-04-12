import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const ViewUserScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  const [userSchemeList, setUserSchemeList] = useState([]);
  const [schemeList, setSchemeList] = useState([]);
  const getSchemelist = async () => {
    axios
      .get(
        config.apiurl +
          "api/userschemes/" +
          params.viewid +
          "/" +
          params.viewid,
        {
          headers: {
            Authorization: "Bearer " + accesstoken.data.access_token,
          },
        }
      )
      .then((res) => {
        setSchemeList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOrders = async () => {
    axios
      .get(config.apiurl + "api/userschemes/" + params.viewid, {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setUserSchemeList(res?.data?.data);
        console.log(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrders();
    getSchemelist();
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
                      href="/userscheme"
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
                              User Scheme Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table align-items-center mb-0 ">
                                <tr>
                                  <td>Scheme Name</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme?.scheme_name ||
                                      ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme?.scheme_name}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Scheme Code</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme?.scheme_code ||
                                      ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme?.scheme_code}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Installment</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme?.installment ||
                                      ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme?.installment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Duration</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme?.duration ||
                                      ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme?.duration}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Amount</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme?.amount || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme?.amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Pending Installment</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme
                                      ?.pendinginstallment || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme
                                        ?.pendinginstallment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Paid Installment</td>
                                  <td>
                                    {userSchemeList?.[0]?.scheme
                                      ?.paidinstallment || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.scheme
                                        ?.paidinstallment}
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
                <div className="row">
                  <div className="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                    <div className="">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              Customer Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table align-items-center mb-0 ">
                                <tr>
                                  <td> Name</td>
                                  <td>
                                    {userSchemeList?.[0]?.user_id?.name || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.user_id?.name}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Phone</td>
                                  <td>
                                    {userSchemeList?.[0]?.user_id?.phone || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.user_id?.phone}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Email</td>
                                  <td>
                                    {userSchemeList?.[0]?.user_id?.email || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.user_id?.email}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Address</td>
                                  <td>
                                    {userSchemeList?.[0]?.user_id?.address ||
                                      ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.user_id?.address}
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
                <div className="row">
                  <div className="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                    <div className="">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                              Transaction Details
                            </p>
                            <div className="table-responsive p-5">
                              <table className="table align-items-center mb-0 ">
                                {/* <tr>
                                  <td> Dleivery Fee</td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList.payment_id.delivery_fee}
                                  </td>
                                </tr> */}
                                <tr>
                                  <td>Amount</td>
                                  <td>{userSchemeList?.[0]?.amount || ""}</td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.amount}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Transaction</td>
                                  <td>
                                    {userSchemeList?.[0]?.transation_id || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.transation_id}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Payment Status</td>
                                  <td>
                                    {userSchemeList?.[0]?.payment_status || ""}
                                  </td>
                                  <td>
                                    {userSchemeList &&
                                      userSchemeList._id &&
                                      userSchemeList?.[0]?.payment_status}
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewUserScheme;
