import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
const Appointment = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [scheduleinfo, setScheduleinfo] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const getAppointmentsData = async () => {
    axios
      .get(config.apiurl + "api/schedule/getappt", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setScheduleinfo(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAppointmentsData();
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
                      <h6 className="mb-0">Appointment</h6>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <a
                      className="btn bg-gradient-dark mb-0"
                      href="/appointment/add"
                    >
                      <i className="fas fa-plus" aria-hidden="true"></i>
                      &nbsp;&nbsp;Add New Appointment
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-5">
                    <table className="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th className="text-secondary opacity-7 ps-2">
                            S.No
                          </th>
                          <th className="text-secondary opacity-7">
                            User Details
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Date&Time
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Products
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {scheduleinfo &&
                            scheduleinfo.length &&
                            scheduleinfo.map((item, index) => (
                              <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-1 text-sm ">
                                        Name: {item.user_name}
                                      </h6>
                                      <p>Email: {item.user_email}</p>
                                      <p>
                                        Mobile:
                                        <span className="text-secondary">
                                          {item.user_Phone}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <p className="text-xs mb-2">
                                        <span className="text-dark font-weight-bold ms-sm-2">
                                          {item.user_date}
                                        </span>
                                      </p>
                                      <p className="text-xs mb-2">
                                        <span className="text-dark font-weight-bold ms-sm-2">
                                          {item.user_Time}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                      <p className="text-xs mb-2">
                                        <span className="text-dark font-weight-bold ms-sm-2">
                                          ProductTitle:{item.user_pro_title}
                                        </span>
                                      </p>
                                      <p className="text-xs mb-2">
                                        <span className="text-dark font-weight-bold ms-sm-2">
                                          Product:{item.user_pro_product}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                {/* <td>
                                  <div className="ms-auto">
                                    <a
                                      href={"/appointment/view/" + item._id}
                                      className="btn btn-link text-success px-3 mb-0"
                                    >
                                      <i
                                        className="fa fa-eye text-success me-2"
                                        aria-hidden="true"
                                      ></i>
                                      View
                                    </a>
                                  </div>
                                </td> */}
                                <td>
                                  <div className="ms-auto">
                                    <a
                                      href={"/appointment/view/" + item._id}
                                      className="btn btn-link text-success px-3 mb-0"
                                    >
                                      <i
                                        className="fa fa-eye text-success me-2"
                                        aria-hidden="true"
                                      ></i>
                                      View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </>
                      </tbody>
                    </table>
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

export default Appointment;
