import React, { useState, useEffect } from "react";
import config from "../../config.json";

import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale);

const BarChart = () => {
  const [orderlist, setOrderList] = useState({});
  useEffect(() => {
    getSchemes();
  }, []);

  const getSchemes = async () => {
    let schresult = await fetch(
      config.apiurl + "api/orders/orderlist/totalorder"
    );
    schresult = await schresult.json();
    setOrderList(schresult);
    console.log(schresult);
  };

  const data = {
    labels: orderlist?.results?.map((x) => x.customer_name),
    datasets: [
      {
        label: `${orderlist?.results?.length} Order List Available`,
        data: orderlist?.results?.map((x) => x.product_count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };
  return (
    <div>
      <Bar data={data} height={300} options={options} />
    </div>
  );
};
export default BarChart;
