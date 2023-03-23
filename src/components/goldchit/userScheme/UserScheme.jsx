import config from "../../../config.json";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import axios from "axios";
const UserScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [userschemes, setUserSchemes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getSchemes();
  }, []);

  const getSchemes = async () => {
    axios
      .get(config.apiurl + "api/userschemes/getuserscheme", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        console.log(res?.data?.data);
        setUserSchemes(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteSchemes = async (id) => {
    let deletecat = await fetch(config.apiurl + "api/userschemes/" + id, {
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
                      <h6 className="mb-0">User Schemes</h6>
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
                            Name
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Scheme Name
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Scheme Code
                          </th>

                          <th className="text-secondary opacity-7 ps-2">
                            Scheme Duration
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Installment
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Amount
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Transaction
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Payment Status
                          </th>
                          <th className="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userschemes &&
                          userschemes.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>

                              <td>
                                <p className="text-xs mb-2">
                                  Name: {item.user_name}
                                </p>
                                <p className="text-xs mb-2">
                                  Address: {item.user_address}
                                </p>
                              </td>

                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.user_schemename}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.user_schemecode}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.user_scheme_duration}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.user_scheme_installment}
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
                                      {item.transactionid}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.paymentstatus}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href={"/userschemes/view/" + item.user_id}
                                  className="btn btn-link text-success px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-eye text-success me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </a>

                                <a
                                  href={"/userschemes/pay/" + item.user_id}
                                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-shopping-cart me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Pay
                                </a>
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

export default UserScheme;
