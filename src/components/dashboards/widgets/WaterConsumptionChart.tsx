import { Card, Typography } from "antd";
import { Line } from "react-chartjs-2";
import { ArrowDownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const WaterConsumptionCard = () => {
  // Chart.js Data
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Water Consumption",
        data: [130000, 125000, 123000, 120000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart.js Options
  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <Card
      style={{
        // width: 300,
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Text style={{ color: "#5A5A5A" }}>Water consumption</Text>
          <Title level={3} style={{ margin: "8px 0" }}>
            120 000L
          </Title>
        </div>
        <div style={{ textAlign: "right" }}>
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowDownOutlined style={{ marginRight: "4px" }} />
            10%
          </Text>
        </div>
      </div>
      <Line data={chartData} options={chartOptions} height={60} />
    </Card>
  );
};

export default WaterConsumptionCard;
