import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate, useParams } from "react-router-dom";

const SchemeEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [product_id, setProductId] = useState("");
  const [scheme_name, setSchemeName] = useState("");
  const [scheme_desc, setProductDesc] = useState("");
  const [scheme_code, setSchemeCode] = useState("");
  const [duration, setDuration] = useState("");
  const [rate, setRate] = useState("");
  const [grams, setGrams] = useState("");
  const [installment, setInstallMent] = useState("");
  const [min_amount, setMinAmount] = useState("");
  const [max_amount, setMaxAmount] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    // updateRate();
    getProductView();
  }, []);
  const updateProduct = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        scheme_name,
        scheme_desc,
        scheme_code,
        duration,
        grams,
        rate,
        installment,
        min_amount,
        max_amount,
        status,
      }),
    };
    fetch(config.apiurl + `/api/schemes/${params.id}`, headers)
      .then(() => toast("Scheme Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/scheme");
        }, 5000)
      );
  };

  const getProductView = async () => {
    let ProductDetails = await fetch(
      config.apiurl + `/api/schemes/${params.id}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    ProductDetails = await ProductDetails.json();
    console.log(ProductDetails);
    setSchemeName(ProductDetails.data[0].scheme_name);
    setProductDesc(ProductDetails.data[0].scheme_desc);
    setSchemeCode(ProductDetails.data[0].scheme_code);
    setDuration(ProductDetails.data[0].duration);
    setRate(ProductDetails.data[0].rate);
    setGrams(ProductDetails.data[0].grams);
    setInstallMent(ProductDetails.data[0].installment);
    setMinAmount(ProductDetails.data[0].min_amount);
    setMaxAmount(ProductDetails.data[0].max_amount);
    setStatus(ProductDetails.data[0].status);
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
                      <h6 class="mb-0">Edit Scheme</h6>
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
                          Product Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={scheme_name}
                          onChange={(e) => {
                            setSchemeName(e.target.value);
                          }}
                        />
                        {error && !scheme_name && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Product Name
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
                          Product Description
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={scheme_desc}
                          onChange={(e) => {
                            setProductDesc(e.target.value);
                          }}
                        />
                        {error && !scheme_desc && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Description
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
                          Scheme Code
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={scheme_code}
                          onChange={(e) => {
                            setSchemeCode(e.target.value);
                          }}
                        />
                        {error && !scheme_code && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Scheme Code
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
                          Duration
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                        {error && !duration && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Duration
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
                          Rate
                        </label>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            value="Yes"
                            name="rate"
                            onChange={(e) => {
                              setRate(e.target.value);
                            }}
                          />
                          <label class="form-check-label">yes</label>
                          <br></br>
                          <input
                            class="form-check-input"
                            type="radio"
                            value="No"
                            name="rate"
                            onChange={(e) => {
                              setRate(e.target.value);
                            }}
                          />
                          <label class="form-check-label">No</label>
                          <br></br>
                          {error && !grams && (
                            <span class="text-danger text-gradient text-xs text-secondary">
                              Enter the Rate
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Grams
                        </label>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            value="Yes"
                            name="grams"
                            onChange={(e) => {
                              setGrams(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="yes">
                            yes
                          </label>
                          <br></br>
                          <input
                            class="form-check-input"
                            type="radio"
                            value="No"
                            name="grams"
                            onChange={(e) => {
                              setGrams(e.target.value);
                            }}
                          />
                          <label class="form-check-label" for="no">
                            No
                          </label>
                          <br></br>
                          {error && !grams && (
                            <span class="text-danger text-gradient text-xs text-secondary">
                              Enter the Grams
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Installment
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={installment}
                          onChange={(e) => {
                            setInstallMent(e.target.value);
                          }}
                        />
                        {error && !installment && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Installment
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
                          Minimum Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={min_amount}
                          onChange={(e) => {
                            setMinAmount(e.target.value);
                          }}
                        />
                        {error && !min_amount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Minimum Amount
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
                          Maximum Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={max_amount}
                          onChange={(e) => {
                            setMaxAmount(e.target.value);
                          }}
                        />
                        {error && !max_amount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Maximum Amount
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
                          Status
                        </label>
                        <select
                          class="form-control"
                          type="text"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        >
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>InActive</option>
                        </select>
                        {error && !status && (
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
                        onClick={updateProduct}
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

export default SchemeEdit;
