import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate, useParams } from "react-router-dom";

const PayUserScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [status, setStatus] = useState("");
  const [payment_status, setPaymentStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    // updateRate();
    getPaymentView();
  }, []);
  const updateUserScheme = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        payment_status,
      }),
    };
    fetch(config.apiurl + `api/payments/userschemepay/${params.id}`, headers)
      .then(() => toast("Payment Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/userscheme");
        }, 5000)
      );
  };
  const getPaymentView = async () => {
    let PaymentDetails = await fetch(
      config.apiurl + "api/userscheme/getuserscheme",
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    PaymentDetails = await PaymentDetails.json();
    console.log(PaymentDetails.data);
    setPaymentStatus(PaymentDetails.data.payment_status);
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
                      <h6 class="mb-0">Pay UserScheme</h6>
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
                          Payement Status
                        </label>
                        <select
                          class="form-control"
                          type="text"
                          value={payment_status}
                          onChange={(e) => {
                            setPaymentStatus(e.target.value);
                          }}
                        >
                          <option>Select Status</option>
                          <option>Paid</option>
                          <option>Pending</option>
                        </select>
                        {error && !payment_status && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Status
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
                        onClick={updateUserScheme}
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

export default PayUserScheme;
