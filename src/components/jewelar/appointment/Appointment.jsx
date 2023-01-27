import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
const Appointment = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getAppointmentsData = async () => {
    axios
      .get(config.apiurl + "/api/schedule/getappt", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setAppointmentsInfo(res.data.data);
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
                      <h6 class="mb-0">Appointment</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          {/* <th class="text-secondary opacity-7 ps-2">Name</th> */}
                          <th class="text-secondary opacity-7">User Details</th>
                          <th class="text-secondary opacity-7 ps-2">
                            Date&Time
                          </th>
                          <th class="text-secondary opacity-7 ps-2">Status</th>
                          <th class="text-secondary opacity-7 ps-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointmentsInfo.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">
                                    {item.user_id.name}
                                  </h6>
                                  <p class="text-xs mb-2">
                                    Email: {item.user_id.email}
                                  </p>
                                  <p class="text-xs mb-2">
                                    Mobile:
                                    <span class="text-secondary">
                                      {item.user_id.phone}
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
                                      {item.date}
                                    </span>
                                  </p>
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.time}
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
                                      {item.schedule_status}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ms-auto">
                                <a
                                  href={"/appointment/view/" + item._id}
                                  class="btn btn-link text-dark px-3 mb-0"
                                >
                                  <i
                                    class="fa fa-eye-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </a>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointment;
