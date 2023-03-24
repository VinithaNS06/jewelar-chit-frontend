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
  //  const [schemeList, setSchemeList] = useState({});
  const [schemeList, setSchemeList] = useState([]);

  const getOrders = async () => {
    axios
      .get(config.apiurl + "api/userschemes/" + params.viewid, {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setSchemeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
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
                      to="/userscheme"
                      type="button"
                      className="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </Link>
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
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.scheme_name}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Scheme Code</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.scheme_code}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Installment</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.installment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Duration</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.duration}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Amount</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Pending Installment</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.pendinginstallment}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Paid Installment</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.scheme_id.paidinstallment}
                                  </td>
                                </tr>
                                {/* <tr>
                                  <td>Transaction ID</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.payment_id.transaction_id}
                                  </td>
                                </tr> */}
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
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.customer_id.name}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Phone</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.customer_id.phone}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Email</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.customer_id.email}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Address</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.customer_id.address}
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
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.payment_id.delivery_fee}
                                  </td>
                                </tr> */}
                                <tr>
                                  <td>Amount</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.amount}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Final Amount</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.payment_id.final_amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Transaction</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.payment_id.transation_id}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Payment Status</td>
                                  <td>
                                    {schemeList &&
                                      schemeList._id &&
                                      schemeList.payment_id.payment_status}
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
