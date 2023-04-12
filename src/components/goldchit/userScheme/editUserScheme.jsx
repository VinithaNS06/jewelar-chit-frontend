import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate, useParams } from "react-router-dom";

const UserSchemeEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [product_id, setProductId] = useState("");
  const [user_scheme_name, setUserSchemeName] = useState("");
  const [user_scheme_desc, setSchemeProductDesc] = useState("");
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
        user_scheme_name,
        user_scheme_desc,
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
    fetch(config.apiurl + `api/userscheme/${params.id}`, headers)
      .then(() => toast("Scheme Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/userscheme");
        }, 5000)
      );
  };

  const getProductView = async () => {
    let ProductDetails = await fetch(
      config.apiurl + `api/userscheme/${params.id}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    ProductDetails = await ProductDetails.json();
    console.log(ProductDetails);
    setUserSchemeName(ProductDetails.data.user_scheme_name);
    setSchemeProductDesc(ProductDetails.data.user_scheme_desc);
    setSchemeCode(ProductDetails.data.scheme_code);
    setDuration(ProductDetails.data.duration);
    setRate(ProductDetails.data.rate);
    setGrams(ProductDetails.data.grams);
    setInstallMent(ProductDetails.data.installment);
    setMinAmount(ProductDetails.data.min_amount);
    setMaxAmount(ProductDetails.data.max_amount);
    setStatus(ProductDetails.data[0].status);
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
                      <h6 className="mb-0">Edit Scheme</h6>
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
                          Product Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user_scheme_name}
                          onChange={(e) => {
                            setUserSchemeName(e.target.value);
                          }}
                        />
                        {error && !user_scheme_name && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Product Name
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Product Description
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={user_scheme_desc}
                          onChange={(e) => {
                            setSchemeProductDesc(e.target.value);
                          }}
                        />
                        {error && !user_scheme_desc && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Description
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Scheme Code
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={scheme_code}
                          onChange={(e) => {
                            setSchemeCode(e.target.value);
                          }}
                        />
                        {error && !scheme_code && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Scheme Code
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Duration
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                        {error && !duration && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Duration
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Rate
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Yes"
                            name="rate"
                            onChange={(e) => {
                              setRate(e.target.value);
                            }}
                          />
                          <label className="form-check-label">yes</label>
                          <br></br>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="No"
                            name="rate"
                            onChange={(e) => {
                              setRate(e.target.value);
                            }}
                          />
                          <label className="form-check-label">No</label>
                          <br></br>
                          {error && !grams && (
                            <span className="text-danger text-gradient text-xs text-secondary">
                              Enter the Rate
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Grams
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Yes"
                            name="grams"
                            onChange={(e) => {
                              setGrams(e.target.value);
                            }}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            yes
                          </label>
                          <br></br>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="No"
                            name="grams"
                            onChange={(e) => {
                              setGrams(e.target.value);
                            }}
                          />
                          <label className="form-check-label" htmlFor="no">
                            No
                          </label>
                          <br></br>
                          {error && !grams && (
                            <span className="text-danger text-gradient text-xs text-secondary">
                              Enter the Grams
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Installment
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={installment}
                          onChange={(e) => {
                            setInstallMent(e.target.value);
                          }}
                        />
                        {error && !installment && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Installment
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Minimum Amount
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={min_amount}
                          onChange={(e) => {
                            setMinAmount(e.target.value);
                          }}
                        />
                        {error && !min_amount && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Minimum Amount
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Maximum Amount
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={max_amount}
                          onChange={(e) => {
                            setMaxAmount(e.target.value);
                          }}
                        />
                        {error && !max_amount && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Maximum Amount
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Status
                        </label>
                        <select
                          className="form-control"
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
                        onClick={updateProduct}
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

export default UserSchemeEdit;
