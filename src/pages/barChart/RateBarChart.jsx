import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import config from "../../config.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [orderlist, setOrderList] = useState({});
  useEffect(() => {
    getSchemes();
  }, []);

  const getSchemes = async () => {
    let schresult = await fetch(
      config.apiurl + "api/ratehistory/get_rate_history"
    );
    schresult = await schresult.json();
    setOrderList(schresult);
    console.log(schresult);
  };

  const data = {
    labels: orderlist?.data?.map((x) => x.date_on),
    datasets: [
      {
        label: `${orderlist?.data?.length} Rate List Available`,
        data: orderlist?.data?.map((x) => x.rate),

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
        borderWidth: 3,
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
      <Line data={data} height={250} options={options} />
    </div>
  );
};
export default LineChart;
