import React from "react";
import { Line } from "react-chartjs-2";

interface ChartWidgetProps {
  title: string;
  data: number[];
  labels: string[];
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ChartWidget;
