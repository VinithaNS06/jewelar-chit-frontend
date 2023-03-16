import Sidebar from "../../../sidebar/Sidebar";
import Header from "../../../headerbar/Header";
import config from "../../../../config.json";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./notification.scss";
import axios from "axios";
const Notification = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [notificationlist, setNotificationsList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getNotificationDetails();
  }, []);

  const getNotificationDetails = async () => {
    let catresult = await fetch(config.apiurl + "api/notifications/getnotify");
    catresult = await catresult.json();
    setNotificationsList(catresult.data.results);
  };

  const [notifyname, setNotifyName] = useState("");
  const [description, setDescription] = useState("");
  const [updateid, setUpdateid] = useState("");
  const [error, setError] = useState(false);

  const handleCatsubmit = async () => {
    if (!notifyname) {
      setError(true);
      return false;
    }
    let apicaturl = "";
    let methodapi = "";
    if (updateid) {
      apicaturl = config.apiurl + "api/notifications/" + updateid;
      methodapi = "put";
    } else {
      apicaturl = config.apiurl + "api/notifications/createnotify";
      methodapi = "post";
    }

    let addcat = await fetch(apicaturl, {
      method: methodapi,
      body: JSON.stringify({ notifyname, description }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });

    let addcatrs = await addcat.json();
    if (addcatrs.status == "true") {
      getNotificationDetails();
    }
  };

  const getCategoryedit = async (editid) => {
    let cateditdetails = await fetch(
      config.apiurl + "api/notifications/" + editid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    cateditdetails = await cateditdetails.json();
    setNotifyName(cateditdetails.data[0].notifyname);
    setDescription(cateditdetails.data[0].description);
    setUpdateid(cateditdetails.data[0]._id);
  };

  const deleteStaff = async (id) => {
    let deletecat = await fetch(config.apiurl + "api/notifications/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getNotificationDetails();
    }
  };
  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Notification</h6>
                    </div>
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
                          <th className="text-secondary opacity-7 ps-2">
                            Notification Name
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Description
                          </th>
                          <th className="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {notificationlist.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    {item.notifyname}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    {item.description}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="ms-auto">
                                <Link
                                  className="btn btn-link text-dark px-3 mb-0"
                                  onClick={() => getCategoryedit(item._id)}
                                >
                                  <i
                                    className="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </Link>
                                <Link
                                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                                  onClick={() => deleteStaff(item._id)}
                                >
                                  <i
                                    className="far fa-trash-alt me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Delete
                                </Link>
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
                      <h6 className="mb-0">Add/Edit Notification</h6>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Notification Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Notification Name"
                          required
                          value={notifyname}
                          onChange={(e) => {
                            setNotifyName(e.target.value);
                          }}
                        />
                        {error && !notifyname && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter Notification Name
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Description
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Description"
                          required
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                        {error && !description && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Description
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="text-end">
                      <button
                        type="button"
                        onClick={handleCatsubmit}
                        className="btn btn-primary btn-sm ms-auto mt-5"
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

export default Notification;
