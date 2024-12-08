import { Input, Table } from "antd";
import { useState } from "react";

interface DataType {
    key: string;
    year: string;
    waterConsumption: string;
    electricityConsumption: string;
    oilConsumption: string;
  }
  
  const EditableTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([
      { key: "1", year: "2024", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
      { key: "2", year: "2023", waterConsumption: "4 500", electricityConsumption: "4 500", oilConsumption: "4 500" },
      { key: "3", year: "2022", waterConsumption: "5 500", electricityConsumption: "5 500", oilConsumption: "5 500" },
      { key: "4", year: "2021", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
    ]);
  
    const [editingKey, setEditingKey] = useState<string | null>(null);
  
    const isEditing = (record: DataType) => record.key === editingKey;
  
    const edit = (record: DataType) => {
      setEditingKey(record.key);
    };
  
    const save = (key: string, newData: string, column: keyof DataType) => {
      const newDataSource = dataSource.map((item) => {
        if (item.key === key) {
          return { ...item, [column]: newData };
        }
        return item;
      });
      setDataSource(newDataSource);
      setEditingKey(null);
    };
  
    const columns = [
      {
        title: "Year",
        dataIndex: "year",
        key: "year",
        fixed: "left", 
      },
      {
        title: "Water consumption (Liters)",
        dataIndex: "waterConsumption",
        key: "waterConsumption",
      },
      {
        title: "Electricity consumption (kWh)",
        dataIndex: "electricityConsumption",
        key: "electricityConsumption",
        render: (_: any, record: DataType) =>
          isEditing(record) ? (
            <Input
              defaultValue={record.electricityConsumption}
              onBlur={(e) => save(record.key, e.target.value, "electricityConsumption")}
            />
          ) : (
            <span onClick={() => edit(record)}>{record.electricityConsumption}</span>
          ),
      },
      {
        title: "Oil (Liters)",
        dataIndex: "oilConsumption",
        key: "oilConsumption",
      },
    ];
  
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 4,
          showSizeChanger: false,
        }}
      />
    );
  };

  export default EditableTable