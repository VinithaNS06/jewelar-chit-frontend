import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
const AddCustomer = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [Raterowid, setRowId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function addCustomer() {
    const newCustomer = {
      name,
      email,
      phone,
      address,
    };
    fetch(config.apiurl + "/api/customers/create", {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    })
      .then(() => toast("Customer Created Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/customer");
        }, 5000)
      );
  }

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
                      <h6 class="mb-0">Add Customer</h6>
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
                          Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        {error && !name && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Name
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
                          Email
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {error && !email && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Email
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
                          Mobile
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        {error && !phone && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Phone
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Address
                        </label>
                        <textarea
                          class="form-control"
                          rows="3"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={addCustomer}
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

export default AddCustomer;
