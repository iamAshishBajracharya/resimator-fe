import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Assuming we have mock data for testing purposes
const useMockData = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    // Simulate fetching mock data
    const fetchMockData = () => {
      setTimeout(() => {
        // Set mock data after a delay
        setData([120, 130, 110, 140, 125]); // Mock data for the chart
      }, 1000); // Simulating a 1-second delay
    };

    fetchMockData();
  }, []);

  return data;
};

interface MetricsChartProps {
  title: string;
}

const MetricsChart: React.FC<MetricsChartProps> = ({ title }) => {
  const data = useMockData(); // Using mock data

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: title,
        data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Handle loading state if data is still fetching
  if (data.length === 0) return <div>Loading...</div>;

  return <Bar data={chartData} />;
};

export default MetricsChart;
