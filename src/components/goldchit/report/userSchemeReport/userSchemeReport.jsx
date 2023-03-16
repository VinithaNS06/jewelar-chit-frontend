import config from "../../../../config.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../sidebar/Sidebar";
import Header from "../../../headerbar/Header";

const UserSchemeReport = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [userschemes, setUserSchemes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getSchemes();
  }, []);

  const getSchemes = async () => {
    let schresult = await fetch(config.apiurl + "api/userscheme/getuserscheme");
    schresult = await schresult.json();
    setUserSchemes(schresult.data);
    console.log(schresult.data);
  };

  const deleteSchemes = async (id) => {
    let deletecat = await fetch(config.apiurl + "api/userscheme/" + id, {
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

                    {/* <div className="col-6 text-end">
                       <AHrefJavascript="javascript:void(0);" className="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp; 
                      <a
                        className="btn bg-gradient-dark mb-0"
                        href="/userscheme/add"
                      >
                        <i className="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New UserScheme
                      </a>
                    </div>  */}
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
                          {/* <th className="text-secondary opacity-7 ps-2">Phone</th>
                           */}
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
                        </tr>
                      </thead>
                      <tbody>
                        {userschemes &&
                          userschemes.length &&
                          userschemes.map((item, index) => (
                            <tr key={item._id}>
                              <td>{index + 1}</td>
                              {/* <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={config.baseurl + item.image}
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
                                {/* Phone:{" "}
                                {item.user_phone} */}
                                <p className="text-xs mb-2">
                                  Name: {item.customer_name} &nbsp; &nbsp;
                                  Address: {item.customer_address} &nbsp;
                                </p>
                                {/* <p className="text-xs mb-2">
                                Remarks:{" "}
                                <span className="text-secondary">
                                  {item.remark}
                                </span>{" "}
                              </p> */}
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_scheme_name}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_scheme_code}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_scheme_duration}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_scheme_installment}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_scheme_amount}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_transaction_id}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {item.customer_paymentstatus}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              {/* <td>
                                <a
                                  href={"/userscheme/view/" + item._id}
                                  className="btn btn-link text-success px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-eye text-success me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </a>

                                <a
                                  href={"/userscheme/pay/" + item.payment_id}
                                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-shopping-cart me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Pay
                                </a>
                              </td> */}
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

export default UserSchemeReport;
