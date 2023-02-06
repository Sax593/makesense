import axios from "axios";
import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";
import propTypes from "prop-types";

import "./style.scss";

export default function ResultVote({ suggest }) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/choices/bysuggest/${suggest.id}`
      )
      .then(({ data }) => {
        setChartData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const doughnutCanvas = useRef(null);

  useEffect(() => {
    if (!chartData.length) return;
    Chart.defaults.color = "#FFF";
    const createChart = async () => {
      await new Chart(doughnutCanvas.current, {
        type: "doughnut",
        data: {
          labels: chartData.map((row) => `${row.title}`),
          datasets: [
            {
              label: "Suggest by vote",
              data: chartData.map((row) => row.count),
            },
          ],
        },
      });
    };
    createChart();
  }, [chartData]);

  return <canvas ref={doughnutCanvas} className="standardCanvas" />;
}

ResultVote.propTypes = {
  suggest: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
};
