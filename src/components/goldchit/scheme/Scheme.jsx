import config from "../../../config.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../headerbar/Header";

const Scheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [schemes, setSchemes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getSchemes();
  }, []);

  const getSchemes = async () => {
    let schresult = await fetch(config.apiurl + "/api/schemes/getscheme");
    schresult = await schresult.json();
    setSchemes(schresult.data);
    console.log(schresult.data);
  };

  const deleteSchemes = async (id) => {
    let deletecat = await fetch(config.apiurl + "/api/schemes/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getSchemes();
    }
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
                      <h6 class="mb-0">Schemes</h6>
                    </div>

                    <div class="col-6 text-end">
                      {/* <a href="javascript:void(0);" class="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp; */}
                      <a class="btn bg-gradient-dark mb-0" href="/scheme/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Scheme
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-3">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7 ps-2">
                            Scheme Name
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Scheme Code
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Duration
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Installment
                          </th>
                          <th class="text-secondary opacity-7 ps-2">Amount</th>
                          <th class="text-secondary opacity-7 ps-2">Grams</th>
                          <th class="text-secondary opacity-7 ps-2">Rate</th>
                          <th class="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemes.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src={config.apiurl + item.image}
                                    class="avatar avatar-sm me-3"
                                    alt={item.title}
                                  />
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">{item.title}</h6>
                                </div>
                              </div>
                            </td> */}
                            <td>
                              <h6 class="mb-0 text-sm">{item.scheme_name}</h6>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">
                                    {item.scheme_code}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.duration}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">
                                    {item.installment}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.amount}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.grams}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.rate}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a
                                href={"/scheme/edit/" + item._id}
                                class="btn btn-link text-dark px-3 mb-0"
                              >
                                <i
                                  class="fas fa-pencil-alt text-dark me-2"
                                  aria-hidden="true"
                                ></i>
                                Edit
                              </a>
                              <a
                                href={"/scheme/view/" + item._id}
                                class="btn btn-link text-success px-3 mb-0"
                              >
                                <i
                                  class="fa fa-eye text-success me-2"
                                  aria-hidden="true"
                                ></i>
                                View
                              </a>
                              <a
                                class="btn btn-link text-danger text-gradient px-3 mb-0"
                                onClick={() => deleteSchemes(item._id)}
                              >
                                <i
                                  class="far fa-trash-alt me-2"
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Scheme;
