import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Input, Dropdown } from "antd";
import styled from 'styled-components';
import Page1 from "./Page1";
import Page2 from "./Page2";
import logo from '../../../assets/resimator-logo-2 1.jpg'
import iconGB from '../../../assets/GB.png'
import userIcon from '../../../assets/300-3 6.jpg'
import notificationIcon from '../../../assets/notification-on.svg'
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";


// import MeterReadingTab from "./MeterReadingTab/MeterReadingTab";
// import Page1 from './Dashboard/Page1/Page1'

const { Header, Sider, Content } = Layout;


const StyledHeaderWrapper = styled.div`
header{
background: white;
    .header-inner-container{
    display:flex;
    justify-content: space-between;
    }
    .right{
        display: flex;
        gap: 16px;
        align-items:center;
        img{
        display: flex
        }
    }
    .search{
    width: 320px;
    }
    
}
`
const StyledIconContainer = styled.div`
    width: 20px;
`
const StyledLogoContainer = styled.div`
    width: 45px;
    margin-bottom: 25px;
`
const StyledSiderContainer = styled.div`
    .sider {
      background: white;
      height: 100%;
      padding: 32px 17px;
    }
  
`
const StyledMenuContainer = styled.div`
ul{
height: 100vh;
}
    .ant-menu-item.ant-menu-item-selected{
        background-color: ${(props) => {
    console.log('props', props)
    return props.theme?.base?.color?.active
  }};
        color: white;
        .anticon{
            svg{
                path{
                    fill: white;
                    // stroke: white;
                }
            }
        }
    }
`

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  const handleLogout = () => {
    // Clear localStorage and handle logout logic
    dispatch(logout())
    // localStorage.removeItem('jwtToken');
    // localStorage.removeItem('user');
    // window.location.href = '/login'; // Redirect to login page
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="settings">
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <Page1 />;
      // return <div>Content for Nav 2</div>;
      case "2":
        return <Page2 />;
      case "3":
        return <div>Content for Nav 3</div>;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <StyledSiderContainer>
        <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
          <StyledLogoContainer className="logo-container">
            <img src={logo} alt="" />
          </StyledLogoContainer>
          <StyledMenuContainer>
            <Menu
              // theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={handleMenuClick} // Handle menu item clicks
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "Nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "Nav 3",
                },
              ]}
            />

          </StyledMenuContainer>

        </Sider>
      </StyledSiderContainer>

      <Layout>
        <StyledHeaderWrapper>
          <Header >
            <div className="header-inner-container">
              <div className="left">
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
              <div className="right">
                <div>
                  <Input className='search' prefix={<SearchOutlined />} style={{ height: '42px' }} />
                </div>
                <StyledIconContainer>
                  <img src={notificationIcon} alt="" />
                </StyledIconContainer>
                <StyledIconContainer>
                  <img src={iconGB} alt="" />
                </StyledIconContainer>
                <Dropdown overlay={menu} trigger={['click']}>
                  <StyledIconContainer>
                    <img src={userIcon} alt="User" />
                  </StyledIconContainer>
                </Dropdown>
              </div>
              {/* <Input size='small' className='search' prefix={<SearchOutlined />} /> */}

            </div>

          </Header>
        </StyledHeaderWrapper>
        <Content
          style={{
            // margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: 'white',
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
