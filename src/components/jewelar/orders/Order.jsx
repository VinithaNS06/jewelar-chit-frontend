import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import "./order.scss";
import config from "../../../config.json";

import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Order = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  // console.log(orders);
  const [custdata, setCustdata] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    let orderresult = await fetch(config.apiurl + "api/orders/");
    orderresult = await orderresult.json();
    setOrders(orderresult.data);
    console.log(orderresult.data);
  };
  const deleteOrder = async (id) => {
    let deleteordr = await fetch(config.apiurl + "api/orders/" + id, {
      method: "Delete",
      headers: {
        Authorization: "bearer " + accesstoken.data.access_token,
      },
    });
    deleteordr = await deleteordr.json();
    if (deleteordr) {
      getOrders();
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
                      <h6 className="mb-0">Orders</h6>
                    </div>

                    <div className="col-6 text-end">
                      <Link
                        className="btn bg-gradient-dark mb-0"
                        to="/orders/add"
                      >
                        <i className="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Order
                      </Link>
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
                            Customer Details
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Product Details
                          </th>
                          <th className="text-secondary opacity-7 ps-2">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders &&
                          orders.length &&
                          orders.map((order, index) => (
                            <tr key={order.customer_id}>
                              <td>{index + 1}</td>
                              <td>
                                <span>
                                  <p className="text-xs mb-2">
                                    Name: {order.customer_name}
                                  </p>
                                </span>
                                <span>
                                  <p className="text-xs mb-2">
                                    Address: {order.customer_address}
                                  </p>
                                </span>
                                <span>
                                  <p className="text-xs mb-2">
                                    Mobile: {order.customer_Phone}
                                  </p>
                                </span>
                              </td>

                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div className="d-flex flex-column justify-content-center">
                                    <div>
                                      <p className="text-xs mb-2">
                                        ProductName:
                                        {order.customer_product_title}
                                      </p>
                                    </div>
                                    <p className="text-xs mb-2">
                                      Product: {order.customer_product_product}
                                    </p>
                                  </div>
                                  <td>
                                    <div className="d-flex px-2 py-1">
                                      <div>
                                        <img
                                          src={
                                            config.apiurl +
                                            order.customer_product_image
                                          }
                                          className="avatar avatar-sm me-3"
                                          alt={order.product_id.title}
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </div>
                              </td>

                              <td>
                                <Link
                                  to={"/orders/edit/" + order._id}
                                  className="btn btn-link text-dark px-3 mb-0"
                                >
                                  <i
                                    className="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </Link>
                                <Link
                                  to={"/orders/view/" + order._id}
                                  className="btn btn-link text-success px-3 mb-0"
                                >
                                  <i
                                    className="fa fa-eye text-success me-2"
                                    aria-hidden="true"
                                  ></i>
                                  View
                                </Link>
                                <Link
                                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                                  onClick={() => deleteOrder(order._id)}
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

export default Order;
