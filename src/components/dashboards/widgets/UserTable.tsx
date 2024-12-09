import React, { useState } from "react";
import { Table, Tag, Input, Button, Dropdown, Menu, Select, Space, Typography } from "antd";
import { SearchOutlined, FilterOutlined, DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";



const StyledTableContainer = styled.div`
  border: 1px solid #E3E4E4;
  // padding: 16px 24px;
  border-radius: 12px;
  table{
  .ant-table-cell{
    padding-left: 24px !important;
    padding-right: 24px !important;

  }
  }
  .table-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
      padding: 16px 24px;
  }
`

const StyledTitleContainer = styled.div`

`

interface UserData {
  key: string;
  property: string;
  email: string;
  phone: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
  publishedOn: string;
}


const {Title, Text}  = Typography
const UserTable: React.FC = () => {
  const [data,] = useState<UserData[]>([
    {
      key: "1",
      property: "Markus Virtanen",
      email: "finmarkus.virtanen@example.com",
      phone: "+358 40 1234567",
      role: "Owner",
      status: "Active",
      publishedOn: "15.01.2023",
    },
    {
      key: "2",
      property: "Anna Korhonen Horizon Homes Ltd.",
      email: "anna.korhonen@example.com",
      phone: "+358 50 2345678",
      role: "Property manager",
      status: "Inactive",
      publishedOn: "30.09.2022",
    },
    {
      key: "3",
      property: "Jukka Nieminen",
      email: "jukka.nieminen@example.com",
      phone: "+358 40 4567890",
      role: "Partner supervisor",
      status: "Active",
      publishedOn: "20.11.2021",
    },
    {
      key: "4",
      property: "Laura Rantanen",
      email: "laura.rantanen@example.com",
      phone: "+358 50 5678901",
      role: "Board member",
      status: "Pending",
      publishedOn: "10.06.2022",
    },
    {
      key: "5",
      property: "Janne Lahtinen Oasis complex pvt ltd",
      email: "janne.lahtinen@example.com",
      phone: "+358 45 6789012",
      role: "Owner",
      status: "Active",
      publishedOn: "05.12.2020",
    },
    {
      key: "6",
      property: "Tiina Hakala",
      email: "tiina.hakala@example.com",
      phone: "+358 40 7890123",
      role: "Resident",
      status: "Active",
      publishedOn: "18.07.2023",
    },
    {
      key: "7",
      property: "Petri Saarinen",
      email: "petri.saarinen@example.com",
      phone: "+358 50 8901234",
      role: "Anonymous user",
      status: "Active",
      publishedOn: "25.04.2021",
    },
  ]);

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      sorter: (a: UserData, b: UserData) => a.property.localeCompare(b.property),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const color = status === "Active" ? "green" : status === "Pending" ? "orange" : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Published on",
      dataIndex: "publishedOn",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Dropdown
          overlay={
            <Menu
              items={[
                { key: "1", label: "Edit" },
                { key: "2", label: "Delete" },
              ]}
            />
          }
        >
          <Button>...</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <StyledTableContainer>
      <div className="table-header">
        <StyledTitleContainer>
          <Title level={3}>User List</Title>
          <Text>Manage your team members and their account permissions here.</Text>
        </StyledTitleContainer>
        <Space>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
          <Button size="large" icon={<FilterOutlined />}>More filters</Button>
          <Button size="large" icon={<DownloadOutlined />}></Button>
          <Button size="large" type="primary">
            Add
          </Button>
        </Space>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        rowClassName={(_, index) => (index % 2 === 0 ? "odd-row" : "")}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
        footer={() => (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Select defaultValue={5} style={{ width: 120 }}>
              <Select.Option value={5}>5 Users per page</Select.Option>
              <Select.Option value={10}>10 Users per page</Select.Option>
            </Select>
            <div>
              Previous | <span style={{ fontWeight: "bold" }}>1</span> | Next
            </div>
          </div>
        )}
      />
    </StyledTableContainer>
  );
};

export default UserTable;
