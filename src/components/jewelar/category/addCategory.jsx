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
    fetch(config.apiurl + "/api/category/", {
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
                      <h6 class="mb-0">Add Category</h6>
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
                          Category Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setCategoryName(e.target.value);
                          }}
                        />
                        {error && !name && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Category Name
                          </span>
                        )}
                      </div>
                    </div>

                    {/* <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Sche Ce
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
                    </div> */}
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={addCategories}
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

export default AddCategory;
