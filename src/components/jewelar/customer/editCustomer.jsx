import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../config.json";
import "./customer.scss";
const CustomerEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [rateid, setRateId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getCustomerView();
    // updateCustomer();
  }, []);
  const updateCustomer = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        address: address,
      }),
    };
    fetch(config.apiurl + `api/customers/${params.editid}`, headers)
      .then(() => toast("Customer Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/customer");
        }, 5000)
      );
  };

  const getCustomerView = async () => {
    let CustomerDetails = await fetch(
      config.apiurl + `api/customers/${params.editid}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    CustomerDetails = await CustomerDetails.json();

    setName(CustomerDetails.data[0].name);
    setEmail(CustomerDetails.data[0].email);
    setPhone(CustomerDetails.data[0].phone);
    setAddress(CustomerDetails.data[0].address);
    // getProductvalue(schemeDetails.data[0].products);
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
                      <h6 class="mb-0">Edit Customer</h6>
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
                          Phone
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
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Address
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                        {error && !address && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Address
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
                        onClick={updateCustomer}
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

export default CustomerEdit;
