import React, { useState, useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";
import "./category.scss";
const AddCategory = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [name, setCategoryName] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function addCategories() {
    const newCategory = {
      name,
      //   category_id,
    };
    // console.log(newCategory);
    fetch(config.apiurl + "api/category/", {
      method: "POST",
      body: JSON.stringify(newCategory),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    });
  }
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
                      <h6 className="mb-0">Add Category</h6>
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
                          Category Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setCategoryName(e.target.value);
                          }}
                        />
                        {error && !name && (
                          <span className="text-danger text-gradient text-xs text-secondary">
                            Enter the Category Name
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
                        onClick={addCategories}
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

export default AddCategory;
