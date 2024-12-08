import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import { Typography } from "antd";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StyledChartContainer = styled.div`
height: 100%;
display:flex;
flex-direction: column;
.chart{
flex-grow: 1
}
`
const StyledTitleContainer = styled.div`
margin-bottom: 20px;
h3{
font-weight: 500;
margin-bottom: 4px;
}
span {
color: #414444;
}
`

const { Title: ChartTitle, Text } = Typography

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
        pointRadius: 0, // Circle size on the data points
        pointBackgroundColor: "#007bff", // Circle colour
        borderWidth: 2
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
        // text: "Annual energy consumption trend", // Chart title
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
    <StyledChartContainer>
      <StyledTitleContainer>
        <ChartTitle level={3}>
          Annual energy consumption trend
        </ChartTitle>
        <Text>Yearly consumption data usage trends over time.</Text>
      </StyledTitleContainer>
      <div className="chart">

        <div style={{ width: "100%", height: "100%" }}> {/* Chart container styling */}
          <Line data={data} options={options as any} />
        </div>
      </div>
    </StyledChartContainer>

  );
};

export default EnergyConsumptionChart;
