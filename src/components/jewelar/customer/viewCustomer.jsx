import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const ViewCustomer = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();

  const [customerlist, setCustomerlist] = useState({});
  const [productlist, setProductList] = useState([]);
  const [schemeList, setSchemeList] = useState([]);
  const getCustomers = async () => {
    let customerdetails = await fetch(
      config.apiurl + "/api/customers/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    customerdetails = await customerdetails.json();
    console.log(customerdetails);
    setCustomerlist(customerdetails.data[0]);
  };
  const getProducts = async () => {
    let productdetails = await fetch(
      config.apiurl + "/api/orders/userorders/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    productdetails = await productdetails.json();
    console.log(productdetails.data);
    setProductList(productdetails.data);
  };
  const getSchemes = async () => {
    let schemedetails = await fetch(
      config.apiurl + "/api/schemelist/scheme/" + params.viewid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    schemedetails = await schemedetails.json();
    console.log(schemedetails.data);
    setSchemeList(schemedetails.data);
  };
  useEffect(() => {
    getCustomers();
    getProducts();
    getSchemes();
  }, []);

  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Customer View</h6>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="text-end">
                    <Link
                      to="/customer"
                      type="button"
                      class="btn btn-primary btn-md ms-auto mt-5"
                    >
                      Back
                    </Link>
                  </div>
                  <div class="row">
                    <div class="col-xl-8 col-sm-12 mb-xl-0 mb-4">
                      <div class="">
                        <div class="card-body p-3">
                          <div class="row">
                            <div class="numbers">
                              <p class="text-sm mb-0 text-uppercase font-weight-bold">
                                Order Details
                              </p>
                              <div class="table-responsive p-5">
                                <table class="table align-items-center mb-0 ">
                                  <tr>
                                    <td>Name</td>
                                    <td>
                                      {" "}
                                      {customerlist && customerlist.name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Phone No</td>
                                    <td>
                                      {customerlist && customerlist.phone}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>
                                      {customerlist && customerlist.email}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Address</td>
                                    <td>
                                      {customerlist && customerlist.address}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-0 pb-2">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold pl-4">
                        {" "}
                        Product Details
                      </p>
                      <div class="table-responsive p-5">
                        <table class="table align-items-center mb-0 ">
                          <thead>
                            <tr>
                              <th class="text-secondary opacity-7 ps-2">
                                S.No
                              </th>
                              {/* <th class="text-secondary opacity-7">Image</th> */}
                              <th class="text-secondary opacity-7 ps-2">
                                Name
                              </th>
                              <th class="text-secondary opacity-7 ps-2">
                                Product
                              </th>
                              <th class="text-secondary opacity-7 ps-2">
                                Price
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {productlist &&
                              productlist.map((item, index) => (
                                <tr key={item._id}>
                                  <td>{index + 1}</td>
                                  {/* <td>
                                  <img
                                    src={item.product_id.image}
                                    class="avatar avatar-sm me-3"
                                    alt={item.name}
                                  />
                                </td> */}
                                  <td>{item.product_id.title}</td>
                                  <td>{item.product_id.product}</td>
                                  <td>{item.product_id.price}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-0 pb-2">
                      <p class="text-sm mb-0 text-uppercase font-weight-bold pl-4">
                        {" "}
                        Scheme Details
                      </p>
                      <div class="table-responsive p-5">
                        <table class="table align-items-center mb-0 ">
                          <thead>
                            <tr>
                              <th class="text-secondary opacity-7 ps-2">
                                S.No
                              </th>
                              {/* <th class="text-secondary opacity-7">Image</th> */}
                              <th class="text-secondary opacity-7 ps-2">
                                Scheme Name
                              </th>
                              <th class="text-secondary opacity-7 ps-2">
                                Scheme Code
                              </th>
                              <th class="text-secondary opacity-7 ps-2">
                                Scheme Duration
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {schemeList &&
                              schemeList.map((item, index) => (
                                <tr key={item._id}>
                                  <td>{index + 1}</td>
                                  {/* <td>
                                  <img
                                    src={item.product_id.image}
                                    class="avatar avatar-sm me-3"
                                    alt={item.name}
                                  />
                                </td> */}
                                  <td>{item.scheme_id.scheme_name}</td>
                                  <td>{item.scheme_id.scheme_code}</td>
                                  <td>{item.scheme_id.duration}</td>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default ViewCustomer;
