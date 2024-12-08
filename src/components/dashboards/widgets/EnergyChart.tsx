import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyConsumptionChart = () => {
  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], // X-axis labels
    datasets: [
      {
        label: "Consumption", // Line label
        data: [300, 400, 600, 800, 750, 900, 1000], // Y-axis data points
        borderColor: "#007bff", // Line colour
        backgroundColor: "rgba(0, 123, 255, 0.1)", // Fill area colour
        tension: 0.4, // Smoothness of the line
        fill: true, // Fill the area under the line
        pointRadius: 3, // Circle size on the data points
        pointBackgroundColor: "#007bff", // Circle colour
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend (optional)
      },
      title: {
        display: true,
        text: "Annual energy consumption trend", // Chart title
        align: "start",
        font: {
          size: 16,
        },
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year", // X-axis label
        },
        grid: {
          display: false, // Hide gridlines for a cleaner look
        },
      },
      y: {
        title: {
          display: true,
          text: "Consumption", // Y-axis label
        },
        ticks: {
          stepSize: 200, // Custom step size for the Y-axis
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height:"100%"}}> {/* Chart container styling */}
      <Line data={data} options={options as any} />
    </div>
  );
};

export default EnergyConsumptionChart;
