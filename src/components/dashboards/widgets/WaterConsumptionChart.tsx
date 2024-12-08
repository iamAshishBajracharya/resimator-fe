import { Card, Typography } from "antd";
import { Line } from "react-chartjs-2";
import { ArrowDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const StyledCardWrapper = styled.div`
.inner-container{
  display:flex;
  justify-content:space-between;
  position:relative;
  flex-wrap: wrap;
  .index-container{
  position: absolute;
  top: 0px;
  right: 0px;
  }
}
  .text-container{
    .title{
    margin: 0;
    font-size: 46px;
    }
  }
  .canvas-container{
    width: 128px;
    height: 56px;
    align-self: end;
  }
`

const WaterConsumptionCard = () => {
  // Chart.js Data
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Water Consumption 1",
        data: [130000, 125000, 123000, 120000],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Semi-transparent red
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: true, // Ensure the area under the line is filled
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Water Consumption 2",
        data: [110000, 185000, 111000, 130000],
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Semi-transparent blue
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        fill: true, // Ensure the area under the line is filled
        tension: 0.4,
        pointRadius: 0,
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
    <StyledCardWrapper>
      <Card
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="inner-container">
          <div className="text-container">
          <div>
            <Text style={{ color: "#5A5A5A" }}>Water consumption</Text>
            <Title level={1} className="title">
              120 000L
            </Title>
          </div>
          <div className="index-container">
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
         
          <div className="canvas-container">
          <Line data={chartData} options={chartOptions} />
        </div>
        </div>
       
      </Card>

    </StyledCardWrapper>

  );
};

export default WaterConsumptionCard;
