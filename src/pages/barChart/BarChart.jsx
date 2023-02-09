import React, { useRef } from "react";

import "./barChart.css";
import { getElementAtEvent, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "Sales Of the Week",
        data: [6, 3, 9, 3.69],
        pointBackgroundColor: "aqua",
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        Filler: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  };
  const chartRef = useRef();
  const updateChart = (event) => {
    // console.log(chartRef);
    // console.log(getElementAtEvent(chartRef.current, event));
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNum = getElementAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      console.log(`Dataset Index:${datasetIndexNum} and DP:${dataPoint}`);
    }
  };
  return (
    <>
      <div className="barchrt">
        <Line
          data={data}
          options={options}
          onClick={updateChart}
          ref={chartRef}
        ></Line>
      </div>
    </>
  );
};

export default BarChart;
