import React, { useEffect, useState } from "react";
import config from "../../config.json";

const Filter = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch(config.apiurl + "api/rates/getrate")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  //   useEffect(() => {
  //     const filteredData = data.filter((item) => item.rate > 3);
  //     setFilteredData(filteredData);
  //   }, [data]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
          <div className="col-md-3 w-50">
            <input
              onChange={(e) => {
                setData(e.target.value);
              }}
              type="text"
              className="form-control w-100"
              placeholder="search products"
            />
          </div>
          <div className="col-md-3 w-50">
            <select
              className="form-control w-50 mt-2"
              value={filteredData}
              onChange={(e) => setFilteredData(e.target.value)}
            >
              <option value="all">All</option>
              <option value="products">5d</option>
              <option value="price">15d</option>
              <option value="price">1M-2M</option>
            </select>
          </div>
          <div className="col-md-3 w-50">
            <button className="btn w-50 mt-2">FILTER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
