import { Dropdown, Menu, Table } from "antd";
import { useEffect, useState } from "react";
import { EllipsisOutlined } from '@ant-design/icons'
import styled from "styled-components";
import useMediaQuery from "../../../hooks/useMediaQuery";

const StyledTableWrapper = styled.div`
.ant-table-thead{
border: 5px solid green;
tr{
        th{
background: white;
}
}
}
.odd-row {
  background-color: #F9FAFB; /* Light gray background for odd rows */
}
`

const StyledTableTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
    font-size: 12px;
    font-weight: 500;
    color: #667085;
    }
    small{
        font-size: 12px;
        font-weight: 400;
        color: #667085;
    }
`

const StyledIconContainer = styled.div`
span{
transform: rotateZ(90deg);
}
`
interface DataType {
    key: string;
    year: string;
    waterConsumption: string;
    electricityConsumption: string;
    oilConsumption: string;
}

const ReadOnlyTable: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:768px)')

    const [dataSource] = useState<DataType[]>([
        { key: "1", year: "2024", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
        { key: "2", year: "2023", waterConsumption: "4 500", electricityConsumption: "4 500", oilConsumption: "4 500" },
        { key: "3", year: "2022", waterConsumption: "5 500", electricityConsumption: "5 500", oilConsumption: "5 500" },
        { key: "4", year: "2021", waterConsumption: "2 500", electricityConsumption: "2 500", oilConsumption: "2 500" },
    ]);

    const columns = [
        {
            title: (
                <StyledTableTitleWrapper><span>Year</span></StyledTableTitleWrapper>
            ),
            dataIndex: "year",
            key: "year",
            fixed: isMobile ? "left" : false,
        },
        {
            title: (
                <StyledTableTitleWrapper>
                    <span>Water consumption</span>
                    <small>(Liters)</small>
                </StyledTableTitleWrapper>
            ),
            dataIndex: "waterConsumption",
            key: "waterConsumption",
            width: 100,
        },
        {
            title: (
                <StyledTableTitleWrapper>
                    <span>Electricity Consumption</span>
                    <small>(kWh)</small>
                </StyledTableTitleWrapper>
            ),
            dataIndex: "electricityConsumption",
            key: "electricityConsumption",
            width: 100,
        },
        {
            title: (
                <StyledTableTitleWrapper>
                    <span>Oil Consumption</span>
                    <small>(Liters)</small>
                </StyledTableTitleWrapper>
            ),
            dataIndex: "oilConsumption",
            key: "oilConsumption",
            width: 100,
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
                    <StyledIconContainer>
                        <EllipsisOutlined style={{ fontSize: '24px', color: '#595959' }} />
                    </StyledIconContainer>
                </Dropdown>
            ),
            width: 100,
        },
    ];

    return (
        <StyledTableWrapper>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowClassName={(_, index) => (index % 2 === 0 ? "odd-row" : "")}
                pagination={{
                    pageSize: 4,
                    showSizeChanger: false,
                }}
                style={{ border: "1px solid #f0f0f0" }}
            />
        </StyledTableWrapper>
    );
};

export default ReadOnlyTable;
