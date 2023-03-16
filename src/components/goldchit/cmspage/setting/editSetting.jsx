import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Header from "../../../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../../config.json";
import { useNavigate, useParams } from "react-router-dom";

const EditSetting = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [product_id, setProductId] = useState("");
  const [pagename, setPageName] = useState("");
  const [Desc, setDesc] = useState("");
  const [customers, setCustomers] = useState([]);
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
        // pagename,
        Desc,
      }),
    };
    fetch(config.apiurl + `api/setting/${params.id}`, headers)
      .then(() => toast("Setting Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/settings");
        }, 5000)
      );
  };

  const getProductView = async () => {
    let ProductDetails = await fetch(
      config.apiurl + `api/setting/${params.id}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    ProductDetails = await ProductDetails.json();
    console.log(ProductDetails);
    setPageName(ProductDetails.data.pagename);
    setDesc(ProductDetails.data[0].Desc);
  };
  useEffect(() => {
    axios
      .get(config.apiurl + "api/setting/getsetting")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                      <h6 className="mb-0">Edit Settings</h6>
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
                          Setting Details
                        </label>
                        <select
                          className="form-control"
                          value={pagename}
                          onChange={(e) => setPageName(e.target.value)}
                        >
                          <option>Choose Setting Name</option>
                          {customers &&
                            customers.length &&
                            customers.map((cus) => (
                              <option>{cus.pagename}</option>
                            ))}
                        </select>

                        {error && !pagename && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Setting Details
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
                          Setting Description
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          rows="5"
                          value={Desc}
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                        {error && !Desc && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Description
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

export default EditSetting;
