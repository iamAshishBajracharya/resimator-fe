import { Button, Col, Row, Typography } from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import EnergyConsumptionChart from "./EnergyChart";
import EditableTable from "./EditableTable";
import styled from "styled-components";
const StyledEnergyConsumtionWidgetWrapper = styled.div`
border: 1px solid #E3E4E4;
border-radius: 8px;
border-top-left-radius: 0;
border-top-right-radius: 0;
`

const StyledHeader = styled.div`
padding: 16px 24px;
border-bottom: 1px solid #E3E4E4;
`
const StyledChartWrapper = styled.div`
    border: 1px solid #E3E4E4;
    height: 100%;
    padding: 24px;
`

const StyledBodyWrapper = styled.div`
    padding: 24px;
    border-top: 1px solid #E3E4E4;
`

const StyledTableWrapper = styled.div`
   width: 100%;
   overflow: auto;
     border: 1px solid #E3E4E4;
`
const EnergyConsumptionWidget = () => {
    return (
        <StyledEnergyConsumtionWidgetWrapper>
            <StyledHeader>
                <Row gutter={[16, 16]}>
                    {/* Left side: Title and subtitle */}
                    <Col sm = {24} md={12}>
                        <Typography.Title level={4} style={{ margin: 0 }}>
                            Energy consumptions
                        </Typography.Title>
                        <Typography.Text type="secondary">Showing all consumptions in each year</Typography.Text>
                    </Col>

                    {/* Right side: Buttons */}
                    <Col sm = {24} md={12}>
                        <Row gutter={8} justify="end">
                            <Col>
                                <Button icon={<FilterOutlined />}>More filters</Button>
                            </Col>
                            <Col>
                                <Button icon={<DownloadOutlined />}></Button>
                            </Col>
                            <Col>
                                <Button type="primary">Add Consumption</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </StyledHeader>
            <StyledBodyWrapper>
                <Row gutter={[16, 16]}>
                    <Col md={24} lg={12}>
                        <StyledChartWrapper>
                            <EnergyConsumptionChart />
                        </StyledChartWrapper>

                    </Col>
                    <Col md={24} lg={12}>
                        <StyledTableWrapper>
                        <EditableTable />
                        </StyledTableWrapper>
                        
                    </Col>
                </Row>
            </StyledBodyWrapper>

        </StyledEnergyConsumtionWidgetWrapper>

    );
}

export default EnergyConsumptionWidget;