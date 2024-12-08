import { Button, Col, Input, Row, Table, Typography } from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import EnergyConsumptionChart from "../widgets/EnergyChart";
import { useState } from "react";
// import LanguageDropdown from "../LanguageDropdown";
import WaterConsumptionCard from "./WaterConsumptionChart";
import AddUserForm from "../../AddUserForm";
import styled from "styled-components";
import EnergyConsumptionWidget from "./EnergyConsumptionWidget";
// import SimpleChart from "../CustomChart/Index";
const { Title, Text } = Typography;

const StyledTitleWrapper = styled.div`
margin-bottom: 16px;
h3{
   font-weight:500;
    margin-bottom: 4px;
}
   
`
const  MeterReadingTab = () => {
    return ( <>
      <StyledTitleWrapper>
      <Title level={3}>Consumption Overview</Title>
      <Text type="secondary">Showing energy consumptions</Text>
      </StyledTitleWrapper>
      
        {/* <SimpleChart /> */}
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
            <Col xs={24} sm={12} md={8}>
             <WaterConsumptionCard />
            </Col>
        </Row>
        <br />
        <EnergyConsumptionWidget />
        {/* <WaterConsumptionCard /> */}
        {/* <LanguageDropdown /> */}
        {/* <EnergyConsumptionHeader /> */}
        {/* <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>

        <EnergyConsumptionChart />
        </Col>
        <Col xs={24} md={12}>
         <EditableTable />
        </Col>
        </Row> */}
        {/* <AddUserForm /> */}
    </> );
}
 
export default  MeterReadingTab;


// const EnergyConsumptionHeader = () => {
//     return (
//       <Row justify="space-between" align="middle" style={{ padding: "16px 0" }}>
//         {/* Left side: Title and subtitle */}
//         <Col>
//           <Typography.Title level={4} style={{ margin: 0 }}>
//             Energy consumptions
//           </Typography.Title>
//           <Text type="secondary">Showing all consumptions in each year</Text>
//         </Col>
  
//         {/* Right side: Buttons */}
//         <Col>
//           <Row gutter={8}>
//             <Col>
//               <Button icon={<FilterOutlined />}>More filters</Button>
//             </Col>
//             <Col>
//               <Button icon={<DownloadOutlined />}></Button>
//             </Col>
//             <Col>
//               <Button type="primary">Add Consumption</Button>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     );
//   };
  
//   export default EnergyConsumptionHeader;

// interface DataType {
//     key: string;
//     year: string;
//     waterConsumption: string;
//     electricityConsumption: string;
//     oilConsumption: string;
//   }
  
//   const EditableTable: React.FC = () => {
//     const [dataSource, setDataSource] = useState<DataType[]>([
//       { key: "1", year: "2024", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
//       { key: "2", year: "2023", waterConsumption: "4 500", electricityConsumption: "4 500", oilConsumption: "4 500" },
//       { key: "3", year: "2022", waterConsumption: "5 500", electricityConsumption: "5 500", oilConsumption: "5 500" },
//       { key: "4", year: "2021", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
//     ]);
  
//     const [editingKey, setEditingKey] = useState<string | null>(null);
  
//     const isEditing = (record: DataType) => record.key === editingKey;
  
//     const edit = (record: DataType) => {
//       setEditingKey(record.key);
//     };
  
//     const save = (key: string, newData: string, column: keyof DataType) => {
//       const newDataSource = dataSource.map((item) => {
//         if (item.key === key) {
//           return { ...item, [column]: newData };
//         }
//         return item;
//       });
//       setDataSource(newDataSource);
//       setEditingKey(null);
//     };
  
//     const columns = [
//       {
//         title: "Year",
//         dataIndex: "year",
//         key: "year",
//       },
//       {
//         title: "Water consumption (Liters)",
//         dataIndex: "waterConsumption",
//         key: "waterConsumption",
//       },
//       {
//         title: "Electricity consumption (kWh)",
//         dataIndex: "electricityConsumption",
//         key: "electricityConsumption",
//         render: (_: any, record: DataType) =>
//           isEditing(record) ? (
//             <Input
//               defaultValue={record.electricityConsumption}
//               onBlur={(e) => save(record.key, e.target.value, "electricityConsumption")}
//             />
//           ) : (
//             <span onClick={() => edit(record)}>{record.electricityConsumption}</span>
//           ),
//       },
//       {
//         title: "Oil (Liters)",
//         dataIndex: "oilConsumption",
//         key: "oilConsumption",
//       },
//     ];
  
//     return (
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         pagination={{
//           pageSize: 4,
//           showSizeChanger: false,
//         }}
//       />
//     );
//   };



  