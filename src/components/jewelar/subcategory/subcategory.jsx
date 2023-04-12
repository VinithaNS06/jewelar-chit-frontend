import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import "./subcategory.scss";
import config from "../../../config.json";

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CategorySub = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location?.pathname?.split("/")?.[3]);
  useEffect(() => {
    getCategory();
    // getSubcategory();
  }, [location?.pathname?.split("/")?.[3]]);

  const getCategory = async () => {
    let catresult = await fetch(config.apiurl + "api/subcategory/");
    catresult = await catresult.json();
    setCategories(catresult.data.results);
  };

  const [name, setName] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [updateid, setUpdateid] = useState("");
  const [error, setError] = useState(false);

  const handleCatsubmit = async () => {
    if (!name) {
      setError(true);
      return false;
    }
    let apicaturl = "";
    let methodapi = "";
    if (updateid) {
      apicaturl = config.apiurl + "api/subcategory/" + updateid;
      methodapi = "put";
    } else {
      apicaturl = config.apiurl + "api/subcategory/create";
      methodapi = "post";
    }

    let addcat = await fetch(apicaturl, {
      method: methodapi,
      body: JSON.stringify({
        name,
        category_id: location?.pathname?.split("/")?.[3],
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });

    let addcatrs = await addcat.json();
    if (addcatrs.status == "true") {
      getCategory();
    }
  };

  const getSubcategory = async (editid) => {
    let subcateditdetails = await fetch(
      config.apiurl + "api/subcategory/subcat/" + editid,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    subcateditdetails = await subcateditdetails.json();
    setName(subcateditdetails?.data[0]?.name);
    setCategoryId(subcateditdetails?.data[0]?.category_id);
    setUpdateid(subcateditdetails?.data[0]?._id);
  };
  const deleteCategory = async (id) => {
    let deletecat = await fetch(config.apiurl + "/subcategory/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getCategory();
    }
  };

  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">SubCategory</h6>
                    </div>
                  </div>
                </div>

                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-5">
                    <table className="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th className="text-secondary opacity-7 ps-2">
                            S.No
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Name
                          </th>
                          <th className="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">{item.name}</h6>
                                </div>
                              </div>
                            </td>

                            <td>
                              <a
                                onClick={() => getSubcategory(item._id)}
                                className="btn btn-link text-dark px-3 mb-0"
                              >
                                <i
                                  className="fas fa-pencil-alt text-dark me-2"
                                  aria-hidden="true"
                                ></i>
                                Edit
                              </a>
                              <a
                                className="btn btn-link text-danger text-gradient px-3 mb-0"
                                onClick={() => deleteCategory(item._id)}
                              >
                                <i
                                  className="far fa-trash-alt me-2"
                                  aria-hidden="true"
                                ></i>
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Add/Edit SubCategory</h6>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Category name"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
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
                  <div className="row">
                    <div className="text-end">
                      <button
                        type="button"
                        onClick={handleCatsubmit}
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

export default CategorySub;
