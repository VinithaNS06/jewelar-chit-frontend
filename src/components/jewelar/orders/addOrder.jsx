import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const AddOrder = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [Raterowid, setRowId] = useState("");
  const [customer_id, setcustomer_id] = useState("");
  const [product_id, setProduct_Id] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  function addOrder() {
    const newOrder = {
      customer_id,
      product_id,
      totalAmount,
    };

    console.log(newOrder);
    fetch(config.apiurl + "api/orders/", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    })
      .then(() => toast.success("Order Created Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/orders");
        }, 5000)
      );
  }
  const [customersId, setCustomersid] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productName, setProductName] = useState("");
  const [schemeCustomerid, setSchemeCustomerid] = useState("");

  useEffect(() => {
    axios
      .get(config.apiurl + "api/customers/getCustomer")
      .then((res) => {
        console.log(res.data.data.results);
        setCustomersid(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(config.apiurl + "api/orders/")
      .then((res) => {
        console.log(res.data.data);
        setProductId(res.data.data);
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
                      <h6 class="mb-0">Add Order</h6>
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
                          Total Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={totalAmount}
                          onChange={(e) => {
                            setTotalAmount(e.target.value);
                          }}
                        />
                        {error && !totalAmount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Amount
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
                          Customer Details
                        </label>
                        <select
                          className="form-control"
                          value={customer_id}
                          onChange={(e) => setcustomer_id(e.target.value)}
                        >
                          <option>Choose Customer Name</option>
                          {customersId &&
                            customersId.map((usr) => (
                              <option value={usr._id} key={usr._id}>
                                {usr.name}-{usr.phone}
                              </option>
                            ))}
                        </select>

                        {error && !schemeCustomerid && (
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
                          Product Details
                        </label>
                        <select
                          className="form-control"
                          value={product_id}
                          onChange={(e) => setProduct_Id(e.target.value)}
                        >
                          <option>Choose Product</option>
                          {productId &&
                            productId.map((prodt) => (
                              <option value={prodt.product_id}>
                                {prodt.customer_product_title}
                              </option>
                            ))}
                        </select>

                        {error && !schemeCustomerid && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Customer Details
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={addOrder}
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

export default AddOrder;
