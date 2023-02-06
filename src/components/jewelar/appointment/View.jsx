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

  const [appointmentId, setAppointmentId] = useState("");
  const [username, setusername] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [streetName, setStreetName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [productslist, setProducts] = useState([]);
  const [comments, setComments] = useState("");
  const [staffName, setStaffName] = useState("");
  const [staffValue, setStaffValue] = useState("");
  const [staffListInfo, setStaffListInfo] = useState([]);
  const [updateapptInfo, setUpdateApptInfo] = useState("");
  const [scheduleStatus, setScheduleStatus] = useState("");
  useEffect(() => {
    getStaffData();
    getAppointmentsView();
    updateStatus();
  }, []);
  const getStaffData = async () => {
    let staffList = await fetch(config.apiurl + "/api/staff/getstaff", {
      method: "get",
    });
    staffList = await staffList.json();
    setStaffListInfo(staffList.data.results);
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
    fetch(config.apiurl + "/api/schedule/appt/" + appointmentId, headers);
  };

  const getAppointmentsView = async () => {
    let appointmentdetails = await fetch(
      config.apiurl + "/api/schedule/appt/" + params._id,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    appointmentdetails = await appointmentdetails.json();
    setAppointmentId(appointmentdetails.data[0]._id);
    setusername(appointmentdetails.data[0].user_name);
    setPhoneNumber(appointmentdetails.data[0].user_Phone);
    setEmail(appointmentdetails.data[0].user_email);
    setStreetName(appointmentdetails.data[0].user_streetname);
    setStatus(appointmentdetails.data[0].schedule_status);
    setDate(appointmentdetails.data[0].date);
    setTime(appointmentdetails.data[0].time);
    // getProductvalue(appointmentdetails.data.products);
  };

  // function getProductvalue(appt) {
  //   const apptvalue = JSON.parse(appt);
  //   setProducts(apptvalue);
  // }
  const getProducts = async () => {
    let productdetails = await fetch(
      config.apiurl + "/api/schedule/appt/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    productdetails = await productdetails.json();
    console.log(productdetails.data);
    setProducts(productdetails.data);
  };
  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Appointment View</h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {/* <div class="col-xl-12 col-sm-12 mb-xl-0 mb-4">
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
                                  <td>{username}</td>
                                </tr>
                                <tr>
                                  <td>Phone No</td>
                                  <td>{phonenumber}</td>
                                </tr>
                                <tr>
                                  <td>Email</td>
                                  <td>{Email}</td>
                                </tr>
                                <tr>
                                  <td>Address</td>
                                  <td>{streetName}</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div class="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                    <div class="">
                      <div class="card-body p-3">
                        <div class="row">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-uppercase font-weight-bold">
                              Appoinment Details
                            </p>
                            <div class="table-responsive p-5">
                              <table class="table align-items-center mb-0 ">
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
                                  <td colspan="2">&nbsp;</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
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
                </div>
              </div>
            </div>
            <div class="col-md-4">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewAppointment;
