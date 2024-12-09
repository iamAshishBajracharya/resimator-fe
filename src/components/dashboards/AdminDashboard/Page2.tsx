import { Breadcrumb, Switch, Typography } from "antd";
import UserTable from "../widgets/UserTable";
import homeIcon from '../../../assets/icon-home.svg'
import styled from "styled-components";
import { RightOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import AddUserForm from "../../AddUserForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../features/user/userSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";
const StyledIconContainer = styled.div`
width: 14px;
`

const StyledTitleWrapper = styled.div`
margin-bottom: 12px;
display:flex;
justify-content: space-between;
h2{
font-weight: 600px;
color: #191A1A;
}
`

const StyledBreadCrumbsWrapper = styled.div`
margin-bottom: 16px;
`

const { Title } = Typography
const Page2 = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { users, loading, error } = useSelector((state: RootState) => state.user);
    useEffect(() =>{
        dispatch(fetchUsers())
    },[])
   
    return (
        <>
            <StyledTitleWrapper>
                <Title level={2}>User Overview</Title>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Switch defaultChecked />
                    <span>All</span>
                </div>
            </StyledTitleWrapper>
            <StyledBreadCrumbsWrapper>
                <Breadcrumb
                    items={[
                        {
                            title: (
                                <Link to="/">
                                    <StyledIconContainer>
                                        <img src={homeIcon} alt="" />
                                    </StyledIconContainer>
                                </Link>

                            ),
                        },
                        {
                            title: (
                                <Link to="/">
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

            <UserTable data = {users || []} loading = {loading} error = {error} />
            <AddUserForm />
        </>

    );
}

export default Page2;