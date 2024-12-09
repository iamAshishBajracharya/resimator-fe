import { Breadcrumb, Typography } from "antd";
import UserTable from "../widgets/UserTable";
import homeIcon from '../../../assets/icon-home.svg'
import styled from "styled-components";
import {RightOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";
const StyledIconContainer = styled.div`
width: 14px;
`

const StyledTitleWrapper = styled.div`
margin-bottom: 12px;
h2{
font-weight: 600px;
color: #191A1A;
}
`

const StyledBreadCrumbsWrapper = styled.div`
margin-bottom: 16px;
`

const {Title} = Typography
const Page2 = () => {
    return (
        <>
            <StyledTitleWrapper>
                <Title level={2}>User Overview</Title>
            </StyledTitleWrapper>
            <StyledBreadCrumbsWrapper>
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link to = "/">
                                <StyledIconContainer>
                                <img src={homeIcon} alt="" />
                            </StyledIconContainer>
                            </Link>
                            
                        ),
                    },
                    {
                        title: (
                            <Link to = "/">
                            Settings
                            </Link>
                            
                        ),
                    },
                    {
                        title: 'User',
                    },
                ]}
                separator={<RightOutlined />}
            />
            </StyledBreadCrumbsWrapper>
            
            <UserTable />
        </>

    );
}

export default Page2;