import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const ViewAppointment = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [productslist, setProducts] = useState([]);
  const [comments, setComments] = useState("");
  const [staffValue, setStaffValue] = useState("");
  const [staffListInfo, setStaffListInfo] = useState([]);
  const [scheduleStatus, setScheduleStatus] = useState("");
  useEffect(() => {
    getStaffData();
    getProductData();
    // getAppointmentsView();
    updateStatus();
  }, []);
  const getStaffData = async () => {
    // console.log("1234", staffList);
    let staffList = await fetch(config.apiurl + "api/staff/getstaff", {
      method: "get",
    });
    staffList = await staffList.json();
    console.log(staffList?.data?.results);
    setStaffListInfo(staffList?.data?.results);
  };

  const handleStaffsubmit = () => {
    navigate("/appointment");
  };

  const updateStatus = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        schedule_status: scheduleStatus,
        comments: comments,
        staffValue: staffValue,
      }),
    };
    // fetch(config.apiurl + "/api/schedule/appt/" + appointmentId, headers);
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(
        config.apiurl + "api/schedule/apptdetails/" + params.viewid
      );

      console.log(response);
      const productList = response?.data;
      console.log(productList);
      setStatus(productList.data[0].schedule_status);
      setDate(productList.data[0].date);
      setTime(productList.data[0].time);
      setProducts(productList.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <>
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header pb-3">
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <h6 className="mb-0">Appointment View</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                      <div className="">
                        <div className="card-body p-3">
                          <div className="row">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                Appoinment Details
                              </p>
                              <div className="table-responsive p-5">
                                <table className="table align-items-center mb-0 ">
                                  <tr>
                                    <td>Date</td>
                                    <td>{date}</td>
                                  </tr>
                                  <tr>
                                    <td>Time</td>
                                    <td>{time}</td>
                                  </tr>
                                  <tr>
                                    <td>Status</td>
                                    <td>{status}</td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2"></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-3">
                      <div className="row">
                        <div className="col-6 d-flex align-items-center">
                          <h6 className="text-sm mb-0 text-uppercase font-weight-bold">
                            Product Details
                          </h6>
                        </div>
                      </div>
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-secondary opacity-7 ps-2">
                              S.No
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Carrot
                            </th>
                            <th className="text-secondary opacity-7">Title</th>
                            <th className="text-secondary opacity-7">
                              Wastage
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Grams
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Making
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Price
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Product
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Remark
                            </th>
                            <th className="text-secondary opacity-7 ps-2">
                              Skuid
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {productslist &&
                            productslist.map((item, index) => (
                              <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.carrot}
                                      </h6>
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.title}
                                      </h6>
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.wastage}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.grams}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.making}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.price}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.product}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.remark}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.product_id.skuid}
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header pb-3">
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <h6 className="mb-0">Updated Status</h6>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            required=""
                            className="form-control-label"
                          >
                            Staff
                          </label>
                          <select
                            className="form-control"
                            value={staffValue}
                            onChange={(e) => setStaffValue(e.target.value)}
                          >
                            <option>Choose Staff Name</option>
                            {staffListInfo &&
                              staffListInfo.length &&
                              staffListInfo.map((stf) => (
                                <option key={stf._id} value={stf._id}>
                                  {stf.name}- {stf.staffid}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            required=""
                            className="form-control-label"
                          >
                            Comments
                          </label>
                          <textarea
                            className="form-control"
                            name="stsComments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label"
                          >
                            Status
                          </label>
                          <select
                            className="form-control"
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

                    <div className="row">
                      <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm ms-auto mt-5"
                          onClick={handleStaffsubmit}
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
        </>
      </main>
    </>
  );
};

export default ViewAppointment;
