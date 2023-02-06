import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import config from "../../../config.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getCustomers();
    viewCustomer();
  }, []);

  const getCustomers = async () => {
    let prodresult = await fetch(config.apiurl + "/api/customers/getCustomer");
    prodresult = await prodresult.json();
    setCustomers(prodresult.data.results);
  };
  const viewCustomer = async (id) => {
    let viewcust = await fetch(config.apiurl + "/api/customers/" + id, {
      method: "get",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    viewcust = await viewcust.json();
    if (viewcust) {
      navigate("/customer");
    }
  };

  const deleteCustomer = async (id) => {
    let deletecat = await fetch(config.apiurl + "/api/customers/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getCustomers();
    }
  };
  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Customers</h6>
                    </div>

                    <div class="col-6 text-end">
                      {/* <a href="javascript:void(0);" class="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp; */}
                      <a class="btn bg-gradient-dark mb-0" href="/customer/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Customer
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-3">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7 ps-2">
                            Customer Details
                          </th>
                          <th class="text-secondary opacity-7">Address</th>
                          <th class="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>

                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">Name:{item.name}</p>
                                  <p class="text-xs mb-2">
                                    Email: {item.email}{" "}
                                  </p>
                                  <p class="text-xs mb-2">
                                    Mobile:{" "}
                                    <span class="text-secondary">
                                      {item.phone}
                                    </span>{" "}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.address}</h6>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div class="ms-auto">
                                <a
                                  href={"/customer/edit/" + item._id}
                                  class="btn btn-link text-primary px-3 mb-0"
                                >
                                  <i
                                    class="fas fa-pencil-alt text-primary me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </a>

                                <a
                                  href={"/customer/view/" + item._id}
                                  class="btn btn-link text-success px-3 mb-0"
                                >
                                  <i
                                    class="fa fa-eye text-success me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </a>

                                <a
                                  class="btn btn-link text-danger text-gradient px-3 mb-0"
                                  onClick={() => deleteCustomer(item._id)}
                                >
                                  <i
                                    class="far fa-trash-alt me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Delete
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

export default Customer;
