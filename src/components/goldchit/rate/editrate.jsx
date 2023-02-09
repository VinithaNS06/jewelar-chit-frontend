import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../config.json";
const RateEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [rateid, setRateId] = useState("");
  const [type, setRateType] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    // updateRate();
    getRateView();
  }, []);
  const updateRate = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        type: type,
        rate: rate,
        status: status,
      }),
    };
    fetch(config.apiurl + `api/rates/${params.id}`, headers)
      .then(() => toast("Rate Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/rate");
        }, 5000)
      );
  };

  const getRateView = async () => {
    let RateDetails = await fetch(config.apiurl + `api/rates/${params.id}`, {
      method: "get",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    RateDetails = await RateDetails.json();
    // console.log(RateDetails);
    // setRateId(RateDetails.data[0]._id);
    setRateType(RateDetails.data.type);
    setRate(RateDetails.data.rate);
    setStatus(RateDetails.data.status);
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
                      <h6 class="mb-0">Edit Rate</h6>
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
                          Rate
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={rate}
                          onChange={(e) => {
                            setRate(e.target.value);
                          }}
                        />
                        {error && !rate && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Rate
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
                          Type
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={type}
                          onChange={(e) => {
                            setRateType(e.target.value);
                          }}
                        />
                        {error && !type && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Type
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
                        <input
                          class="form-control"
                          type="text"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        />
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
                        type="submit"
                        onClick={updateRate}
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

export default RateEdit;
