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

    try {
      const response = await fetch(
        config.apiurl + `api/payments/userschemepay/${params.viewid}`,
        headers
      );
      if (response.ok) {
        toast("Payment Updated Successfully");
        setTimeout(() => {
          navigate("/userschemes");
        }, 5000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getPaymentView = async () => {
    let PaymentDetails = await fetch(
      config.apiurl + "api/userschemes/getuserscheme",
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    PaymentDetails = await PaymentDetails.json();
    console.log(PaymentDetails?.data);
    setPaymentStatus(PaymentDetails?.data.payment_status);
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
                      <h6 className="mb-0">Pay UserScheme</h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Payement Status
                        </label>
                        <select
                          className="form-control"
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
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Status
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                  <div className="row">
                    <div className="text-end">
                      <button
                        type="button"
                        onClick={updateUserScheme}
                        className="btn btn-primary btn-sm ms-auto mt-5"
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
