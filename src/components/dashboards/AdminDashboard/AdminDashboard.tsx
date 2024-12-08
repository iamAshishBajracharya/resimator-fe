import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Input, Dropdown, Form, MenuProps } from "antd";
import styled from 'styled-components';
import Page1 from "./Page1";
import Page2 from "./Page2";
import logo from '../../../assets/resimator-logo-2 1.jpg'
import iconGB from '../../../assets/GB.png'
import userIcon from '../../../assets/300-3 6.jpg'
import notificationIcon from '../../../assets/notification-on.svg'
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import menuToggleIcon from '../.../../../../assets/toggle-menu.svg'
import useMediaQuery from "../../../hooks/useMediaQuery";

// import MeterReadingTab from "./MeterReadingTab/MeterReadingTab";
// import Page1 from './Dashboard/Page1/Page1'

const { Header, Sider, Content } = Layout;


const StyledHeaderWrapper = styled.div`
header{
background: white;
padding: 14px 47px;
height: auto;
border-bottom: 1px solid #E3E4E4;
    .header-inner-container{
    display:flex;
    justify-content: space-between;
    }
    .left{
      display:flex;
      align-items:center;
    }
    .right{
        display: flex;
        gap: 27px;
        align-items:center;
        img{
        display: flex
        }
        @media (max-width: 768px){
          gap: 8px;
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
const StyledProfileIconContainer = styled.div`
    width: 44px;
    border-radius: 16px;
    overflow:hidden;
     @media (max-width: 768px){
          width: 20px;
        }
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

const StyledToggleIconContainer = styled.div`
  width: 44px;
  height: 39px;
  cursor: pointer;
`




const RenderMobileSearch = () => {

  const StyledSearchFormWrapper = styled.div`
  form {
  display:flex;
  gap: 24px;
  .ant-form-item{
  width: 100%;}
  }
  `

  const onSearchSubmit = (values: { search: string }) => {
    // Handle the search logic here, e.g., making an API request
    console.log('Search value:', values.search);
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <StyledSearchFormWrapper>
          <Form onFinish={onSearchSubmit} layout="inline">
            <Form.Item
              name="search"
              noStyle
              rules={[{ required: true, message: 'Please enter a search term' }]}
            >
              <Input
                className="search"
                prefix={<SearchOutlined />}
                style={{ height: '42px' }}
                placeholder="Search"
                onClick={e => e.stopPropagation()} // Prevent dropdown from closing
              />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" className="w-100">Search</Button>
            </Form.Item>
          </Form>
        </StyledSearchFormWrapper>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="topRight">
      {/* <Button>topRight</Button> */}
      <SearchOutlined style={{
        fontSize: '18px'
      }} />
    </Dropdown>
  )
}

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const isMobile = useMediaQuery('(max-width: 991px)');
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
                <StyledToggleIconContainer
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <img src={menuToggleIcon} alt="" />
                </StyledToggleIconContainer>
              </div>

              <div className="right">
                {!isMobile ? (
                  <div>
                    <Input className='search' prefix={<SearchOutlined />} style={{ height: '42px' }} placeholder="Search" />
                  </div>

                ) : (
                  RenderMobileSearch()
                )}
                <StyledIconContainer>
                  <img src={notificationIcon} alt="" />
                </StyledIconContainer>
                <StyledIconContainer>
                  <img src={iconGB} alt="" />
                </StyledIconContainer>
                <Dropdown overlay={menu} trigger={['click']}>
                  <StyledProfileIconContainer>
                    <img src={userIcon} alt="User" />
                  </StyledProfileIconContainer>
                </Dropdown>
              </div>

              {/* {isMobile ? (
                RenderMobileCta()
              ) : (
               
              )} */}

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
