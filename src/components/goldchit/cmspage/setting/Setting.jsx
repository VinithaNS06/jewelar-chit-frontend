import Sidebar from "../../../sidebar/Sidebar";
import Header from "../../../headerbar/Header";
import config from "../../../../config.json";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Setting = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [settings, setSettings] = useState([]);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    let prodresult = await fetch(config.apiurl + "api/setting/getsetting");
    prodresult = await prodresult.json();
    setSettings(prodresult.data.results);
  };

  const deleteProduct = async (id) => {
    let deletecat = await fetch(config.apiurl + "api/setting/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deletecat = await deletecat.json();
    if (deletecat) {
      getSettings();
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
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Settings</h6>
                    </div>
                  </div>
                </div>

                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-3">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-secondary opacity-7 ps-2">
                            S.No
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Page Name
                          </th>
                          {/* <th className="text-secondary opacity-7 ps-2">
                            Description
                          </th> */}

                          <th className="text-secondary opacity-7">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {settings.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-1 text-sm ">
                                    {item.pagename}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <h6 className="mb-1 text-sm ">
                                      {item.Desc}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </td> */}

                            <td>
                              <Link
                                to={"/settings/edit/" + item._id}
                                className="btn btn-link text-dark px-3 mb-0"
                              >
                                <i
                                  className="fas fa-pencil-alt text-dark me-2"
                                  aria-hidden="true"
                                ></i>
                                Edit
                              </Link>
                              <Link
                                className="btn btn-link text-danger text-gradient px-3 mb-0"
                                onClick={() => deleteProduct(item._id)}
                              >
                                <i
                                  className="far fa-trash-alt me-2"
                                  aria-hidden="true"
                                ></i>
                                Delete
                              </Link>
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

export default Setting;
