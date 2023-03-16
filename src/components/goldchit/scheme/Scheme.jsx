import config from "../../../config.json";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import axios from "axios";
const Scheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [schemes, setSchemes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getSchemes();
  }, []);
  const getSchemes = async () => {
    axios
      .get(config.apiurl + "api/schemes/getscheme", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setSchemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSchemes = async (id) => {
    let deletecat = await fetch(config.apiurl + "api/schemes/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getSchemes();
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
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Schemes</h6>
                    </div>

                    <div className="col-6 text-end">
                      {/* <AHrefJavascript="javascript:void(0);" className="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp; */}
                      <Link
                        className="btn bg-gradient-dark mb-0"
                        to="/scheme/add"
                      >
                        <i className="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Scheme
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-3">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-secondary opacity-7 ps-2">
                            S.No
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Scheme Name
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Scheme Code
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Duration
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Installment
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Amount
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Grams
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Rate
                          </th>
                          <th className="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemes &&
                          schemes.map((item, index) => (
                            <tr key={item._id}>
                              <td>{index + 1}</td>
                              {/* <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={config.apiurl + item.image}
                                    className="avatar avatar-sm me-3"
                                    alt={item.title}
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-1 text-sm ">{item.title}</h6>
                                </div>
                              </div>
                            </td> */}
                              <td>
                                <h6 className="mb-0 text-sm">
                                  {item.scheme_name}
                                </h6>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.scheme_code}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.duration}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.installment}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.amount}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.grams}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.rate}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <Link
                                  to={"/scheme/edit/" + item._id}
                                  className="btn btn-link text-dark px-3 mb-0"
                                >
                                  <i
                                    className="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </Link>
                                <Link
                                  to={"/scheme/view/" + item._id}
                                  className="btn btn-link text-success px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-eye text-success me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </Link>
                                <Link
                                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                                  onClick={() => deleteSchemes(item._id)}
                                >
                                  <i
                                    className="far fa-trash-alt me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Delete
                                </Link>
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

export default Scheme;
