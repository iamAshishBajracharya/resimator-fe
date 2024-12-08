import React, { useState } from "react";
import { Select } from "antd";
import moment from "moment";

const YearDropdown: React.FC = () => {
  // Get current year
  const currentYear = moment().year();

  // Generate years (e.g., last 10 years + next 10 years)
  const yearOptions = Array.from({ length: 21 }, (_, i) => {
    const year = currentYear - 10 + i;
    return { value: year.toString(), label: year.toString() };
  });

  // State to manage selected year
  const [selectedYear, setSelectedYear] = useState<string>(currentYear.toString());

  // Handle change
  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    console.log("Selected year:", value); // Optional: Log selected year
  };

  return (
    <Select
      style={{ width: 88 }}
      options={yearOptions}
      value={selectedYear} // Default to current year
      onChange={handleYearChange}
    />
  );
};

export default YearDropdown;
