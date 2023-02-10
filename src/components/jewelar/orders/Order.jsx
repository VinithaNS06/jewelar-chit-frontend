import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/headerbar/Header";
import "./order.scss";
import config from "../../../config.json";

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
                      <h6 class="mb-0">Orders</h6>
                    </div>

                    <div class="col-6 text-end">
                      {/* <a href="javascript:void(0);" class="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp; */}
                      <a class="btn bg-gradient-dark mb-0" href="/orders/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Order
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
                          {/* <th class="text-secondary opacity-7 ps-2">
                            # Order ID
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">
                            Customer Details
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Product Details
                          </th>
                          {/* <th class="text-secondary opacity-7 ps-2">
                            Total Amount
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders &&
                          orders.length &&
                          orders.map((item, index) => (
                            <tr key={item._id}>
                              <td>{index + 1}</td>

                              <td>
                                {/* Phone:{" "}
                                {item.user_phone} */}
                                <p class="text-xs mb-2">
                                  Name: {item.customer_name}
                                  <p class="text-xs mb-2">
                                    Address: {item.customer_address}
                                  </p>
                                  <p class="text-xs mb-2">
                                    Mobile: {item.customer_Phone}
                                  </p>
                                </p>
                              </td>
                              <td>
                                <div class="d-flex px-2 py-1">
                                  <div class="d-flex flex-column justify-content-center">
                                    <p class="text-xs mb-2">
                                      ProductName: {item.customer_product_title}
                                    </p>
                                    <p class="text-xs mb-2">
                                      Product {item.customer_product_product}
                                    </p>
                                    {/* <p class="text-xs mb-2">
                                      Price: {item.customer_product_price}
                                    </p> */}
                                  </div>

                                  <td>
                                    <div class="d-flex px-2 py-1">
                                      <div>
                                        <img
                                          src={
                                            config.baseurl +
                                            item.customer_product_image
                                          }
                                          class="avatar avatar-sm me-3"
                                          alt={item.title}
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </div>
                              </td>

                              <td>
                                <a
                                  href={"/orders/edit/" + item._id}
                                  class="btn btn-link text-dark px-3 mb-0"
                                >
                                  <i
                                    class="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </a>
                                <a
                                  href={"/orders/view/" + item._id}
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
                                  onClick={() => deleteOrder(item._id)}
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

export default Order;
