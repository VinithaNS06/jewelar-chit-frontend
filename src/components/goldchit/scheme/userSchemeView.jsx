import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/headerbar/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import config from "../../../config.json";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";

const UserSchemeView = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  const [userSchemeList, setUserSchemeList] = useState([]);

  const getOrders = async () => {
    axios
      .get(
        config.apiurl +
          "api/userschemes/getschemebyuser/" +
          params.viewid / params.schemeid,
        {
          headers: {
            Authorization: "Bearer " + accesstoken.data.access_token,
          },
        }
      )
      .then((res) => {
        setUserSchemeList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        Hello
      </main>
    </>
  );
};

export default UserSchemeView;
