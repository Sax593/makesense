import Chart from "chart.js/auto";
import { useRef, useEffect, useState } from "react";

import "./style.scss";

export default function ResultVote() {
  const data = [
    {
      decision: "Nous déménageons a Madrid",
      vote: 35,
    },
    {
      decision: "Nous créons un autre campus a Madrid",
      vote: 15,
    },
    {
      decision: "Nous ne déménageons pas",
      vote: 3,
    },
  ];

  const [, setDoughnut] = useState(null);
  const [hasRendered, setHasRendered] = useState(false);
  const doughnutCanvas = useRef(null);

  useEffect(() => {
    if (hasRendered) return;
    setHasRendered(true);

    const createChart = async () => {
      const chart = await new Chart(doughnutCanvas.current, {
        type: "doughnut",
        data: {
          labels: data.map((row) => row.decision),
          datasets: [
            {
              label: "Suggest by vote",
              data: data.map((row) => row.vote),
            },
          ],
        },
      });
      setDoughnut(chart);
    };
    createChart();
  }, []);

  return <canvas ref={doughnutCanvas} className="standardCanvas" />;
}
