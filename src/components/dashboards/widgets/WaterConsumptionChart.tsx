import { Card, Typography } from "antd";
import { Line } from "react-chartjs-2";
import { ArrowDownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useRef } from "react";
import downIcon from '../../../assets/down-arrow.svg'
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
  span{
  display:flex;
  gap: 4px;
  color: #D92D20;
    .icon-container{
      width: 16px;
    }
  }
  }
}
  .text-container{
    .title{
    margin: 0;
    font-size: 46px;
    color:#101828;
    font-weight: 600;
    }
    .title-secondary {
    font-weight: 500;
    color:rgba(71, 84, 103, 1);
    }
  }
  .canvas-container{
    width: 128px;
    height: 56px;
    align-self: end;
  }
  .ant-card {
    border: 1px solid #E4E7EC;
  }
`

const WaterConsumptionCard = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
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
      <Card>
        <div className="inner-container">
          <div className="text-container">
          <div>
            <Text className="title-secondary">Water consumption</Text>
            <Title level={1} className="title">
              120 000L
            </Title>
          </div>
          <div className="index-container">
            <Text
              // style={{
              //   color: "red",
              //   fontWeight: "bold",
              //   display: "flex",
              //   alignItems: "center",
              // }}
            >
              <div className="icon-container">
                <img src={downIcon} alt="" />
              </div>
              {/* <ArrowDownOutlined style={{ marginRight: "4px" }} /> */}
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
