import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../config.json";
import axios from "axios";
import "./order.scss";
const OrderEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [rateid, setRateId] = useState("");
  const [customer_id, setCustomerId] = useState("");
  const [product_id, setProductId] = useState("");
  const [total_amount, setTotalAmount] = useState("");
  //   const [address, setAddress] = useState("");

  const [schemeUserId, setSchemeUserId] = useState("");
  const [customers, setCustomers] = useState([]);
  console.log(customers);
  const [productId, setProductsId] = useState([]);
  // console.log(productId);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getOrderView();
    // updateCustomer();
  }, []);
  const updateOrder = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        customer_id: customer_id,
        product_id: product_id,
        total_amount: total_amount,
        // address: address,
      }),
    };
    fetch(config.apiurl + `api/orders/${params.editid}`, headers)
      .then(() => toast("Order Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/orders");
        }, 5000)
      );
  };

  const getOrderView = async () => {
    console.log(params);
    let CustomerDetails = await fetch(
      config.apiurl + `api/orders/${params.editid}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    CustomerDetails = await CustomerDetails.json();
    console.log("CustomerDetails");
    console.log(CustomerDetails);
    // setCustomerId(CustomerDetails.data.results);

    setProductId(CustomerDetails.data._id);
    setTotalAmount(CustomerDetails.data.total_amount);
    // setAddress(CustomerDetails.data[0].address);
    // getProductvalue(schemeDetails.data[0].products);
  };
  useEffect(() => {
    axios
      .get(config.apiurl + "api/customers/getCustomer")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(config.apiurl + "api/orders/")
      .then((res) => {
        // console.log(res.data);
        setProductsId(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                      <h6 class="mb-0">Edit Order</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Customer Details
                        </label>
                        <select
                          className="form-control"
                          value={customer_id}
                          onChange={(e) => setCustomerId(e.target.value)}
                        >
                          <option>Choose Customer Name</option>
                          {customers &&
                            customers.length &&
                            customers.map((cus) => (
                              <option value={cus._id}>
                                {cus.name}-{cus.phone}
                              </option>
                            ))}
                        </select>

                        {error && !schemeUserId && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Customer Details
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product Details
                        </label>
                        <select
                          className="form-control"
                          value={product_id}
                          onChange={(e) => setProductId(e.target.value)}
                        >
                          <option>Choose Product</option>
                          {productId &&
                            productId.length &&
                            productId.map((prodt) => (
                              <option value={prodt.product_id}>
                                {prodt.customer_product_title}
                              </option>
                            ))}
                        </select>

                        {error && !schemeUserId && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the User Details
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Total Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={total_amount}
                          onChange={(e) => {
                            setTotalAmount(e.target.value);
                          }}
                        />
                        {error && !total_amount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Total Amount
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="submit"
                        onClick={updateOrder}
                        class="btn btn-primary btn-sm ms-auto mt-5"
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

export default OrderEdit;
